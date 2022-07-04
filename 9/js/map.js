import {activateForm} from './form.js';
import {createMultipleAdverts} from './data.js';
import {generateAdvertElement} from './generator.js';
const activateMap = function() {
  const addressField = document.querySelector('#address');
  const map = L.map('map-canvas').on('load', () => {
    activateForm();
  }).setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  const mainMarker = L.marker(
    {
      lat: 35.6895,
      lng: 139.692,
    },
    {
      draggable: true,
      icon: mainPinIcon
    },
  );
  mainMarker.addTo(map);
  let address =  mainMarker.getLatLng();
  addressField.value = `${(address.lat).toFixed(5)}, ${(address.lng).toFixed(5)}`;
  mainMarker.on('moveend', (evt) => {
    address = evt.target.getLatLng();
    addressField.value = `${(address.lat).toFixed(5)}, ${(address.lng).toFixed(5)}`;
  });
  const points = createMultipleAdverts(5);
  points.forEach((point) => {
    const { location: {lat, lng} } = point;
    const marker = L.marker(
      {
        lat,
        lng,
      }
    );

    marker.addTo(map).bindPopup(generateAdvertElement(point));
  });
};

export {activateMap};
