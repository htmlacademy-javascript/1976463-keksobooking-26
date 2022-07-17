import { sendData } from './api.js';
import {showSuccessMessage, showErrorMessage} from './utils.js';
import {setDefaultCoordinates} from './map.js';

const MAX_PRICE = 100000;
const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const filters = document.querySelector('.map__filters');
const filtersFieldsets = filters.querySelectorAll('fieldset');
const sliderElement = form.querySelector('.ad-form__slider');
const resetButton = form.querySelector('.ad-form__reset');
const submitButton = document.querySelector('.ad-form__submit');

function disableForm () {
  form.classList.add('ad-form--disabled');
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
}

function disableFilters () {
  filters.classList.add('map__filters--disabled');
  filtersFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
}

disableForm();
disableFilters();

function enableSubmitButton (){
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
}

function disableSubmitButton (){
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется...';
}
function activateForm () {
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
}

function activateFilters () {
  filters.classList.remove('map__filters--disabled');
  filtersFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
}

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'validation__error-text'}
);

const roomsField = form.querySelector('[name="rooms"]');
const capacityField = form.querySelector('[name="capacity"]');

const roomsOptions = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

function validateRooms () {
  return roomsOptions[roomsField.value].includes(capacityField.value);
}

function onSelectChange (evt) {
  if (evt.target.nodeName === 'SELECT') {
    pristine.validate(roomsField);
    pristine.validate(capacityField);
  }
}

roomsField.addEventListener('change', onSelectChange);
capacityField.addEventListener('change', onSelectChange);

pristine.addValidator(roomsField, validateRooms, 'неподходящее число комнат для стольких гостей');
pristine.addValidator(capacityField, validateRooms);

const priceField = form.querySelector('[name="price"]');
const typeField = form.querySelector('[name="type"]');

const TypeDictionary = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

typeField.addEventListener('change', () => {
  priceField.placeholder = TypeDictionary[typeField.value];
});

const validatePrice = function (price) {
  return price >= TypeDictionary[typeField.value] && price <= MAX_PRICE;
};

pristine.addValidator(priceField, validatePrice, 'цена указана неверно');

typeField.addEventListener('change', () => {
  pristine.validate(priceField);
});

const checkinField = form.querySelector('#timein');
const checkoutFirld = form.querySelector('#timeout');

checkinField.addEventListener('change', () => {
  checkoutFirld.value = checkinField.value;
});

checkoutFirld.addEventListener('change', () => {
  checkinField.value = checkoutFirld.value;
});

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
  pristine.validate(priceField);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    sendData(() => {
      showSuccessMessage();
      resetForm();
    }, showErrorMessage, new FormData(evt.target));
  }
});

function resetForm () {
  form.reset();
  setDefaultCoordinates();
  filters.reset();
}


resetButton.addEventListener('click', () => resetForm());

export {disableForm, activateForm, resetForm, enableSubmitButton, disableSubmitButton, activateFilters};
