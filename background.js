const TRIGGER_URL = "https://noxenq.github.io/clear.html";

browser.webNavigation.onCompleted.addListener((details) => {
  if (details.url === TRIGGER_URL) {

    browser.tabs.remove(details.tabId);

    browser.browsingData.removeHistory({ since: 0 }, () => {
      browser.notifications.create({
        type: "basic",
        title: "History Cleared",
        message: "Browsing history has been cleared."
      });
    });
  }
}, { url: [{ urlContains: "noxenq.github.io/clear" }] });
