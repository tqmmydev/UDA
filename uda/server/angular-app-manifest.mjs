
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/ngx-highlightjs/fesm2022/ngx-highlightjs-line-numbers.mjs": [
    {
      "path": "chunk-TJMTPMPV.js",
      "dynamicImport": false
    }
  ],
  "node_modules/highlight.js/es/core.js": [
    {
      "path": "chunk-Z7S7HRF4.js",
      "dynamicImport": false
    }
  ],
  "node_modules/highlight.js/es/languages/java.js": [
    {
      "path": "chunk-3JGQXLGQ.js",
      "dynamicImport": false
    }
  ],
  "node_modules/highlight.js/es/languages/vim.js": [
    {
      "path": "chunk-DGL7L5E2.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 3512, hash: 'ac9f3441d4ade9d50c0188037285ca90b4fd02aa7b2bc4bf505922dee287fba3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1121, hash: 'c023ad34ba6974ed6b52b857947044ec443aabfd26442ad88794a40b59547f84', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XRDVCSFP.css': {size: 20642, hash: '7Ftu43wF03o', text: () => import('./assets-chunks/styles-XRDVCSFP_css.mjs').then(m => m.default)}
  },
};
