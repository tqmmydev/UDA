
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
    'index.csr.html': {size: 2385, hash: 'b4100645dcba8714fdf824987b986de9cd2935070f7fb00486ff13324d693ffe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1121, hash: '3aa171dc3541e4e2bfd18d3844388a427298184740c83f10d15e83c424bff42b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7VI5JPCC.css': {size: 6662, hash: 'F4LGc1aIenI', text: () => import('./assets-chunks/styles-7VI5JPCC_css.mjs').then(m => m.default)}
  },
};
