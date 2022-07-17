const filters = document.querySelector('.map__filters');
const filtersType = filters.querySelector('#housing-type');
const filtersPrice = filters.querySelector('#housing-price');
const filtersRooms = filters.querySelector('#housing-rooms');
const filtersGuests = filters.querySelector('#housing-guests');
const filtersFeatures = filters.querySelectorAll('.map__checkbox');

const PriceRange = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  high: {
    min: 50000,
    max: 100000,
  }
};

function filterAdverts (adverts) {
  const filteredAdverts = [];
  for (const advert of adverts) {
    if (filteredAdverts.length >= 10) {
      break;
    }
    const {
      offer: {price, type, rooms, guests, features}
    } = advert;
    let isSutible = true;
    if(!(filtersType.value === type) && (filtersType.value !== 'any')) {
      isSutible = false;
    }
    if (filtersPrice.value !== 'any') {
      if(!(price >= PriceRange[filtersPrice.value].min && price < PriceRange[filtersPrice.value].max)) {
        isSutible = false;
      }
    }
    if (filtersRooms.value !== 'any' && Number(filtersRooms.value) !== rooms) {
      isSutible = false;
    }
    if (filtersGuests.value !== 'any' && Number(filtersGuests.value) !== guests) {
      isSutible = false;
    }
    const selectedFeatures = [];
    filtersFeatures.forEach((feature) => {
      if (feature.checked) {
        selectedFeatures.push(feature.value);
      }
    });
    if(!(selectedFeatures.every((feature)=> features && features.includes(feature)))) {  //3
      isSutible = false;
    }
    if (isSutible) {
      filteredAdverts.push(advert);
    }
  }
  return filteredAdverts;
}

export {filterAdverts};
