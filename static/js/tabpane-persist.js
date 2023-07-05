// Storage key name also used as a data-* attribute suffix:
const storageKeyName = 'td-tp-persist';

function tdActivateTabsWithKey(key) {
  if (!key) return;
  document
    .querySelectorAll(`[data-${storageKeyName}="${key}"]`)
    .forEach((element) => {
      new bootstrap.Tab(element).show();
    });
}

function tdPersistActiveTab(activeTabKey) {
  if (!tdSupportsLocalStorage()) return;

  try {
    localStorage.setItem(storageKeyName, activeTabKey);
    tdActivateTabsWithKey(activeTabKey);
  } catch (error) {
    console.error(`Unable to save active tab '${activeTabKey}' to localStorage:`, error);
  }
}

const tdSupportsLocalStorage = () => typeof Storage !== 'undefined';

// On page load, activate tabs
if (tdSupportsLocalStorage()) {
  const activeTabKey = localStorage.getItem(storageKeyName);
  tdActivateTabsWithKey(activeTabKey);
}
