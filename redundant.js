"use strict"

function redundant(str){
    return function(){
         return  str 
    }
}
const f1 = redundant("''");
console.log(f1());