import {createMultipleAdverts} from './data.js';
import {generateAdvertElements} from './generator.js';

const ADVERTS_NUMBER = 10;
generateAdvertElements(createMultipleAdverts(ADVERTS_NUMBER));
