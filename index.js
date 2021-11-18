import { getResistorOhms } from './resistor.js';

// Resistor band elements
const b0 = document.querySelector('#b0');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');

// Band 1 color elements
const band1 = document.querySelector('#color0');
const band1Black = band1.querySelector('.black');
const band1Brown = band1.querySelector('.brown');
const band1Red = band1.querySelector('.red');
const band1Orange = band1.querySelector('.orange');
const band1Yellow = band1.querySelector('.yellow');
const band1Green = band1.querySelector('.green');
const band1Blue = band1.querySelector('.blue');
const band1Violet = band1.querySelector('.violet');
const band1Grey = band1.querySelector('.grey');
const band1White = band1.querySelector('.white');

// Band 2 color elements
const band2 = document.querySelector('#color1');
const band2Black = band2.querySelector('.black');
const band2Brown = band2.querySelector('.brown');
const band2Red = band2.querySelector('.red');
const band2Orange = band2.querySelector('.orange');
const band2Yellow = band2.querySelector('.yellow');
const band2Green = band2.querySelector('.green');
const band2Blue = band2.querySelector('.blue');
const band2Violet = band2.querySelector('.violet');
const band2Grey = band2.querySelector('.grey');
const band2White = band2.querySelector('.white');

// Multiplier color elements
const multiplier = document.querySelector('#color2');
const multiplierBlack = multiplier.querySelector('.black');
const multiplierBrown = multiplier.querySelector('.brown');
const multiplierRed = multiplier.querySelector('.red');
const multiplierOrange = multiplier.querySelector('.orange');
const multiplierYellow = multiplier.querySelector('.yellow');
const multiplierGreen = multiplier.querySelector('.green');
const multiplierBlue = multiplier.querySelector('.blue');
const multiplierViolet = multiplier.querySelector('.violet');
const multiplierGrey = multiplier.querySelector('.grey');
const multiplierWhite = multiplier.querySelector('.white');
const multiplierGold = multiplier.querySelector('.gold');
const multiplierSilver = multiplier.querySelector('.silver');

// Tolerance color elements
const tolerance = document.querySelector('#color3');
const toleranceBrown = tolerance.querySelector('.brown');
const toleranceRed = tolerance.querySelector('.red');
const toleranceGreen = tolerance.querySelector('.green');
const toleranceBlue = tolerance.querySelector('.blue');
const toleranceViolet = tolerance.querySelector('.violet');
const toleranceGrey = tolerance.querySelector('.grey');
const toleranceGold = tolerance.querySelector('.gold');
const toleranceSilver = tolerance.querySelector('.silver');

// Band 1 event listeners
band1Black.addEventListener('click', () => {
    console.log("band 1 black")
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('black');
});
band1Brown.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('brown');
});
band1Red.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('red');
});
band1Orange.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('orange');
});
band1Yellow.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('yellow');
});
band1Green.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('green');
});
band1Blue.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('blue');
});
band1Violet.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('violet');
});
band1Grey.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('grey');
});
band1White.addEventListener('click', () => {
    const currentColor = getColorClass(b0);
    b0.classList.remove(currentColor);
    b0.classList.add('white');
});

// Band 2 event listeners
band2Black.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('black');
});
band2Brown.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('brown');
});
band2Red.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('red');
});
band2Orange.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('orange');
});
band2Yellow.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('yellow');
});
band2Green.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('green');
});
band2Blue.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('blue');
});
band2Violet.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('violet');
});
band2Grey.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('grey');
});
band2White.addEventListener('click', () => {
    const currentColor = getColorClass(b1);
    b1.classList.remove(currentColor);
    b1.classList.add('white');
});

// Multiplier event listeners
multiplierBlack.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('black');
});
multiplierBrown.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('brown');
});
multiplierRed.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('red');
});
multiplierOrange.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('orange');
});
multiplierYellow.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('yellow');
});
multiplierGreen.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('green');
});
multiplierBlue.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('blue');
});
multiplierViolet.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('violet');
});
multiplierGrey.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('grey');
});
multiplierWhite.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('white');
});
multiplierGold.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('gold');
});
multiplierSilver.addEventListener('click', () => {
    const currentColor = getColorClass(b2);
    b2.classList.remove(currentColor);
    b2.classList.add('silver');
});

// Tolerance event listeners
toleranceBrown.addEventListener('click', () => {
    const currentColor = getColorClass(b3);
    b3.classList.remove(currentColor);
    b3.classList.add('brown');
});
toleranceRed.addEventListener('click', () => {
    const currentColor = getColorClass(b3);
    b3.classList.remove(currentColor);
    b3.classList.add('red');
});
toleranceGreen.addEventListener('click', () => {
    const currentColor = getColorClass(b3);
    b3.classList.remove(currentColor);
    b3.classList.add('green');
});
toleranceBlue.addEventListener('click', () => {
    const currentColor = getColorClass(b3);
    b3.classList.remove(currentColor);
    b3.classList.add('blue');
});
toleranceViolet.addEventListener('click', () => {
    const currentColor = getColorClass(b3);
    b3.classList.remove(currentColor);
    b3.classList.add('violet');
});
toleranceGrey.addEventListener('click', () => {
    const currentColor = getColorClass(b3);
    b3.classList.remove(currentColor);
    b3.classList.add('grey');
});
toleranceGold.addEventListener('click', () => {
    const currentColor = getColorClass(b3);
    b3.classList.remove(currentColor);
    b3.classList.add('gold');
});
toleranceSilver.addEventListener('click', () => {
    const currentColor = getColorClass(b3);
    b3.classList.remove(currentColor);
    b3.classList.add('silver');
});

function getColorClass(ele) {
    const arr = Array.from(ele.classList);
    return arr.find(element => element !== 'band');
};