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
const band2Brown = band2.querySelector('brown');
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
band1Black.addEventListenerlisten('click', () => {
    const currentColor = b0.getColorClass();
    b0.classList.remove(currentColor);
    b0.classList.add('black');
});
band1Brown.addEventListenerlisten('click', () => {
    b0.classList.add('.brown');
});
band1Red.addEventListenerlisten('click', () => {
    b0.classList.add('.red');
});
band1Orange.addEventListenerlisten('click', () => {
    b0.classList.add('.orance');
});
band1Yellow.addEventListenerlisten('click', () => {
    b0.classList.add('.yellow');
});
band1Green.addEventListenerlisten('click', () => {
    b0.classList.add('.green');
});
band1Blue.addEventListenerlisten('click', () => {
    b0.classList.add('.blue');
});
band1Violet.addEventListenerlisten('click', () => {
    b0.classList.add('.violet');
});
band1White.addEventListenerlisten('click', () => {
    b0.classList.add('.grey');
});

// Band 2 event listeners
band2Black.addEventListenerlisten('click', () => {
    b1.classList.add('.black');
});
band2Brown.addEventListenerlisten('click', () => {
    b1.classList.add('.brown');
});
band2Red.addEventListenerlisten('click', () => {
    b1.classList.add('.red');
});
band2Orange.addEventListenerlisten('click', () => {
    b1.classList.add('.orance');
});
band2Yellow.addEventListenerlisten('click', () => {
    b1.classList.add('.yellow');
});
band2Green.addEventListenerlisten('click', () => {
    b1.classList.add('.green');
});
band2Blue.addEventListenerlisten('click', () => {
    b1.classList.add('.blue');
});
band2Violet.addEventListenerlisten('click', () => {
    b1.classList.add('.violet');
});
band2White.addEventListenerlisten('click', () => {
    b1.classList.add('.grey');
});


function getColorClass() {
    const arr = Array.from(this.classList);
    return arr.find(element => element !== 'box');
};