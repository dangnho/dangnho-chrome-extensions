///////////////////////////////////////////////////
// CÁC SITE
///////////////////////////////////////////////////
if(APP_HOST === 'lostbird.vn') {
    if(jQuery('.article-body').length > 0) {
        var title = jQuery('h1.title-page').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'www.bachhoaxanh.com') {
    if(jQuery('.leftcate').length > 0) {
        var title = jQuery('h1.titlearticle').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'khoahoc.tv') {
    if(jQuery('.content.post-detail').length > 0) {
        var title = jQuery('h1').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'quantrimang.com') {
    if(jQuery('.content.post-detail').length > 0) {
        var title = jQuery('h1').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'nhacxua.vn') {
    if(jQuery('.jeg_content.jeg_singlepage').length > 0) {
        var title = jQuery('h1.jeg_post_title').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'tinhhoa.net' || APP_HOST === 'www.dkn.tv') {
    if(jQuery('#the-post').length > 0) {
        var title = jQuery('h1.post-title').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'bestie.vn') {
    if(jQuery('.main-left').length > 0) {
        var title = jQuery('h1.f-main-title').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'www.yan.vn') {
    if(jQuery('.content-details').length > 0) {
        var title = jQuery('h1.detail-title').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === '2sao.vn') {
    if(jQuery('#detail-content-inner').length > 0) {
        var title = jQuery('#detail-content-inner h1').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'choiphongthuy.com') {
    if(jQuery('.titleNewsDetail').length > 0) {
        var title = jQuery('.titleNewsDetail').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'www.24h.com.vn') {
    if(jQuery('#article_title').length > 0) {
        var title = jQuery('#article_title').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'vnexpress.net') {
    if(jQuery('.title-detail').length > 0) {
        var title = jQuery('.title-detail').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'kenh14.vn') {
    if(jQuery('.kbwc-title').length > 0) {
        var title = jQuery('.kbwc-title').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'vandieuhay.net') {
    if(jQuery('h1.entry-title').length > 0) {
        var title = jQuery('h1.entry-title').text()
        fetchDangNho(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'sachvui.com') {
    if(jQuery('.chapter-c').length > 0 || jQuery('.noi_dung_online').length > 0) {
        var title = jQuery('.link-tap').text()
        fetchDangNhoBook(window.location.href, encodeURIComponent(title))
    }
}
if(APP_HOST === 'ocuaso.com') {
    if(jQuery('#genesis-content').length > 0) {
        var title = jQuery('.entry-title').text()
        fetchDangNhoBook(window.location.href, encodeURIComponent(title))
    }
}

