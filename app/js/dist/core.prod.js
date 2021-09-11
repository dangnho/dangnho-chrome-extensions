"use strict";var getUrlParameter=function(t){for(var e,o=window.location.search.substring(1).split("&"),n=0;n<o.length;n++)if((e=o[n].split("="))[0]===t)return void 0===e[1]||decodeURIComponent(e[1])};function extractHostname(t){var e=-1<t.indexOf("//")?t.split("/")[2]:t.split("/")[0];return e=(e=e.split(":")[0]).split("?")[0]}function domain_from_url(t){var e,o;return(o=t.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im))&&(o=(e=o[1]).match(/^[^\.]+\.(.+\..+)$/))&&(e=o[1]),e}var copyall,fromURL,fromURLSource,titleDN,contentDN,dangnho_btn_sync,APP_HOST=window.location.host,APP_PATH=window.location.pathname,myWin1=null,myWin2=null,myWin3=null,myWin4=null,myWin5=null,myWin6=null,myWin7=null,myWin8=null,tech=getUrlParameter("seturl");function openWin(t){myWin1=window.open("https://gtmetrix.com?seturl="+t,"_blank"),myWin2=window.open("https://www.dotcom-tools.com/website-speed-test.aspx?seturl="+t,"_blank"),myWin3=window.open("https://www.google.com/ping?sitemap="+t,"_blank"),myWin4=window.open("https://www.webpagetest.org?seturl="+t,"_blank"),myWin5=window.open("https://validator.ampproject.org/#url="+t+"/amp","_blank"),myWin6=window.open("https://web.archive.org/save?seturl="+t,"_blank"),myWin7=window.open("http://www.bing.com/ping?sitemap="+t,"_blank"),myWin8=window.open("https://www.seobility.net/en/seocheck/?seturl="+t,"_blank")}function fetchDangNho(t,e){var o='<a class="fetchpost" href="https://tapchidangnho.com/?key='+t+"&t="+e+'" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; position: fixed; top: 15px; right: 15px; z-index: 10000; border-radius: 3px; font-weight: bold;">Fetch bài này</a>';jQuery("body").append(o)}function fetchDangNhoBook(t,e){var o='<a class="fetchpost" href="https://tapchidangnho.com/?key='+t+"&t="+e+'&book=true" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; position: fixed; top: 15px; right: 15px; z-index: 10000; border-radius: 3px; font-weight: bold;">Fetch bài này</a>';jQuery("body").append(o)}function copyToClipboard(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),document.body.removeChild(e)}function pasteDangNho(){var t=document.createElement("textarea");t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.focus(),document.execCommand("paste"),jQuery("#dangnhoclone").val($(t).val()),document.body.removeChild(t)}("check.com"===APP_HOST||"tapchidangnho.com"===APP_HOST||"help.dangnho.com"===APP_HOST&&"/fetch/"===APP_PATH)&&(document.body.contains(document.getElementById("copyall"))&&copyToClipboard(copyall=jQuery("#copyall").html()),jQuery("#copyall")&&0<jQuery("#copyall").length&&(fromURL=extractHostname(getUrlParameter("key")),fromURLSource=encodeURIComponent(getUrlParameter("key")),titleDN=jQuery("h1").text().trim(),contentDN=jQuery("#copyall").html(),dangnho_btn_sync='<div style="position: fixed; top: 0; right: 0; z-index: 500; background: #002b1a; width: 100%; padding: 10px 40px 10px 15px; text-align: right; text-decoration: none;"><a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=avada_faq&t='+encodeURIComponent(titleDN)+"&fromsiteURL="+fromURL+"&fromURL="+fromURLSource+'" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Inforgaphic</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=avada_viral&t='+encodeURIComponent(titleDN)+"&fromsiteURL="+fromURL+"&fromURL="+fromURLSource+'" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Video</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?post_type=knowledgebase&t='+encodeURIComponent(titleDN)+"&fromsiteURL="+fromURL+"&fromURL="+fromURLSource+'" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Kiến thức</a> - <a class="fetchpost" href="https://dangnho.com/admin/post-new.php?t='+encodeURIComponent(titleDN)+"&fromsiteURL="+fromURL+"&fromURL="+fromURLSource+'" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; border-radius: 3px; font-weight: bold;text-decoration: none;">Đăng bài</a></div>',getUrlParameter("book")&&"true"===getUrlParameter("book")&&(dangnho_btn_sync='<a class="fetchpost" href="https://lib.dangnho.com/wp-admin/post-new.php?post_type=sfwd-lessons&t='+encodeURIComponent(titleDN)+'" style="background: #ff0; color: #000; display: inline-block; padding: 3px 12px; font-size: 15px; position: fixed; top: 15px; right: 15px; z-index: 10000; border-radius: 3px; font-weight: bold;text-decoration: none;">Đăng qua thư viện</a>'),jQuery("body").css({"margin-top":"55px"}).append(dangnho_btn_sync).on("click",function(){})),window.onload=function(){}),("dangnho.com"===APP_HOST&&"/admin/post-new.php"===APP_PATH||"lib.dangnho.com"===APP_HOST||"check.com"===APP_HOST||"tapchidangnho.com"===APP_HOST)&&jQuery(document).ready(function(){var t=decodeURIComponent(getUrlParameter("t")).replace(/\+/g," ").replace(/\'\"/g,'"'),e=getUrlParameter("fromsiteURL"),o=getUrlParameter("fromURL");jQuery("body").append('<textarea id="dangnhoclone" rows="10" class="form-control" style="display:none"></textarea>'),jQuery("#seositedangnho").remove(),getUrlParameter("t")&&0<getUrlParameter("t").length&&(jQuery("#title").val(t).trigger("click").blur(),jQuery('[data-name="nguon_bai_viet"] input').val(e),jQuery('[data-name="url_cua_bai_viet"] input').val(o),jQuery("#title-prompt-text").remove(),pasteDangNho(),jQuery("#minor-publishing-actions").prepend('<a class="fetchpost button button-primary button-large" href="javascript:void(0);" onclick="tinyMCE.get(\'content\').setContent(jQuery(\'#dangnhoclone\').val());" style="width: 100%;text-align: center;display: block;margin-bottom: 1rem;text-transform: uppercase;">Gán nội dung</a>'))}),"dangnho.com"!==APP_HOST||"/admin/post-new.php"!==APP_PATH&&"/admin/post.php"!==APP_PATH||jQuery(document).ready(function(){jQuery("body").hasClass("folded")||jQuery("#collapse-button").trigger("click");jQuery("#minor-publishing-actions").append('<a class="button button-primary button-large" href="javascript:void(0);" onclick="jQuery(\'#dangnhostyles\').remove();jQuery(this).remove();" style="width: 100%;text-align: center;display: block;margin-top: 1rem;text-transform: uppercase;">REVERT</a>'),jQuery("head").append('<style id="dangnhostyles">#seriesdiv .inside #serieschecklist { display: flex; flex-wrap: wrap; } #seriesdiv .inside #serieschecklist li { display: inline-flex; flex: 0 0 12.5%; max-width: 12.5%; white-space: nowrap; }#post_tagchecklist{ display: flex; flex-wrap: wrap; }#post_tagchecklist li{ flex: 0 0 50%; max-width: 50%; white-space: nowrap;}#misc-publishing-actions {display:none}#minor-publishing-actions {padding-bottom: 10px;}#poststuff #post-body.columns-2 { margin-right: 600px; } #post-body.columns-2 #postbox-container-1 { margin-right: -600px; width: 580px !important; }#major-publishing-actions { display: flex; justify-content: space-between; }#poststuff #postbox-container-1 #side-sortables { width: 580px !important; display: flex; flex-wrap: wrap; } #poststuff #postbox-container-1 #side-sortables .postbox { flex: 0 0 calc(50% - 10px); max-width: calc(50% - 10px);box-sizing: border-box; } #poststuff #postbox-container-1 #side-sortables .postbox:nth-child(even) { margin-left: 20px; }#publishing-action {margin-left: auto;}</style>')});