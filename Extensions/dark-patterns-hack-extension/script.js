document.getElementById("getDataButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);

    var activeTab = tabs[0];
    var activeUrl = activeTab.url;

    var resultElement = $("#result");
    resultElement.text("Loading...");

    setTimeout(function () {
      // TODO: Call API here
      var result = "Test -> " + activeUrl;
      resultElement.text(result);
    }, 2000);
  });
});
