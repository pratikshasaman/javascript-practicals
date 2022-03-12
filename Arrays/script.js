"use strict";

const alphabet = ["a", "b", "c", "d"];

// Slice
console.log(alphabet.slice(1)); // 1st (parameter) is starting position(1st param included)
console.log(alphabet.slice(-2)); // start 2nd last
console.log(alphabet.slice(-2, -1)); // 2nd param not included
console.log(alphabet.slice(2, 4));

console.log(alphabet);
// splice
// modify the original array
// console.log(alphabet.splice(1)); // 1st pos to start the changing of array
// console.log(alphabet.splice(2, 3)); // indexes to be deleted
// console.log(alphabet.splice(-1, 2));
// console.log(alphabet);
const small_letters = ["e", "f", "g", "h"];
// console.log(alphabet.reverse());
console.log(alphabet.concat(small_letters));

console.log([...alphabet, ...small_letters]); // this too conacat two arrays

// at() method
console.log(alphabet.at(0));
console.log(alphabet.at(-1)); // retun last position

console.log(alphabet.slice(-1)[0]); // this too retun last postion

// at() can also be applied on string

console.log("pratiksha".at(-1)); // same as above
