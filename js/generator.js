import {createMultipleAdverts} from './data.js';

const TYPE_DICTIONARY = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const testMap = document.querySelector('#map-canvas');
const similarAdvertTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAdverts = createMultipleAdverts(1);

similarAdverts.forEach(({author: {avatar}, offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}}) => {
  const similarAdvert = similarAdvertTemplate.cloneNode(true);
  similarAdvert.querySelector('.popup__photo').remove();
  const popupTitle = similarAdvert.querySelector('.popup__title');
  if (title.length !== 0) {
    popupTitle.textContent = title;
  } else {
    popupTitle.remove();
  }
  const popupAddress = similarAdvert.querySelector('.popup__text--address');
  if (address.length !==0) {
    popupAddress.textContent = address;
  } else {
    popupAddress.remove();
  }
  const popupPrice = similarAdvert.querySelector('.popup__text--price');
  if (price.length !== 0) {
    popupPrice.textContent = `${price} ₽/ночь`;
  } else {
    popupPrice.remove();
  }
  const popupType = similarAdvert.querySelector('.popup__type');
  if (type.length !== 0) {
    popupType.textContent = TYPE_DICTIONARY[type];
  } else {
    popupType.remove();
  }
  const popupCapacity = similarAdvert.querySelector('.popup__text--capacity');
  if (rooms.length !== 0 && guests.length !== 0) {
    popupCapacity.textContent = `${rooms} комнаты для ${guests} гостей`;
  } else {
    popupCapacity.remove();
  }
  const popupTime = similarAdvert.querySelector('.popup__text--time');
  if (checkin.length !== 0 && checkout.length !== 0) {
    popupTime.textContent = `${checkin}, выезд до ${checkout}`;
  } else {
    popupTime.remove();
  }
  const popupDescription = similarAdvert.querySelector('.popup__description');
  if (description.length !== 0) {
    popupDescription.textContent = description;
  } else {
    popupDescription.remove();
  }
  const popupAvatar = similarAdvert.querySelector('.popup__avatar');
  if (avatar.length !== 0) {
    popupAvatar.src = avatar;
  } else {
    popupAvatar.remove();
  }
  const popupPhotos = similarAdvert.querySelector('.popup__photos');
  if (photos.length !== 0) {
    for (let i = 0; i < photos.length; i++) {
      const photo = document.createElement('img');
      photo.src = photos[i];
      photo.classList.add('popup__photo');
      photo.alt = 'Фотография жилья';
      photo.width = 45;
      photo.height = 40;
      popupPhotos.append(photo);
    }
  } else {
    popupPhotos.remove();
  }
  const popupFeatures = similarAdvert.querySelectorAll('.popup__feature');
  popupFeatures.forEach((featureItem) => {
    const isAvailable = features.some((feature) => featureItem.classList.contains(`popup__feature--${  feature}`));
    if(!isAvailable) {
      featureItem.remove();
    }
  });
  console.log(similarAdvert);
  testMap.append(similarAdvert);
});

