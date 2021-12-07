"use strict";

function bigestMult(array) {
  let multArr = [];
  //with method
  // let result = 0;

  for (let i = 0; i < array.length - 1; i++) {
    multArr.push(array[i] * array[i + 1]);
  }

  let result = multArr[0];
  for (let i = 0; i < multArr.length; i++) {
    //with method
    // result = Math.max(...multArr);
    if (multArr[i] > result) result = multArr[i];
  }
  return result;
}
console.log(bigestMult([5, -5, 4, 8, 12, 11, 1]));
