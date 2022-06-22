import {getRandomInt, getRandomFloat, getRandomElement, getMultipleElements } from './utils.js';

const TITLES = [
  'Квартира в центре',
  'Дом в спальном районе',
  'Уютная квартира на окраине',
  'Элегантная квартира в неброских тонах',
  'Дом под старину',
  'Для взыскательных хозяев',
  'С видом на сад',
  'Дом с самым необычным дизайном',
  'Живите красиво уже сегодня',
  'Эксклюзивный объект в этом районе',
  'Под сенью клёнов',
  'Романтика мегаполиса',
  'Надежный приют',
  'Уголок киномана'
];

const PLACE_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Компактность, практичность и экономия',
  'Ваш автомобиль всегда под боком',
  'Стены, сохраняющие тепло зимой и прохладу летом',
  'Квартира с стеклянной лестницей – это шикарно',
  'Квартира близко от метро, вы можете избавить себя от пробок',
  'Возможность въехать в квартиру на следующий день после сделки',
  'Для большой семьи',
  'Интерьер выполнен в цветах земли и неба',
  'Захватывающее ощущение раскрепощенности и легкости',
  'Гармония, построенная на принципах свободы',
  'Несущие опоры как арт-объект',
  'Яркое отражение индивидуальности'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createAdvert = (index) => {
  const randomLat = getRandomFloat(35.65000, 35.70000, 5);
  const randomLng = getRandomFloat(139.70000, 139.80000, 5);
  const advert = {
    author: {avatar: `img/avatars/user${String(index + 1).padStart(2, '0')}.png`},
    offer: {
      title: getRandomElement(TITLES),
      address: `${randomLat}, ${randomLng}`,
      price: getRandomInt(100, 1000),
      type: getRandomElement(PLACE_TYPES),
      rooms: getRandomInt(1,10),
      guests: getRandomInt(1,10),
      checkin: getRandomElement(CHECK_TIME),
      checkout: getRandomElement(CHECK_TIME),
      features: getMultipleElements(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: getMultipleElements(PHOTOS)
    },
    location: {
      lat: randomLat,
      lng: randomLng
    }
  };
  return advert;
};

const createMultipleAdverts = (count) => Array.from({length: count}, (x, i) => createAdvert(i));

export {createMultipleAdverts};
