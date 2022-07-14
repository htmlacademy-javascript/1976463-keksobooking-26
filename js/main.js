import {renderPins} from './map.js';
import {getData} from './api.js';

getData((pinsData) => {
  renderPins(pinsData);
});
