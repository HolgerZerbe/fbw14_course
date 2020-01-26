console.log(`19_IFFES_Wiederholung`);

// IFFE
// Immediately Invoked Functions Expressions

(function () {
    console.log(`mein tolles plugin - google analytics`);
})();

(function () { // Anfang meines Plugins
    console.log(`mein anderes tolles plugin - amazon aiffiliate`);
})(); // Ende meines Plugins



// google analytics -> plugin
// (function (i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r;
//     i[r] = i[r] || function () {
//         (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date();
//     a = s.createElement(o),
//         m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a, m)
// })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');



var text = `außerhalb`;

(function () {
    console.log(text);
    //var text = `innerhalb`;
    console.log('Hallo von ' + text);
}());


console.log(`Hallöle von ` + text);