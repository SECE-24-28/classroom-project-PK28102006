// let x=2;
// console.log("The value x is :", x);
// let arr=[1,2,3,4,5];
// console.log("The array is :", arr);
// arr.push(6);
// console.log("The updated array is :", arr);
// arr.pop(6);
// console.log("The array after pop is :", arr);
// let arr1=["apple", "banana", "cherry"];
// console.log("The fruit array is :", arr1);
// arr1[0]="mango";
// console.log("The updated fruit array is :", arr1);
// const date = new Date();
// console.log("Current date and time is :", date);
// console.log("The Type:", typeof 1);
// let carName1 = "Volvo XC60";
// carName1 = carName1.replace("X","Z");
// console.log("Car name is :", carName1);
// console.log("The 1st character is :", carName1[0]);

// function addition(b, c) {
//     console.log("The sum is :", b + c);
// }
// addition(5, 10);

// const addition = (a, b) => {
//     return a + b;
// }
// console.log("The sum is :", addition(5, 10));

// let arrObject = [
//   { name: "A", mark: 100, address: "Chennai" },
//   { name: "B", mark: 95, address: "Kovai" },
//   { name: "C", mark: 96, address: "Mumbai" },
// ];

// for (let i = 0; i < arrObject.length; i++) {
//   console.log("Name:", arrObject[i].name);
//   console.log("Mark:", arrObject[i].mark);
//   console.log("Address:", arrObject[i].address);
// }
// arrObject.map((item, index) => {
//   console.log("The elment:", item.name);
// });

const person = { name: "John", age: "45", address: "Chennai" };
const value = Object.values(person);
// console.log("The values:", value);
let listElement = value.toString();

console.log("Last element:", listElement);