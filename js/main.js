import {createMultipleAdverts} from './data.js';
import {generateAdvertElements} from './generator.js';
import './form.js';

const ADVERTS_NUMBER = 1;
generateAdvertElements(createMultipleAdverts(ADVERTS_NUMBER));
