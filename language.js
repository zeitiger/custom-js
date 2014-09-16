jQuery(function () {
  'use strict';
  var language = navigator.userLanguage || navigator.language,
    allLanguages = ['de', 'en'], style = '';
  language = language.substring(0, 2).toLowerCase();
  if (allLanguages.indexOf(language) === -1) {
    language = 'en';
  }
  allLanguages.forEach(function (lang) {
    if (language !== lang) {
      style += '.tx-lang:lang(' + lang + ') { display:none; }';
    }
  });
  $('<style/>').text(style).appendTo('head');
});