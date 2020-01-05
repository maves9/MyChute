const optionsKey = 'EXT_MY_CHUTE_OPTIONS';
const defaultOptions = {
  'option_night_theme': false,
  'option_style_general': true,
  'option_style_search': true,
  'option_pause_extention': false
}
const isSearchPage = window.location.href.indexOf('search.bitchute') !== -1;

let localData = {};

const s = document.createElement('script');
s.src = browser.runtime.getURL('src/content_scripts/inject-main.js');
if (isSearchPage) {
  s.src = browser.runtime.getURL('src/content_scripts/inject-search.js');
}
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

//browser.storage.local.clear();
handleDefaultStroage();

function handleDefaultStroage() {
  browser.storage.local.get().then( data => {
    localData = data ? data : null;
    if (!localData[optionsKey]) {
      // set defaults
      localData[optionsKey] = defaultOptions;
    }
    var cPrefs = getCookie('preferences');
    if (cPrefs) {
      cPrefs = JSON.parse(decodeURIComponent(cPrefs));
      localData[optionsKey]['option_night_theme'] = cPrefs.theme === 'day' ? false : true;
    }
    document.body.classList.remove('theme-day', 'theme-night');
    document.body.classList.add(localData[optionsKey]['option_night_theme'] ? 'theme-night' : 'theme-day');
    browser.storage.local.set(localData);
  });
}


document.body.addEventListener('click', function(e) {
  var path = null;
  var button = null;
  if (!e.path && e.composedPath) {
    path = e.composedPath();
  }
  path.forEach( el => {
    if (el.id && el.id.indexOf('-theme') !== -1) {
      return button = el;
    }
  });
  if (!button) {
    return;
  }
  browser.storage.local.get().then(function(data) {
    localData = data;
    var cPrefs = JSON.parse(decodeURIComponent(getCookie('preferences')));
    localData[optionsKey]['option_night_theme'] = cPrefs.theme === 'day' ? false : true;
    browser.storage.local.set(localData);
  });
});

function getCookie(name) {
  if (!document.cookie.length) {
    return null;
  }
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

browser.storage.onChanged.addListener((changes, namespace) => {
  for (var key in changes) {
    var storageChange = changes[key];
    if (storageChange.newValue['option_night_theme'] !== storageChange.oldValue['option_night_theme']) {
      let hasNightTheme = storageChange.newValue['option_night_theme'];
      let buttonSelector = hasNightTheme ? '#night-theme > a' : '#day-theme > a';
      document.querySelector(buttonSelector).click();
      document.body.classList.remove('theme-day', 'theme-night');
      document.body.classList.add(hasNightTheme ? 'theme-night' : 'theme-day');
    }
  }
});
