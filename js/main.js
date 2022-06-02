//Возвращает целое число из диапазона "от...до".
function getRandomInt(min, max) {
  /*
  Имеет ли смысл такая "защита" от введения некорректного диапазона(по условию должен быть неотрицательным)?
  if (min < 0) {
    min *= -1;
  }
    if (max < 0) {
    min *= -1;
  }
  */
  if (max < min) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Возвращает число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой".
function getRandomFloat(min, max, fraction) {
  if (max < min) {
    return null;
  }
  return Number((Math.random() * (max - min) + min).toFixed(fraction));
}

getRandomFloat(-5, 10, 5);
getRandomInt(-5, 10);

