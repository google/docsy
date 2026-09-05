const td_persistStorageKeyNameBase = 'td-tp-persist';
const td_persistCounterStorageKeyName = `${td_persistStorageKeyNameBase}-count`;
const td_persistDataAttrName = `data-${td_persistStorageKeyNameBase}`;

const _tdPersistCssSelector = (attrValue) =>
  attrValue
    ? `[${td_persistDataAttrName}="${attrValue}"]`
    : `[${td_persistDataAttrName}]`;

const _tdStoragePersistKey = (tabKey) =>
  td_persistStorageKeyNameBase + ':' + (tabKey || '');

const _tdSupportsLocalStorage = () => typeof Storage !== 'undefined';

function tdPersistKey(key, value) {
  // @requires: _tdSupportsLocalStorage();

  try {
    if (value) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  } catch (error) {
    const action = value ? 'add' : 'remove';
    console.error(
      `Docsy tabpane: unable to ${action} localStorage key '${key}': `,
      error
    );
  }
}

// Retrieve, increment, and store tab-select event count, then returns it.
function tdGetTabSelectEventCountAndInc() {
  // @requires: _tdSupportsLocalStorage();

  const storedCount = localStorage.getItem(td_persistCounterStorageKeyName);
  let numTabSelectEvents = parseInt(storedCount) || 0;
  numTabSelectEvents++;
  tdPersistKey(td_persistCounterStorageKeyName, numTabSelectEvents.toString());
  return numTabSelectEvents;
}

function tdActivateTabsWithKey(key) {
  if (!key) return;

  document.querySelectorAll(_tdPersistCssSelector(key)).forEach((element) => {
    new bootstrap.Tab(element).show();
  });
}

function tdPersistActiveTab(activeTabKey) {
  if (!_tdSupportsLocalStorage()) return;

  tdPersistKey(
    _tdStoragePersistKey(activeTabKey),
    tdGetTabSelectEventCountAndInc()
  );
  tdActivateTabsWithKey(activeTabKey);
}

function tdGetAndActivatePersistedTabs(tabs) {
  var keyOfTabsInThisPage = [
    ...new Set(
      Array.from(tabs).map((el) => el.getAttribute(td_persistDataAttrName))
    ),
  ];

  // Oldest first, so the latest selection wins where keys share a tabpane.
  let key_ageList = keyOfTabsInThisPage
    .map((k) => [
      k,
      parseInt(localStorage.getItem(_tdStoragePersistKey(k))) || 0,
    ])
    .filter(([k, v]) => v)
    .sort((a, b) => a[1] - b[1]);

  key_ageList.forEach(([key]) => {
    tdActivateTabsWithKey(key);
  });

  return key_ageList;
}

function tdRegisterTabClickHandler(tabs) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const activeTabKey = tab.getAttribute(td_persistDataAttrName);
      tdPersistActiveTab(activeTabKey);
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (!_tdSupportsLocalStorage()) return;

  var allTabsInThisPage = document.querySelectorAll(_tdPersistCssSelector());
  tdRegisterTabClickHandler(allTabsInThisPage);
  tdGetAndActivatePersistedTabs(allTabsInThisPage);
});
