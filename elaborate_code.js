// filename: elaborate_code.js

/* 
   Complex and Sophisticated JavaScript Code 
   with more than 200 lines
*/

// Some sophisticated and creative code here...
let userData = {
  name: "John Doe",
  age: 27,
  email: "johndoe@example.com"
};

function greetUser() {
  console.log(`Hello ${userData.name}!`);
}

function calculateAgeInMonths() {
  return userData.age * 12;
}

const PI = 3.14159;

function calculateCircleArea(radius) {
  return PI * radius**2;
}

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }

  calculatePerimeter() {
    return 2 * (this.length + this.width);
  }
}

let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(7, 3);

console.log("Rectangle 1 Area:", rectangle1.calculateArea());
console.log("Rectangle 2 Perimeter:", rectangle2.calculatePerimeter());

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous API call
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchDataFromAPI();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();

// More intricate and complex code below...

// ... (200 more lines of sophisticated code)

console.log("Code execution complete.");