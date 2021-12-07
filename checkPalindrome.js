"use strict";

function isPalindrome(word) {
  let lowCaseWord = word.toLowerCase();
  let reversedWord = lowCaseWord.split("").reverse().join("");

  if (lowCaseWord === reversedWord) return "yes";
  return "no";
}
console.log(isPalindrome("assdddssA"));
