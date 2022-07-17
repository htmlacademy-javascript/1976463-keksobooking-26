import { showAlert } from './utils.js';
import { enableSubmitButton, disableSubmitButton, activateFilters } from './form.js';


function getData (cb) {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      activateFilters();
      cb(data);
    })
    .catch(() => showAlert('Не удалось загрузить данные с сервера!'));
}

function sendData(onSuccess, onFail, body) {
  fetch(
    'https://26.javascript.pages.academ/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then(disableSubmitButton())
    .then((response) => {
      if(response.ok) {
        onSuccess();
        enableSubmitButton();
      } else {
        onFail();
        enableSubmitButton();
      }
    })
    .catch(() => {
      onFail();
      enableSubmitButton();
    });
}

export {getData, sendData};
