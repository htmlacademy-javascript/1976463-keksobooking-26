import {createMultipleAdverts} from './data.js';
import {activateMap} from './map.js';

const ADVERTS_NUMBER = 10;
const advertsData = createMultipleAdverts(ADVERTS_NUMBER);

activateMap(advertsData);
