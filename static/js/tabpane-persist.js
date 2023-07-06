const td_persistStorageKeyName = 'td-tp-persist';
const td_persistDataAttrName = `data-${td_persistStorageKeyName}`;

const tdPersistCssSelector = (attrValue) => attrValue
  ? `[${td_persistDataAttrName}="${attrValue}"]`
  : `[${td_persistDataAttrName}]`;

function tdActivateTabsWithKey(key) {
  if (!key) return;
  document
    .querySelectorAll(tdPersistCssSelector(key))
    .forEach((element) => {
      new bootstrap.Tab(element).show();
    });
}

function tdPersistActiveTab(activeTabKey) {
  if (!tdSupportsLocalStorage()) return;

  try {
    localStorage.setItem(td_persistStorageKeyName, activeTabKey);
    tdActivateTabsWithKey(activeTabKey);
  } catch (error) {
    console.error(`Unable to save active tab '${activeTabKey}' to localStorage:`, error);
  }
}

const tdSupportsLocalStorage = () => typeof Storage !== 'undefined';

// On page load, activate tabs
if (tdSupportsLocalStorage()) {
  const activeTabKey = localStorage.getItem(td_persistStorageKeyName);
  tdActivateTabsWithKey(activeTabKey);
}
