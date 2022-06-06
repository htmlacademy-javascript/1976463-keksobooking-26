const ADVERTS_NUMBER = 10;

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

//Возвращает положительное целое число из диапазона "от...до".
function getRandomInt(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
// Возвращает положительное число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой".
function getRandomFloat(a, b, fraction) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(fraction);
}

function getAvatarId(i) {
  let avatarId = 'img/avatars/user';
  avatarId += (i < 9) ? `0${i + 1}` : i + 1;
  avatarId += '.png';
  return avatarId;
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

const createAdvert = (index) => {
  const randomLat = getRandomFloat(35.65000, 35.70000, 5);
  const randomLng = getRandomFloat(139.70000, 139.80000, 5);
  const advert = {
    author: {avatar: getAvatarId(index)},
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

const createMultipleAdverts = (advertsNumber) => {
  const advertsList = [];
  for (let i = 0; i < advertsNumber; i++) {
    advertsList[i] = createAdvert(i);
  }
  return advertsList;
};

createMultipleAdverts(ADVERTS_NUMBER);
