import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import cors from 'cors';

import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';
import { environment } from './environments/environment';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

import { google } from 'googleapis';
import expressSession from 'express-session';
const app = express();
const commonEngine = new CommonEngine();

const hostname = process.env['HOSTNAME'] || 'http://localhost:4000';
const port = process.env['PORT'] || 4000;


/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

app.use(cors({
  origin: `${hostname}`,
  credentials: true
}));
app.use(express.json());
app.use(expressSession({
  secret: environment.authKey,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // Set to true in production (HTTPS)
    httpOnly: true, // Important for security
    sameSite: 'lax' // Recommended for most cases
  }
}));

import { web } from './environments/oauth2_secret.json'
const oauth2Client = new google.auth.OAuth2(
  web.client_id,
  web.client_secret,
  `${hostname}/auth/google/callback` // Redirect URI - this is more appropriate than auth_uri
)

app.get('/auth/google/url', (req: any, res) => {
  const { callbackHost, callbackUrl } = req.query;
  if (!callbackHost || !callbackUrl) {
    res.status(400).send('Missing callback host and callback path');
    return;
  }
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ];

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // 'online' (default) or 'offline' (for refresh tokens)
    scope: scopes,
    redirect_uri: `${callbackHost}/auth/google/callback`, // Must match the one configured in Google Cloud Console
  });

  console.log(url);
  res.json({ url });
});

app.get('/auth/google/callback', async (req: any, res) => {
    const { code, state } = req.query;
    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        // Use the tokens to get user info (example)
        const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
        const userInfo = await oauth2.userinfo.get();

        // Store the tokens securely (e.g., in a database associated with the user)
        // ... database logic here ...
        console.log(userInfo);

        if (userInfo.data.hd !== 'itisetorricelli.it') {
          res.status(403).send('Email not authorized. itisetorricelli.it domain only');
          return;
        }


        // Store user info and token in session
        req.session.user = {
            email: userInfo.data.email,
            name: userInfo.data.name,
            photo: userInfo.data.picture,
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token
        };

        // Redirect to your Angular app after successful authentication
        res.redirect(hostname); // Replace with your desired route
    } catch (error) {
        console.error('Error exchanging code for tokens:', error);
        res.status(500).send('Authentication failed.');
    }
});

app.get('/api/profile', (req: any, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.get('/api/logout', (req: any, res) => {
  const { callbackUrl } = req.query;
  if (!callbackUrl) {
    res.status(400).send('Missing callback path');
    return;
  }
  req.session.destroy((err: any) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Logout failed.');
    } else {
      res.redirect(callbackUrl); // Redirect to login page
    }
  });
});

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html'
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  app.listen(port, () => {
    console.log(indexHtml);

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
