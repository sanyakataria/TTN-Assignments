const pi = 3.14;

const areaCircle = (r) => {
  return pi * r * r;
};

const areaRect = (l, b) => {
  return l * b;
};

const areaCyl = (r, h) => {
  return pi * r * r * h;
};

module.exports = { pi, areaCircle, areaRect, areaCyl };
