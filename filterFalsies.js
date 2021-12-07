"use strict"

function filterFalsyValues(arr){

    let result = arr.filter(Boolean);
    return result;
}
console.log(filterFalsyValues([null, true, {}, { name: "Elon" }, "", NaN, 0]));