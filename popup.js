document.getElementById('summarize').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getTerms" }, (response) => {
      const terms = response.terms;

      chrome.runtime.sendMessage({ action: "summarize", text: terms }, (response) => {
        document.getElementById('summary').innerText = response.summary;
      });
    });
  });
});
