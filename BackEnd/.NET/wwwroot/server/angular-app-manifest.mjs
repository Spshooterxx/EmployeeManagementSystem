
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/employees",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/employees"
  },
  {
    "renderMode": 2,
    "route": "/departments"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29066, hash: '262af88dfb5a5f7ca36e010475801463dd0999f422d080bedd0d4c24aa7aaaf4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17118, hash: '9ffad0e866d1e2b57c35dea29d296cbeda5e4d17c177b12769eeb690e87e9f1b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'employees/index.html': {size: 83187, hash: '65810490e2aba11e054bd9acb4f2337f6b59abab25fcaaa6e9035a7bba02f568', text: () => import('./assets-chunks/employees_index_html.mjs').then(m => m.default)},
    'departments/index.html': {size: 81189, hash: '313605a0a970a29d33e1a75fccc3e1958fe88b2c501c6c693706c70baf136c55', text: () => import('./assets-chunks/departments_index_html.mjs').then(m => m.default)},
    'styles-BQS2IIR3.css': {size: 238958, hash: 'q84Ykj5qunc', text: () => import('./assets-chunks/styles-BQS2IIR3_css.mjs').then(m => m.default)}
  },
};
