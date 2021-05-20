var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
function domain_from_url(url) {
    var result
    var match
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
        result = match[1]
        if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
            result = match[1]
        }
    }
    return result
}
var APP_HOST = window.location.host;
var APP_PATH = window.location.pathname;
var myWin1 = null;
var myWin2 = null;
var myWin3 = null;
var myWin4 = null;
var myWin5 = null;
var myWin6 = null;
var myWin7 = null;
var myWin8 = null;
var tech = getUrlParameter('seturl');
function openWin(e) {
    myWin1 = window.open("https://gtmetrix.com?seturl=" + e + "", "_blank");
    myWin2 = window.open("https://www.dotcom-tools.com/website-speed-test.aspx?seturl=" + e + "", "_blank");
    myWin3 = window.open("https://www.google.com/ping?sitemap=" + e + "", "_blank");
    myWin4 = window.open("https://www.webpagetest.org?seturl=" + e + "", "_blank");
    myWin5 = window.open("https://validator.ampproject.org/#url=" + e + "/amp", "_blank");
    myWin6 = window.open("https://web.archive.org/save?seturl=" + e + "", "_blank");
    myWin7 = window.open("http://www.bing.com/ping?sitemap=" + e + "", "_blank");
    myWin8 = window.open("https://www.seobility.net/en/seocheck/?seturl=" + e + "", "_blank");
}
function fetchDangNho(url, title) {
    var dangnho_btn = '<a class="fetchpost" href="https://tapchidangnho.com/?key=' + url + '&t=' + title + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; position: fixed; top: 15px; right: 15px; z-index: 10000; border-radius: 3px; font-weight: bold;">Fetch bài này</a>';
    jQuery('body').append(dangnho_btn)
}
function fetchDangNhoBook(url, title) {
    var dangnho_btn = '<a class="fetchpost" href="https://tapchidangnho.com/?key=' + url + '&t=' + title + '&book=true" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; position: fixed; top: 15px; right: 15px; z-index: 10000; border-radius: 3px; font-weight: bold;">Fetch bài này</a>';
    jQuery('body').append(dangnho_btn)
}
if (APP_HOST === 'check.com' || APP_HOST === 'tapchidangnho.com' || (APP_HOST === 'help.dangnho.com' && APP_PATH === '/fetch/')) {
    (function () {
        var helperFrame = document.createElement('iframe');
        helperFrame.src = 'https://tapchidangnho.com/helper.html';
        helperFrame.id = 'helperFrame';
        helperFrame.style = 'display:none;';
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(helperFrame);
    })();
    if (jQuery('#copyall') && jQuery('#copyall').length > 0) {
        var fromURL = domain_from_url(getUrlParameter('key')).split(".")[0];
        var titleDN = jQuery('h1').text().trim()
        var contentDN = jQuery('#copyall').html()
        var dangnho_btn_sync = '<div style="position: fixed; top: 0; right: 0; z-index: 500; background: #002b1a; width: 100%; padding: 10px 40px 10px 15px; text-align: right; text-decoration: none;"><a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=avada_faq&t=' + encodeURIComponent(titleDN) + '&fromsiteURL=' + fromURL + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Inforgaphic</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=avada_viral&t=' + encodeURIComponent(titleDN) + '&fromsiteURL=' + fromURL + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Video</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=knowledgebase&t=' + encodeURIComponent(titleDN) + '&fromsiteURL=' + fromURL + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Kiến thức</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?t=' + encodeURIComponent(titleDN) + '&fromsiteURL=' + fromURL + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Đăng bài</a></div>';
        if (getUrlParameter('book') && getUrlParameter('book') === 'true') {
            dangnho_btn_sync = '<a class="fetchpost" href="https://lib.dangnho.com/wp-admin/post-new.php?post_type=sfwd-lessons&t=' + encodeURIComponent(titleDN) + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; position: fixed; top: 15px; right: 15px; z-index: 10000; border-radius: 3px; font-weight: bold;text-decoration: none;">Đăng qua thư viện</a>';
        }
        jQuery('body').css({ 'margin-top': '55px' }).append(dangnho_btn_sync).on('click', function () {
            localStorage.setItem('__dangnho_title', contentDN)
        })
    }
    window.onload = () => {

        localStorage.setItem('__dangnho_title', contentDN)

    }
}
if ((APP_HOST === 'dangnho.com' && APP_PATH === '/admin/post-new.php') || APP_HOST === 'lib.dangnho.com') {
    jQuery('#seositedangnho').remove();
    (function () {
        var helperFrame = document.createElement('iframe');
        helperFrame.src = 'https://tapchidangnho.com/helper.html';
        helperFrame.id = 'helperFrame';
        helperFrame.style = 'display:none;';
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(helperFrame);
    })();
    window.onload = () => {

        let helperFrameWindow = document.getElementById('helperFrame').contentWindow;
        let __dangnho_title = () => {
            helperFrameWindow.postMessage('__dangnho_title', '*');
        }
        window.addEventListener('message', (event) => {
            var tt = decodeURIComponent(getUrlParameter('t')).replace(/\+/g, ' ').replace(/\'\"/g, '"');
            var mm = getUrlParameter('fromsiteURL')
            if (getUrlParameter('t') && getUrlParameter('t').length > 0) {
                jQuery('#title').val(tt).trigger('click').blur()
                jQuery('[data-name="nguon_bai_viet"] input').val(mm)
                jQuery('#title-prompt-text').remove()
                jQuery('body').append('<textarea id="clone" style="display:none">' + event.data + '</textarea>')
                var nnnnb = '<a class="fetchpost" href="javascript:void(0);" onclick="tinyMCE.get(\'content\').setContent(jQuery(\'#clone\').val());jQuery(this).hide()" style="background: #ff0; color: #000; display: inline-block; padding: 5px 15px; font-size: 20px; position: fixed; top: 15px; right: 15px; z-index: 99999999; border-radius: 3px; font-weight: bold;" >Gán Content</a>'
                jQuery('body').append(nnnnb)
            }
        });

        __dangnho_title();
    }
}