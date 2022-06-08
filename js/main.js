import {createAdvert} from './data.js';

const ADVERTS_NUMBER = 10;

const createMultipleAdverts = (count) => Array.from({length: count}, (x, i) => createAdvert(i));
console.log(createMultipleAdverts(ADVERTS_NUMBER));
