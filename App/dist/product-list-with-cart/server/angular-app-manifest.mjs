
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2486, hash: 'c7c1b26c47c3d29a933c0d86bf5a0e1baea3c546fe948b46d005db6d3373c2df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '0783c4d8674b4bbbb47548e0580892ea13d125b24a2a23ebdf60eab8e4fa15eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11771, hash: '12834aad49a6b8630135d30f9e21cdddb081a288e31aa8b8c017ba3c9360ec68', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DAPYC37N.css': {size: 1915, hash: 'qT1lPm9dKLM', text: () => import('./assets-chunks/styles-DAPYC37N_css.mjs').then(m => m.default)}
  },
};
