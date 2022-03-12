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

// Arrys for loop

const movements = [200, -100, 340, 600, -23, 450, -25, -123];
// for loop
console.log("=======for use=========");

for (const item of movements) {
  const value = Math.sign(item);
  if (value == 1) {
    console.log(`${item} is deposited`);
  } else {
    console.log(`${Math.abs(item)} is withdrawl`);
  }
}

// .entries() use
console.log("=======Entries use==========");
for (const [i, item] of movements.entries()) {
  // idex, current element
  const value = Math.sign(item);
  if (value == 1) {
    console.log(`Movements ${i} : ${item} is deposited`);
  } else {
    console.log(`Movements ${i} : ${Math.abs(item)} is withdrawl`);
  }
}
// foreach

console.log("=======forEach use==========");

movements.forEach(function (item, index, movements) {
  // current element, index, entire array
  const value = Math.sign(item);
  if (value == 1) {
    console.log(`Movements ${index} : ${item} is deposited`);
  } else {
    console.log(`Movements ${index} : ${Math.abs(item)} is withdrawl`);
  }
});

// foreach for MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

console.log("------- forEach MAP-----------");
currencies.forEach(function (value, index, currencies) {
  console.log(`${index} : ${value}`);
});

console.log("------- forEach SET-----------");
const set_value = new Set(["ABC", "ABC", "PQR", "ERT", "ERT", "OPA", "APO"]);

set_value.forEach(function (value, index, set_value) {
  console.log(`${index} : ${value}`);
});

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const dogsJ = ["5", "2", "4", "1", "3"];
const dogsK = ["2", "7", "3", "1", "10"];
const checkDogs = (dogsJ, dogsK) => {
  console.log(dogsJ);
  dogsJ.splice(0, 1); //position of element to be deleted , and no. of element to be deleted.
  dogsJ.splice(-2); // deletes last 2 elements
  // splice modify the original array

  //2. Create an array with both Julia's (corrected) and Kate's data
  const joinJK = [...dogsJ, ...dogsK];
  console.log(joinJK);
  //3. ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  joinJK.forEach(function (value, key, joinJK) {
    // console.log(value);
    if (value >= 3) {
      console.log(
        `Dog number ${key + 1} is an adult, an is ${value} yeard old`
      );
    } else {
      console.log(`Dog number ${key + 1} is still a puppy🐶`);
    }
  });
};

checkDogs(dogsJ, dogsK);

// =============================
//  Map method

const ingV = ["some", "think", "drink", "danc", "play"];
const newStr = ingV.map(function (str) {
  return str.concat("ing");
});
console.log(newStr);

const newStr2 = ingV.map((str) => str.concat("ing")); // arrow function
console.log(newStr2);
// ========================s
// newStr1 = (str) => {
//   return str.concat("ing");
// };
// const a = newStr1(ingV);
// console.log(a);
// ========================Filter

const str1 = ["pratiksha", "devi", "ganesh", "mummy", "pratiksha"];
const newStr1 = str1.filter(function (i) {
  // console.log(i);
  return i === "pratiksha" ? "availabel" : "Not Availabel";
});
console.log(newStr1);
// ======================

const movements1 = [200, -100, 340, 600, -23, 450, -25, -123];

const newarr = movements1.filter(function (value, index) {
  return value > 0;
});

console.log(newarr);
// =================
const hello1 = [];
movements1.forEach(function (value, key, movements1) {
  return value > 0 ? hello1.push(value) : 0;
});

console.log(hello1);
// =============
const withd = [];
const movements3 = [200, -100, 340, 600, -23, 450, -25, -123];
movements3.forEach(function (value, key, movements3) {
  return value < 0 ? withd.push(value) : "";
});
const withd1 = [];
//Map funtion
movements3.map(function (value) {
  return value < 0 ? withd1.push(value) : "";
});
console.log(withd1);

const withd2 = [];
//Arrow function
movements3.map((value) => (value < 0 ? withd2.push(value) : ""));
console.log(withd2);

// filter function
const bb = movements3.filter((value) => value < 0);
console.log(bb);
