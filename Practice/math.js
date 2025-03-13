const numbers = [4.3, 7.8, 2.5, 9.9, -3.7];

// Ceiling
const ceilValues = numbers.map(num => Math.ceil(num));
console.log("Ceil:", ceilValues);  
// Output: [5, 8, 3, 10, -3]

// Flooring
const floorValues = numbers.map(num => Math.floor(num));
console.log("Floor:", floorValues);  
// Output: [4, 7, 2, 9, -4]

// Rounding
const roundValues = numbers.map(num => Math.round(num));
console.log("Round:", roundValues);  
// Output: [4, 8, 3, 10, -4]

// Random (Array of 5 random numbers between 1 and 10)
const randomValues = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
console.log("Random:", randomValues);
// Output: [random numbers]

// Max value
const maxValue = Math.max(...numbers);
console.log("Max:", maxValue);
// Output: 9.9
