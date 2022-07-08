import { showAlert } from './utils.js';

function getData (cb) {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => cb(data))
    .catch(() => showAlert('Не удалось загрузить данные с сервера!'));
}
export {getData};
