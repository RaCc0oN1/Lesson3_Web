var sites = [
    '../films/joker.html',
    '../films/parker.html',
    '../films/titanic.html',
    '../films/aquaman.html'
];

function rndSite() {
    'use strict';
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}
