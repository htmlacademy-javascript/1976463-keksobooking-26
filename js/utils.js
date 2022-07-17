const ALERT_SHOW_TIME = 5000;

function getRandomInt(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomFloat(a, b, fraction) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(fraction);
}

function getRandomElement(elements) {
  return elements[getRandomInt(0, elements.length - 1)];
}

function getMultipleElements(elements) {
  const elementsList = [];
  for (let i = 0; i < getRandomInt(1, elements.length); i++) {
    elementsList[i] = elements[i];
  }
  return elementsList;
}

function showAlert (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

function closeSuccessMessage (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    successMessage.remove();
  }
}

function closeErrorMessage (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    errorMessage.remove();
  }
}

function showSuccessMessage () {
  document.body.insertAdjacentElement('beforeend', successMessage);
  document.addEventListener('keydown', closeSuccessMessage, {once: true});
  successMessage.addEventListener('click', () => {
    successMessage.remove();
    document.removeEventListener('keydown', closeSuccessMessage, {once: true});
  });
}

function showErrorMessage () {
  document.body.insertAdjacentElement('beforeend', errorMessage);
  document.addEventListener('keydown', closeErrorMessage, {once: true});
  errorMessage.addEventListener('click', () => {
    errorMessage.remove();
    document.removeEventListener('keydown', closeErrorMessage, {once: true});
  });
}

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomInt, getRandomFloat, getRandomElement, getMultipleElements, showAlert, showSuccessMessage, showErrorMessage, debounce};

