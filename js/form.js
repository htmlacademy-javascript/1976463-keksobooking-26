const form = document.querySelector('.ad-form');

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
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000'
};

typeField.addEventListener('change', () => {
  priceField.placeholder = TypeDictionary[typeField.value];
});

const validatePrice = function (price) {
  return price >= TypeDictionary[typeField.value] && price <= 100000;
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

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
