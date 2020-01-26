const stars = require('./stars.js');
const sort = require('./sort.js');
const evenodd = require('./evenodd');
const printingT = require('./printingT');
const astro = require('./astro');
const threenum = require('./3num');
const formatting = require('./formatting');
const countLetters =  require('./countLetters');  


const args = process.argv.slice(2);

// stars(args[0], args[1]);
// sort(args[0]);
// evenodd(args[0], args[1]);
astro(args[0], args[1]);
// threenum (args);
// formatting(args);
// countLetters(args);