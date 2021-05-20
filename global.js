var DANGNHO_APP = {
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
    cafe: function () { 
        chrome.tabs.executeScript(null, {code: `
        window.open('https://caphethubay.net', '_blank');
        `});
    }
}
