function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'Tinh tế tìm kiếm từ khóa "%s"'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  // Suggestion code will end up here.
});

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

function call_tinhte_search(text) {
    var form = document.getElementById("tinhte_search");
    form.childNodes[0].setAttribute("value", text)
    form.submit();
}

chrome.omnibox.onInputEntered.addListener(function(text) {
	chrome.tabs.executeScript(null, {code: 'var tu_khoa = "'+ text +'";'}, function(results){
		chrome.tabs.executeScript(null, {file:"script.js"});
	});
});

