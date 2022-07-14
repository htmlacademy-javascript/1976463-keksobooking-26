import { showAlert } from './utils.js';
import { resetForm } from './form.js';

function getData (cb) {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => cb(data))
    .catch(() => showAlert('Не удалось загрузить данные с сервера!'));
}

function sendData(onSuccess, onFail, body) {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}

export {getData, sendData};
