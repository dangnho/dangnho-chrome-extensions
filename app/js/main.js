$('#createGrid').on('click', function () {
    chrome.runtime.sendMessage({ msg: "__build_Grid" });
    window.close();
})
$('#createRuler').on('click', function () {
    chrome.runtime.sendMessage({ msg: "__build_Ruler" });
    window.close();
})
$('#createMeasure').on('click', function () {
    chrome.runtime.sendMessage({ msg: "__build_Measure" });
    window.close();
})
window.addEventListener("contextmenu", function(e) { e.preventDefault(); })
