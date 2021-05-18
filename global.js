var DANGNHO_APP = {
    measure: function () { 
        chrome.tabs.executeScript(null, {code: `
        if($('#lift_canvas').length>0) {
            $('#lift_canvas').remove()
        } else {
            $('body').append('<div id="lift_canvas"></div>');
            initDraw(document.getElementById('lift_canvas'));
        }
        `});
    },
    ruler: function () { 
        chrome.tabs.executeScript(null, {code: `
        if($('#lift_ruler').length>0) {
            $('body').removeClass('lift_ruler_enable')
            $('#lift_ruler').remove()
        } else {
            $('body').append('<div id="lift_ruler"></div>');$("#lift_ruler").ruler()
        }
        `});
    },
    grid: function () { 
        chrome.tabs.executeScript(null, {code: `
        if($('#lift_grid').length>0) {
            $('#lift_grid').remove()
        } else {
            $('body').append('<div id="lift_grid"><div class="row"><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div><div class="col"></div></div></div>')
        }
        `});
    }
}
