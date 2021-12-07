"use strict"

function removeEll(arr){
    let result = arr.filter(word => word.length > 3);
    return result;
}
console.log(removeEll(["kia", "tesla", "bmw", "mercedes"]));