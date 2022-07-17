import {renderPins} from './map.js';
import {getData} from './api.js';
import {setResetForm, setSubmitForm} from './form.js';
import {filterAdverts} from './filters.js';
import {debounce} from './utils.js';
import './avatar.js';

const MAX_PINS = 10;
const filters = document.querySelector('.map__filters');


getData((pinsData) => {
  renderPins(pinsData.slice(0, MAX_PINS));
  filters.addEventListener('change', debounce(() => renderPins(filterAdverts(pinsData.slice()))));
  setResetForm(pinsData.slice(0, MAX_PINS));
  setSubmitForm(pinsData.slice(0, MAX_PINS));
});

