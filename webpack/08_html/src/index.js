import './index.html';
import './style.scss';


// Common JS import:
// const sum = require('./math');

// ES6 import
import sum from './math';

import {alphabet, randomstring} from './myRandomstring';

console.log(alphabet);

//alert(`hallo Welt live reload`);

const sayHallo =() => {
    console.log(`Hallo Welt`);
}
sayHallo(),
console.log(sum(1,3));

console.log(randomstring(255));

// DOM Manipulation

const mainObj = document.getElementById('main');
mainObj.innerHTML='<h1>Porsche GT</h1>';
