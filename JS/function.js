// STRING MANIPULATION FUNCTION

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ARRAY FUNCTIONS

// 4. Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

// 5. Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

// 6. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 7. Filter Array (condition passed as callback)
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// MATHEMATICAL FUNCTIONS

// 8. Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 9. Prime Number Check
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 10. Fibonacci Sequence
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// TEST EXAMPLES
console.log("=== String Functions ===");
console.log(reverseString("hello"));             
console.log(countCharacters("hello"));           
console.log(capitalizeWords("hello world"));     

console.log("=== Array Functions ===");
console.log(findMax([3, 8, 2]));                  
console.log(findMin([3, 8, 2]));                  
console.log(sumArray([1, 2, 3, 4]));              
console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 

console.log("=== Math Functions ===");
console.log(factorial(5));                        
console.log(isPrime(7));                          
console.log(fibonacci(7));                      
