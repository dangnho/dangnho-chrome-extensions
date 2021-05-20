$('#runSEO').on('click', function () {
    chrome.runtime.sendMessage({ msg: "__runSEO" });
    window.close();
})
$('#goToaSoan').on('click', function () {
    chrome.runtime.sendMessage({ msg: "__goToaSoan" });
    window.close();
})
$('#goDangNho').on('click', function () {
    chrome.runtime.sendMessage({ msg: "__goDangNho" });
    window.close();
})
$('#goCaFe').on('click', function () {
    chrome.runtime.sendMessage({ msg: "__goCaFe" });
    window.close();
})
$('#goHelp').on('click', function () {
    chrome.runtime.sendMessage({ msg: "__goHelp" });
    window.close();
})
window.addEventListener("contextmenu", function(e) { e.preventDefault(); })
