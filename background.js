// chrome.runtime.onInstalled.addListener(function(details){
//     if(details.reason == "install"){
//         chrome.tabs.create({'url': chrome.extension.getURL('app/welcome.html')}, function(tab) {
// 		});
//     }else if(details.reason == "update"){
//         chrome.tabs.create({'url': chrome.extension.getURL('app/welcome.html')}, function(tab) {
// 		});
//     }
// });
chrome.browserAction.onClicked.addListener(function (request) {
})
chrome.extension.onConnect.addListener(function (request) {
});
chrome.runtime.onMessage.addListener(function (request) {
    if (request.msg == "__runSEO") {
        DANGNHO_APP.seo()
    }
    if (request.msg == "__goToaSoan") {
        DANGNHO_APP.toasoan()
    }
    if (request.msg == "__goDangNho") {
        DANGNHO_APP.dangnho()
    }
    if (request.msg == "__goCaFe") {
        DANGNHO_APP.cafe()
    }
    if (request.msg == "__goHelp") {
        DANGNHO_APP.help()
    }
});
