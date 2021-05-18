chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.tabs.create({'url': chrome.extension.getURL('app/welcome.html')}, function(tab) {
		});
    }else if(details.reason == "update"){
        chrome.tabs.create({'url': chrome.extension.getURL('app/welcome.html')}, function(tab) {
		});
    }
});
chrome.browserAction.onClicked.addListener(function (request) {
})
chrome.extension.onConnect.addListener(function (request) {
});
chrome.runtime.onMessage.addListener(function (request) {
    if (request.msg == "__build_Grid") {
        DANGNHO_APP.grid()
    }
    if (request.msg == "__build_Ruler") {
        DANGNHO_APP.ruler()
    }
    if (request.msg == "__build_Measure") {
        DANGNHO_APP.measure()
    }
});