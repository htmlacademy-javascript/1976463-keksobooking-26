import {activateMap, renderPins, renderMainPin} from './map.js';
import {getData} from './api.js';

const map = activateMap();
renderMainPin(map);

export {map};

getData((pinsData) => {
  renderPins(pinsData, map);
});
