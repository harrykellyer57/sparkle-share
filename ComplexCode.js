/*
  Filename: ComplexCode.js
  Description: A complex code with advanced algorithms and operations for data manipulation
*/

// Create a function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Implement a data structure for a binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    let currentNode = this.root;

    while (currentNode && currentNode.value !== value) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return currentNode;
  }
}

// Create an instance of the binary tree and insert nodes
const binaryTree = new BinaryTree();
binaryTree.insert(8);
binaryTree.insert(3);
binaryTree.insert(10);
binaryTree.insert(1);

// Calculate Fibonacci series up to a given number
function fibonacci(n) {
  const series = [0, 1];

  for (let i = 2; i <= n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  return series;
}

// Perform matrix multiplication
function matrixMultiplication(matrix1, matrix2) {
  const rowsA = matrix1.length;
  const colsA = matrix1[0].length;
  const colsB = matrix2[0].length;
  const resultMatrix = [];

  for (let i = 0; i < rowsA; i++) {
    resultMatrix[i] = [];

    for (let j = 0; j < colsB; j++) {
      let sum = 0;

      for (let k = 0; k < colsA; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }

      resultMatrix[i][j] = sum;
    }
  }

  return resultMatrix;
}

// Calculate the nth prime number using the Sieve of Eratosthenes algorithm
function nthPrime(n) {
  const sieve = new Array(1000000).fill(true);
  const primes = [];
  let count = 0;

  for (let p = 2; count < n; p++) {
    if (sieve[p]) {
      primes.push(p);
      count++;

      for (let i = p * p; i < 1000000; i += p) {
        sieve[i] = false;
      }
    }
  }

  return primes.pop();
}

// Usage examples
console.log(factorial(5));
console.log(binaryTree.search(3));
console.log(fibonacci(10));
console.log(matrixMultiplication([[1, 2], [3, 4]], [[5, 6], [7, 8]]));
console.log(nthPrime(10));