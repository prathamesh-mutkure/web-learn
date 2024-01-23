chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "get_page_data") {
    var pageData = {
      url: window.location.href,
      content: document.documentElement.outerHTML,
    };
    chrome.runtime.sendMessage({ message: "page_data", data: pageData });
  }
});
