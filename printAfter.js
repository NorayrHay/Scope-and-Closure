"use strict";

function printAfter(funk) {
  console.log("hello, world");
  funk();
}
const print = () => console.log("Elon Musk");

printAfter(print);
