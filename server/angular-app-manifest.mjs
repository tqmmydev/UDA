
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/ngx-highlightjs/fesm2022/ngx-highlightjs-line-numbers.mjs": [
    {
      "path": "chunk-LA526QAL.js",
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
    'index.csr.html': {size: 4264, hash: 'd042d895cf54abd9102afdff63b50489fc19fc4edb27941f69456779d821be2e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1121, hash: 'b6d742e270f272831af3c5976f92e079fe2f03bec12abbf067c2cc8fbb937bf8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AXMNX2ID.css': {size: 21390, hash: 'QiIB0zdqfLg', text: () => import('./assets-chunks/styles-AXMNX2ID_css.mjs').then(m => m.default)}
  },
};
