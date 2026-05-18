const TRIGGER_URL = "https://noxenq.github.io/clear.html";

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url === TRIGGER_URL) {

    chrome.tabs.remove(details.tabId);

    chrome.browsingData.removeHistory({ since: 0 }, () => {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "History Cleared",
        message: "Browsing history has been cleared."
      });
    });
  }
}, { url: [{ urlContains: "noxenq.github.io/clear.html" }] });
