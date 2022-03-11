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
