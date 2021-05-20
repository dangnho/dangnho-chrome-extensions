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
window.addEventListener("contextmenu", function(e) { e.preventDefault(); })
