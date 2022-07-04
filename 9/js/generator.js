const HousingType = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель'
};

//const testMap = document.querySelector('#map-canvas');
const similarAdvertTemplate = document.querySelector('#card').content.querySelector('.popup');

function emptyFieldHandler(field, element) {
  if (field.length !== 0) {
    element.textContent = field;
  } else {
    element.remove();
  }
}

function generateAdvertElement (advert) {
  const {
    author: { avatar }, offer: { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos }
  } = advert;
  const similarAdvert = similarAdvertTemplate.cloneNode(true);
  similarAdvert.querySelector('.popup__photo').remove();
  const popupTitle = similarAdvert.querySelector('.popup__title');
  emptyFieldHandler(title, popupTitle);
  const popupAddress = similarAdvert.querySelector('.popup__text--address');
  emptyFieldHandler(address, popupAddress);
  const popupPrice = similarAdvert.querySelector('.popup__text--price');
  if (price.length !== 0) {
    popupPrice.textContent = `${price} ₽/ночь`;
  } else {
    popupPrice.remove();
  }
  const popupType = similarAdvert.querySelector('.popup__type');
  if (type.length !== 0) {
    popupType.textContent = HousingType[type.toUpperCase()];
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
  emptyFieldHandler(description, popupDescription);
  const popupAvatar = similarAdvert.querySelector('.popup__avatar');
  if (avatar.length !== 0) {
    popupAvatar.src = avatar;
  } else {
    popupAvatar.remove();
  }
  const popupPhotos = similarAdvert.querySelector('.popup__photos');
  if (photos.length !== 0) {
    photos.forEach( (photo, i) => {
      photo = document.createElement('img');
      photo.src = photos[i];
      photo.classList.add('popup__photo');
      photo.alt = 'Фотография жилья';
      photo.width = 45;
      photo.height = 40;
      popupPhotos.append(photo);
    });
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
  return similarAdvert;
}

export {generateAdvertElement};
