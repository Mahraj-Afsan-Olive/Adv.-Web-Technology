const a="Olive"
console.log(`Hello ${a}`);

const b=(name="Abd")=>`Hello ${name}`
console.log(b("Tawsif"));

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);