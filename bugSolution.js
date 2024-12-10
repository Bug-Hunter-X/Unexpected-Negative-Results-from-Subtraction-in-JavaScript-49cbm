function myFunction(a, b) {
  return Math.abs(a - b); // Using Math.abs to always return positive difference
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: 3

function myFunction2(a,b){
    return a>b ? a-b : b-a; //using ternary operator
}
console.log(myFunction2(5, 2)); // Output: 3
console.log(myFunction2(2, 5)); // Output: 3