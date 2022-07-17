import {renderPins} from './map.js';
import {getData} from './api.js';
import {filterAdverts} from './firlters.js';
import {debounce} from './utils.js';
import './avatar.js';

const filters = document.querySelector('.map__filters');

getData((pinsData) => {
  renderPins(pinsData.slice(0,10));
  filters.addEventListener('change', debounce(() => renderPins(filterAdverts(pinsData.slice()))));
});

