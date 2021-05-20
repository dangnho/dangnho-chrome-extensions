var DANGNHO_APP = {
    seo: function () { 
        chrome.tabs.executeScript(null, {code: `
        
        if(APP_HOST === 'dangnho.com') {
            jQuery('head').append('<style>.seo-menu { padding: 0; margin: 0; list-style: none; } .entry-title{ position: relative; } .seo-menu > li > .subseo-menu{ padding: 0; margin: 0; list-style: none; display:none; position: absolute; top: 100%; left: 0; width: 100%;height: 100%; z-index:9999 } .seo-menu > li > .subseo-menu li, .seo-menu > li > .subseo-menu a{ display: inline-block; } .seo-menu > li:hover > .subseo-menu{ display: none;  background: #b7b7b7;  padding: 5px;}</style>');
                                
            jQuery('.entry-title').each(function(){
                var m = jQuery(this).find('a').attr('href');
                var meuo = '<ul class="seo-menu" style="display: inline-block;"><li class="menu-item"><a class="bsufff" href="javascript:void(0);" style="background: rebeccapurple; color: #fff; display: inline-block; padding: 1px 6px; font-size: 10px; margin-left: 3px;border-radius:3px" aria-haspopup="true">SEO</a></li> </ul>';
            
                jQuery(this).append(meuo)
                var mmmm = jQuery(this).find('.bsufff').offset()
                jQuery(this).find('.subseo-menu').css({
                    'top': '0px',
                    'left':'0px'
                })                            
                jQuery(this).find('.bsufff').on('click', function() {
                    openWin(m)
                })                            
            })
        }
        if(APP_HOST === 'dangnho.com' || APP_HOST === 'ca-dao.com' || APP_HOST === 'congdongviet.net' || APP_HOST === 'toilarac.com' || APP_HOST === 'viensoi.com') {
            var sitegem = window.location.href;
            var meuogem = '<ul class="seo-menu" style="position: fixed; z-index: 999999; top: 4px; right: 4px; margin: 0; padding: 0; list-style: none; display: inline-block;" id="seositedangnho" ><li class="menu-item"><a class="bsufff" href="javascript:void(0);" style="background: #f70000; color: #fff; display: inline-block; padding: 3px 12px; font-size: 15px;border-radius:3px" aria-haspopup="true">SEO THIS URL</a></li> </ul>';
            jQuery('body').append(meuogem)
            jQuery('body').find('#seositedangnho .bsufff').on('click', function() {
                openWin(sitegem)
            })    
        
        }        
        if(APP_HOST === 'gtmetrix.com' || APP_HOST === 'www.gtmetrix.com') {
            if(tech && tech.length > 0) {
                $('input[name="url"]').val(tech);
                setTimeout(function(){ 
                    $('.analyze-form-button button').trigger('click')
                }, 1000);
            }
           // setTimeout(function(){ window.top.close(); }, 60000);
        }
        if(APP_HOST === 'dotcom-tools.com' || APP_HOST === 'www.dotcom-tools.com') {
            if(tech && tech.length > 0) {
                $('input[name="url"]').val(tech);
                setTimeout(function(){ 
                    $('.dm-tools__button.btn-start-test').trigger('click')
                }, 1000);
            }
            // setTimeout(function(){ window.top.close(); }, 60000);
        }
        if((APP_HOST === 'google.com' || APP_HOST === 'www.google.com') && APP_PATH === '/ping') {
            // setTimeout(function(){ window.top.close(); }, 10000);
        }
        if((APP_HOST === 'bing.com' || APP_HOST === 'www.bing.com') && APP_PATH === '/ping') {
            // setTimeout(function(){ window.top.close(); }, 10000);
        }
        if(APP_HOST === 'validator.ampproject.org' || APP_HOST === 'www.validator.ampproject.org') {
            // setTimeout(function(){ window.top.close(); }, 10000);
        }
        if((APP_HOST === 'web.archive.org' || APP_HOST === 'www.web.archive.org') && APP_PATH === '/save') {
            if(tech && tech.length > 0) {
                $('input[name="url"]').val(tech);
                setTimeout(function(){ 
                    $('#web-save-form').submit();
                }, 1000);
            }
            // setTimeout(function(){ window.top.close(); }, 10000);
        }
        if(APP_HOST === 'webpagetest.org' || APP_HOST === 'www.webpagetest.org') {
            if(tech && tech.length > 0) {
                $('input[name="url"]').val(tech);
                setTimeout(function(){ 
                    $('#start_test-container button').trigger('click')
                }, 1000);
            }
            // setTimeout(function(){ window.top.close(); }, 60000);
        }
        if((APP_HOST === 'seobility.net' || APP_HOST === 'www.seobility.net') && APP_PATH === '/en/seocheck/') {
            if(tech && tech.length > 0) {
                $('input[name="url"]').val(tech);
                setTimeout(function(){ 
                    $('.featuresubmitbtn').trigger('click')
                }, 1000);
            }
        }
        if((APP_HOST === 'www.freetools.seobility.net' || APP_HOST === 'freetools.seobility.net') && APP_PATH === '/en/seocheck/check') {
            // setTimeout(function(){ window.top.close(); }, 30000);
        }


        `});
    },
    toasoan: function () { 
        chrome.tabs.executeScript(null, {code: `
        window.open('https://tapchidangnho.com', '_blank');
        `});
    },
    dangnho: function () { 
        chrome.tabs.executeScript(null, {code: `
        window.open('https://dangnho.com', '_blank');
        `});
    },
    help: function () { 
        chrome.tabs.executeScript(null, {code: `
        window.open('https://toasoandangnho.wordpress.com', '_blank');
        `});
    },
    cafe: function () { 
        chrome.tabs.executeScript(null, {code: `
        window.open('https://caphethubay.net', '_blank');
        `});
    }
}
