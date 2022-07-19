import { showAlert } from './utils.js';
import { enableSubmitButton, disableSubmitButton, activateFilters, setResetForm, setSubmitForm } from './form.js';

const ServerUrl = {
  LOAD: 'https://26.javascript.pages.academy/keksobooking/data',
  UPLOAD: 'https://26.javascript.pages.academy/keksobooking'
};


function getData (cb) {
  fetch(ServerUrl.LOAD)
    .then((response) => response.json())
    .then((data) => {
      activateFilters();
      cb(data);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера!');
      setResetForm();
      setSubmitForm();
    });
}

function sendData(onSuccess, onFail, body) {
  fetch(
    ServerUrl.UPLOAD,
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
