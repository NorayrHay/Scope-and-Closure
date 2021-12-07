"use strict";

function uniqueOrNot(arr) {
  let result = "";
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return "nonUnique";
    else result = "unique";
  }
  return result;
}
console.log(uniqueOrNot([1, 4, -2, 11, 5]));
