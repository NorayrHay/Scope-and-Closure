"use strict";

function sumEvensQuadro(array) {
  let evenElArr = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] !== 0) evenElArr.push(array[i]);
  }
  for (let i = 0; i < evenElArr.length; i++) {
    sum += Math.pow(evenElArr[i], 2);
  }
  return sum;
}
console.log(sumEvensQuadro([1, 4, -2, 0, 11, 12]));
