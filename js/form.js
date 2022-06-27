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

typeField.addEventListener('change', () => {
  switch (typeField.value) {
    case ('flat'):
      priceField.placeholder = '1000';
      break;
    case ('bungalow'):
      priceField.placeholder = '0';
      break;
    case ('hotel'):
      priceField.placeholder = '3000';
      break;
    case ('house'):
      priceField.placeholder = '5000';
      break;
    case ('palace'):
      priceField.placeholder = '10000';
      break;
    default:
      break;
  }
});

const validatePrice = function () {
  let isTrue = false;
  switch (typeField.value) {
    case ('flat'):
      isTrue = priceField.value >= 1000 && priceField.value <= 100000;
      break;
    case ('bungalow'):
      isTrue = priceField.value > 0 && priceField.value <= 100000;
      break;
    case ('hotel'):
      isTrue = priceField.value >= 3000 && priceField.value <= 100000;
      break;
    case ('house'):
      isTrue = priceField.value >= 5000 && priceField.value <= 100000;
      break;
    case ('palace'):
      isTrue = priceField.value >= 10000 && priceField.value <= 100000;
      break;
    default:
      break;
  }
  return isTrue;
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
