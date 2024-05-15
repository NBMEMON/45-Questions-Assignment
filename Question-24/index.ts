let ferrari ="ferrari"
let Uper_case_ferrari ="FERRARI"

// Equality Test 

console.log("\nIs ferrari eqauls to ferrai?")
console.log( ferrari == "ferrari")
// Inequality Test

console.log("\nIs ferrari not eqauls to ferrari?")
console.log(ferrari != "ferrari")
// lower case function

console.log("\nIs uppercase ferrari equals to ferrari?")
console.log(Uper_case_ferrari.toLowerCase() == ferrari)


let x = 2
let y = 5

console.log("\nIs x equals to 2?")
console.log(x == 2)

console.log("\nIs y not equals to 2?")
console.log(y != 2)

console.log("\nIs x greater than y?")
console.log(x>y)

console.log("\nIs x less than y?")
console.log(x<y)

console.log("\nIs y greater than y?")
console.log(x>y)

console.log("\nIs x less than  y?")
console.log(x<=y)

console.log("\nIs x is less than y and x equals to 2?")
console.log(x<y && x==2)

console.log("\nIs x is less than y and x equals to 2?")
console.log(x<y && x==3)

console.log("\nIs x is greater than 10 and is x equals to 2")
console.log(x>5 || x == 2)

console.log("\nIs x is greater than 10 and is x not equals to 2")
console.log(x>5 || x != 2)


let cars =["Ferrari","Pagani","BMW","Mercedes"];


console.log("is Pagani included in cars array")
console.log(cars.includes("Pagani"));

console.log("is Ferrari not included in cars array")
console.log(!cars.includes("Ferrari"));
