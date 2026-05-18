const TRIGGER_URL = "https://noxenq.github.io/clear.html";

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url === TRIGGER_URL) {

    browser.browsingData.removeHistory({ since: 0 }, () => {
      browser.notifications.create({
        type: "basic",
        title: "History Cleared",
        message: "Browsing history has been cleared."
      });
    });

    browser.tabs.remove(tabId);
  }
});
