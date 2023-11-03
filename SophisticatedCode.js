/* 
Filename: SophisticatedCode.js
Description: This code demonstrates a sophisticated and complex JavaScript solution for processing and analyzing a dataset of sales records.
*/

// Define a class for sales records
class SalesRecord {
  constructor(date, product, price, quantity) {
    this.date = date;
    this.product = product;
    this.price = price;
    this.quantity = quantity;
  }
  
  getTotalSales() {
    return this.price * this.quantity;
  }
}

// Define an array to store sales records
let salesData = [];

// Function to populate salesData with dummy data
function generateDummyData() {
  let products = ['Product A', 'Product B', 'Product C'];
  let numRecords = 1000;
  
  for (let i = 0; i < numRecords; i++) {
    let randomDate = new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    let randomProduct = products[Math.floor(Math.random() * products.length)];
    let randomPrice = Math.floor(Math.random() * 100) + 50;
    let randomQuantity = Math.floor(Math.random() * 10) + 1;
    
    salesData.push(new SalesRecord(randomDate, randomProduct, randomPrice, randomQuantity));
  }
}

// Function to calculate total sales for each product
function calculateTotalSalesByProduct() {
  let totalSalesByProduct = {};
  
  for (let record of salesData) {
    if (totalSalesByProduct.hasOwnProperty(record.product)) {
      totalSalesByProduct[record.product] += record.getTotalSales();
    } else {
      totalSalesByProduct[record.product] = record.getTotalSales();
    }
  }
  
  return totalSalesByProduct;
}

// Function to find the best-selling product
function findBestSellingProduct() {
  let totalSalesByProduct = calculateTotalSalesByProduct();

  let bestSellingProduct = null;
  let maxSales = 0;

  for (let product in totalSalesByProduct) {
    if (totalSalesByProduct[product] > maxSales) {
      bestSellingProduct = product;
      maxSales = totalSalesByProduct[product];
    }
  }

  return bestSellingProduct;
}

// Function to find the total sales for a specific product
function findTotalSalesByProduct(product) {
  let totalSalesByProduct = calculateTotalSalesByProduct();

  if (totalSalesByProduct.hasOwnProperty(product)) {
    return totalSalesByProduct[product];
  } else {
    return 'Product not found.';
  }
}

// Generate dummy data
generateDummyData();

// Calculate and display total sales by product
console.log('Total sales by product:');
console.log(calculateTotalSalesByProduct());

// Find and display the best-selling product
console.log('Best-selling product:');
console.log(findBestSellingProduct());

// Find and display the total sales for a specific product
console.log('Total sales for Product A:');
console.log(findTotalSalesByProduct('Product A'));