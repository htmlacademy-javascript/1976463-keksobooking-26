import {activateForm} from './form.js';
import {generateAdvertElement} from './generator.js';

const COORDINATES_DECIMALS = 5;

const DEFAULT_COORDINATES = {
  lat: 35.6895,
  lng: 139.692,
};

const map = L.map('map-canvas').on('load', () => {
  activateForm();
}).setView(DEFAULT_COORDINATES, 10);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
const markerGroup = L.layerGroup().addTo(map);

const addressField = document.querySelector('#address');
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainMarker = L.marker(
  DEFAULT_COORDINATES,
  {
    draggable: true,
    icon: mainPinIcon
  },
);

let address =  mainMarker.getLatLng();
mainMarker.addTo(markerGroup);
addressField.value = `${(address.lat).toFixed(COORDINATES_DECIMALS)}, ${(address.lng).toFixed(COORDINATES_DECIMALS)}`;
mainMarker.on('move', (evt) => {
  address = evt.target.getLatLng();
  addressField.value = `${(address.lat).toFixed(COORDINATES_DECIMALS)}, ${(address.lng).toFixed(COORDINATES_DECIMALS)}`;
});

function setDefaultCoordinates () {
  mainMarker.setLatLng(DEFAULT_COORDINATES);
  address = mainMarker.getLatLng();
  addressField.value = `${(address.lat).toFixed(COORDINATES_DECIMALS)}, ${(address.lng).toFixed(COORDINATES_DECIMALS)}`;
}

function renderPins (advertsData) {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  advertsData.forEach((advert) => {
    const { location: {lat, lng} } = advert;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon
      }
    );

    marker.addTo(markerGroup).bindPopup(generateAdvertElement(advert));
  });
}

export {renderPins, setDefaultCoordinates};
