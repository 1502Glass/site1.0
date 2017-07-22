/*globals browser, console */
/*jslint plusplus: true */

function loginPaddingAdjust() {
    'use strict';
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    if (w <= 435) {
        document.getElementById('loginDiv').classList.remove('topBannerPad');
    } else {
        document.getElementById('loginDiv').classList.add('topBannerPad');
    }
}

(function () {
    'use strict';
    loginPaddingAdjust();
}());

window.onresize = loginPaddingAdjust;