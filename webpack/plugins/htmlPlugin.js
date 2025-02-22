const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Dashboard',
  'blank': 'Blank',
  'buttons': 'Buttons',
  'calendar': 'Calendar',
  'charts': 'Charts',
  'chat': 'Chat',
  'compose': 'Compose',
  'datatable': 'Datatable',
  'email': 'Dashboard',
  'forms': 'Forms',
  'google-maps': 'Google Maps',
  'signin': 'Signin',
  'signup': 'Signup',
  'ui': 'UI',
  'vector-maps': 'Vector Maps',
  '404': '404',
  '500': '500',
  'basic-table': 'Basic Table',
  'test': 'Test',
  'dashboard': 'Dashboard',
  'chatbox': 'Chat',
  'intro': 'Home',
  'details': 'Stock Details',
  'tradebook': 'Trade book',
  'tradeideas': 'Trade Ideas',
  'crypto': 'Cryptocurrency',
  'indices': 'Indices',
  'tradealerts': 'TAlerts',
};

module.exports = Object.keys(titles).map(title => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    filename: `${title}.html`,
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  });
});
