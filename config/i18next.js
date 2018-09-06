// module.exports = {
//     directory: __dirname + '/../locales',
//     saveMissing: false,
// }

import i18next from 'i18next';

i18next.init({
  lang: 'en',
  debug: true,
  resources: __dirname + '/../locales'
});
