"use strict"

function addSuffix(suf){
    return function(word){
        return word + suf;
    }
}
const addLy = addSuffix("ly");
console.log(addLy("hopeless"));

const addLess = addSuffix("less");
console.log(addLess("fear"));