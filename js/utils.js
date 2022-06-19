function getRandomInt(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomFloat(a, b, fraction) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(fraction);
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

export {getRandomInt, getRandomFloat, getRandomElement, getMultipleElements};

