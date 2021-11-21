/* resistor.js */

/*
  elctronic resistors have colored bands where each color represents a numerical number
  Electrical engineers can read the colors and
  determine the resitance value in Ohms

  see this resistor calculator for help
   http://bit.ly/2NjS274
*/

let bands = [];

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((target) => num >= target.value);
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
}

function getColorValue(color) {
  const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };
  return colorCodes[color];
}

function getMultiplierValue(color) {
  const multiplierCodes = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    grey: 100000000,
    white: 1000000000,
    gold: 0.1,
    silver: 0.01,
  };
  return multiplierCodes[color];
}

function getThreeBandValue(bands) {
  let final =
    getColorValue(bands[0]).toString() +
    getColorValue(bands[1]).toString();
  final *= getMultiplierValue(bands[2]);
  if (bands[2] === 'gold') {
    final = Math.round(final * 10) / 10;
  } else if (bands[2] === 'silver') {
    final = Math.round(final * 100) / 100;
  }
  return final;
}

function formatNumber(val) {
  return nFormatter(val, 1);
}

function getTolerance(color) {
  const toleranceCodes = {
    brown: '±1%',
    red: '±2%',
    green: '±0.5%',
    blue: '±0.25%',
    violet: '±0.1%',
    grey: '±0.05%',
    gold: '±5%',
    silver: '±10%',
  };
  return toleranceCodes[color];
}

const getResistorOhms = (bands) => {
  const resistorValue = formatNumber(getThreeBandValue(bands));
  const tolerance = getTolerance(bands[3]);
  return `Resistor value: ${resistorValue} Ohms ${tolerance}`;
};

export { getResistorOhms };
