"use strict";

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

function extractHostname(url) {
  var hostname;

  if (url.indexOf("//") > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }

  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];
  return hostname;
}

function domain_from_url(url) {
  var result;
  var match;

  if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
    result = match[1];

    if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
      result = match[1];
    }
  }

  return result;
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
  jQuery('body').append(dangnho_btn);
}

function fetchDangNhoBook(url, title) {
  var dangnho_btn = '<a class="fetchpost" href="https://tapchidangnho.com/?key=' + url + '&t=' + title + '&book=true" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; position: fixed; top: 15px; right: 15px; z-index: 10000; border-radius: 3px; font-weight: bold;">Fetch bài này</a>';
  jQuery('body').append(dangnho_btn);
}

function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  document.body.removeChild(textArea);
}

if (APP_HOST === 'check.com' || APP_HOST === 'tapchidangnho.com' || APP_HOST === 'help.dangnho.com' && APP_PATH === '/fetch/') {
  if (document.body.contains(document.getElementById('copyall'))) {
    var copyall = jQuery('#copyall').html();
    copyToClipboard(copyall);
  }

  if (jQuery('#copyall') && jQuery('#copyall').length > 0) {
    var fromURL = extractHostname(getUrlParameter('key'));
    var fromURLSource = encodeURIComponent(getUrlParameter('key'));
    var titleDN = jQuery('h1').text().trim();
    var contentDN = jQuery('#copyall').html();
    var dangnho_btn_sync = '<div style="position: fixed; top: 0; right: 0; z-index: 500; background: #002b1a; width: 100%; padding: 10px 40px 10px 15px; text-align: right; text-decoration: none;"><a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=avada_faq&t=' + encodeURIComponent(titleDN) + '&fromsiteURL=' + fromURL + '&fromURL=' + fromURLSource + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Inforgaphic</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=avada_viral&t=' + encodeURIComponent(titleDN) + '&fromsiteURL=' + fromURL + '&fromURL=' + fromURLSource + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Video</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=knowledgebase&t=' + encodeURIComponent(titleDN) + '&fromsiteURL=' + fromURL + '&fromURL=' + fromURLSource + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Kiến thức</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?t=' + encodeURIComponent(titleDN) + '&fromsiteURL=' + fromURL + '&fromURL=' + fromURLSource + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Đăng bài</a></div>';

    if (getUrlParameter('book') && getUrlParameter('book') === 'true') {
      dangnho_btn_sync = '<a class="fetchpost" href="https://lib.dangnho.com/wp-admin/post-new.php?post_type=sfwd-lessons&t=' + encodeURIComponent(titleDN) + '" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; position: fixed; top: 15px; right: 15px; z-index: 10000; border-radius: 3px; font-weight: bold;text-decoration: none;">Đăng qua thư viện</a>';
    }

    jQuery('body').css({
      'margin-top': '55px'
    }).append(dangnho_btn_sync).on('click', function () {});
  }

  window.onload = function () {};
}

function pasteDangNho() {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  document.execCommand("paste");
  jQuery('#dangnhoclone').val($(textArea).val());
  document.body.removeChild(textArea);
}

if (APP_HOST === 'dangnho.com' && APP_PATH === '/admin/post-new.php' || APP_HOST === 'lib.dangnho.com' || APP_HOST === 'check.com' || APP_HOST === 'tapchidangnho.com') {
  jQuery(document).ready(function () {
    var tt = decodeURIComponent(getUrlParameter('t')).replace(/\+/g, ' ').replace(/\'\"/g, '"');
    var mm = getUrlParameter('fromsiteURL');
    var oo = getUrlParameter('fromURL');
    var nnnnb = '<a class="fetchpost button button-primary button-large" href="javascript:void(0);" onclick="tinyMCE.get(\'content\').setContent(jQuery(\'#dangnhoclone\').val());" style="width: 100%;text-align: center;display: block;margin-bottom: 1rem;text-transform: uppercase;">Gán nội dung</a>';
    jQuery('body').append('<textarea id="dangnhoclone" rows="10" class="form-control" style="display:none"></textarea>');
    jQuery('#seositedangnho').remove();

    if (getUrlParameter('t') && getUrlParameter('t').length > 0) {
      jQuery('#title').val(tt).trigger('click').blur();
      jQuery('[data-name="nguon_bai_viet"] input').val(mm);
      jQuery('[data-name="url_cua_bai_viet"] input').val(oo);
      jQuery('#title-prompt-text').remove();
      pasteDangNho();
      jQuery('#minor-publishing-actions').prepend(nnnnb);
    }
  });
}

if (APP_HOST === 'dangnho.com' && (APP_PATH === '/admin/post-new.php' || APP_PATH === '/admin/post.php')) {
  jQuery(document).ready(function () {
    if (!jQuery('body').hasClass('folded')) {
      jQuery('#collapse-button').trigger('click');
    }

    var revertbtn = '<a class="button button-primary button-large" href="javascript:void(0);" onclick="jQuery(\'#dangnhostyles\').remove();jQuery(this).remove();" style="width: 100%;text-align: center;display: block;margin-top: 1rem;text-transform: uppercase;">REVERT</a>';
    var addstyle = '<style id="dangnhostyles">#seriesdiv .inside #serieschecklist { display: flex; flex-wrap: wrap; } #seriesdiv .inside #serieschecklist li { display: inline-flex; flex: 0 0 12.5%; max-width: 12.5%; white-space: nowrap; }#post_tagchecklist{ display: flex; flex-wrap: wrap; }#post_tagchecklist li{ flex: 0 0 50%; max-width: 50%; white-space: nowrap;}#misc-publishing-actions {display:none}#minor-publishing-actions {padding-bottom: 10px;}#poststuff #post-body.columns-2 { margin-right: 600px; } #post-body.columns-2 #postbox-container-1 { margin-right: -600px; width: 580px !important; }#major-publishing-actions { display: flex; justify-content: space-between; }#poststuff #postbox-container-1 #side-sortables { width: 580px !important; display: flex; flex-wrap: wrap; } #poststuff #postbox-container-1 #side-sortables .postbox { flex: 0 0 calc(50% - 10px); max-width: calc(50% - 10px);box-sizing: border-box; } #poststuff #postbox-container-1 #side-sortables .postbox:nth-child(even) { margin-left: 20px; }#publishing-action {margin-left: auto;}</style>';
    jQuery('#minor-publishing-actions').append(revertbtn);
    jQuery('head').append(addstyle);
  });
}