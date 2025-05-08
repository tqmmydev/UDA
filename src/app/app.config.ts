import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideHighlightOptions({
      lineNumbersOptions: {
        singleLine: false
      },
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        java: () => import('highlight.js/lib/languages/java'),
      },
      themePath: '/styles/github-dark.css'
    })
  ]
};
