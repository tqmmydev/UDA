
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
    'index.csr.html': {size: 3512, hash: '6c783f18c08f9a7c247bf1068084fafc3d3f1735bd253ac7894b0e448fe88ef4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1121, hash: '254b370e49725125dc979999ae789f5ded72ac476c52824520d07408da8cc4db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XRDVCSFP.css': {size: 20642, hash: '7Ftu43wF03o', text: () => import('./assets-chunks/styles-XRDVCSFP_css.mjs').then(m => m.default)}
  },
};
