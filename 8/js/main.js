import {createMultipleAdverts} from './data.js';
import {generateAdvertElements} from './generator.js';
import {activateForm} from './form.js';
import './form.js';

activateForm();
const ADVERTS_NUMBER = 1;
generateAdvertElements(createMultipleAdverts(ADVERTS_NUMBER));
