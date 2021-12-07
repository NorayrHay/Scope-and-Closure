"use strict";

function isogram(string) {
  let strArr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") strArr.push(string[i]);
  }

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (i !== j && strArr[i] === strArr[j]) return "not isogram";
    }
  }
  return "isogram";
}
console.log(isogram("bc ae v"));
