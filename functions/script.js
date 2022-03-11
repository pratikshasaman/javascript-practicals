// // Default parameter
// details = [];
// const person = function (namep, dob, add) {
//   const persondetails = {
//     namep,
//     dob,
//     add,
//   };
//   console.log(persondetails);
//   details.push(persondetails);
// };

// person("pratiksha", "28-07-1998", "pune");
// person("pratiksha", undefined, "solapur");

// // how passing arguments works value vs Referrence

// const namePer = "pratiksha";
// const nameObj = {
//   add: "pune",
//   mobileno: 7836973826,
// };

// const checkIn = function (firstname, nameObj) {
//   firstname = "devi"; // original value that copying as it is.
//   nameObj.add = "delhi"; // refrerence value pointing to the exact memory heap
//   if (nameObj.add === "solapur") {
//     alert("This is solapur");
//   } else {
//     alert(" It is pune");
//   }
// };

// checkIn(namePer, nameObj);
// console.log(namePer);
// console.log(nameObj);

// -=====================

// Call method implementation
const airline = {
  nameA: "indian airline",
  id: "IN",
  booked: [],
  book(passenger_name, address) {
    console.log(
      `The ${this.nameA} is Booked by ${passenger_name} and Address is ${address}. ID: ${this.id}`
    );
    this.booked.push({
      airline_name: `${this.nameA}`,
      id: `${this.id}`,
      passenger_name: `${passenger_name}`,
      address: `${address}`,
    });
  },
};

airline.book("Pratiksha Samane", "Pune");
airline.book("Ganesh Patil", "London");

const london_airline = {
  nameA: "London airline",
  id: "LD",
  booked: [],
};

const book = airline.book;

// book("Sneha Samane", "Switzherland");
book.call(london_airline, "Sneha Samane", "Switzherland");
console.log(london_airline);
console.log(airline);
book.call(airline, "Santoshi Samane", "Japan");

// Apply method implementation
const freelancer = ["Guddi", "JAPAN"];
book.apply(airline, freelancer);
console.log(airline);
//  Bind method implementation
const bookMr = book.bind(airline, "iN");
bookMr("newOne", "UK");
bookMr("nEWtwo", "India");

// =============
airline.plane = 300;

airline.buyplane = function () {
  this.plane++;
  console.log(this.plane);
};
document
  .querySelector(".buy")
  .addEventListener("click", airline.buyplane.bind(airline));

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// =========================
// Immediately invoke function
function runOnce() {
  console.log("1: Run Once");
}
runOnce();

(function () {
  console.log("2: Run Once");
})();

(() => console.log("3: Run Once"))();
// ==============

// First class function

function morning(name) {
  console.log(`Good Morning ${name}`);
}
function greet(name, func) {
  return func(name);
}

console.log(greet("Jhon", morning));

//Closure

function laptop() {
  var mouse = "black mouse";
  function windows() {
    var background = "black";
    console.log(`My laptop background is ${background} and ${mouse}`);
  }
  return windows();
}

const CallFF = laptop();

// CallFF();
// ---------------------
p = 2;
function x1() {
  var x = 2;
  function z1() {
    var z = 2;
    console.log(x + z + p);
  }
  return z1();
}

var funcall = x1();
// ================
console.dir(x1);
// ----------cLOUSER EXAMPLE---
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// ------------------
// Higher order function

bodyParts = (nameF, nameS) => {
  return function () {
    console.log(`Body part includes ${nameF} and ${nameS}`);
  };
};
const CallingB = bodyParts("eye", "ear");
CallingB();
// ==============
// First class function example 2

functionCall = (name) => {
  console.log(
    `Hello ${name}...! Let's make the productive day and Proud of yourselfs`
  );
};
greeting = (functionCall, nameM) => {
  // return greeting(nameM, functionCall);
  return functionCall(nameM);
};

console.log(greeting(functionCall, "Pratiksha"));

// ======

const lenovoDetails = {
  ID: 2345,
  name: "Lenovo",
  color: "Silver",
  details: [],
  detail(windowsv, hdd) {
    console.log(
      `${this.name} color is ${this.color} and with ID ${this.ID}.\nDetails: \nWindows: ${windowsv}\n HDD: ${hdd}`
    );
  },
};

lenovoDetails.detail("Windows 11", "500GB");
const info = lenovoDetails.detail;
const acerDetails = {
  ID: 1998,
  name: "Acer",
  color: "Black",
  details: [],
};

info.call(acerDetails, "Windows 7", "1TB");
