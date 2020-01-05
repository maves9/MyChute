//
// Options
//
const optionsKey = 'EXT_MY_CHUTE_OPTIONS';
let localData = {};

browser.storage.local.get().then(data => {
  localData = data;
  const inputs = document.querySelectorAll('.switch > input');
  if (!inputs.length) {
    return;
  }
  inputs.forEach(input => {
    input.checked = localData[optionsKey][input.name];
    input.addEventListener('change', e => {
      browser.storage.local.get().then(data => {
        localData = data;
        localData[optionsKey][input.name] = input.checked;
        browser.storage.local.set(localData);
      });
    });
  });
});
