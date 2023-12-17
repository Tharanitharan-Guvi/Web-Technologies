# JavaScript

JavaScript is a versatile and widely-used programming language that plays a crucial role in web development. Created by Brendan Eich in 1995, JavaScript was initially designed to add interactivity and dynamic behavior to static web pages.

## Variables

Variables in JavaScript are used to store and manipulate data. You can declare variables using `var`, `let`, or `const`. The `let` and `const` keywords were introduced in ECMAScript 6 (ES6) and are recommended over `var` due to their block-scoping behavior.

### Example:

```javascript
// Variable declaration using var
var x = 5;

// Variable declaration using let (block-scoped)
let y = 10;

// Variable declaration using const (block-scoped, constant)
const z = 15;
```

## Console.log

The `console.log` method is used to log messages to the console, which is helpful for debugging and understanding the flow of your code.

### Example:

```javascript
console.log("Hello, World!");
console.log(x + y); // Outputs the sum of x and y
```

### Logical Operators

- and (&&)
- or (||)
- not (!)

## Conditional Statements

Conditional statements allow you to make decisions in your code based on specified conditions. The most common ones are `if`, `else if`, and `else`.

### Example 1:

```javascript
// Check whether a number is odd or even
let num = 19;

if (num % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd Number");
}
```

### Example 2:

```javascript
// Greetings based on the time
let time = 20;

if (time < 12) {
  console.log("Good Morning");
} else if (time < 15) {
  console.log("Good Afternoon");
} else if (time < 18) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
```

## Loops

Loops are used to repeatedly execute a block of code. Common types include `for`, `while`.

### Example on While Loop

```javascript
// print values from one to ten
let num = 1;

while (num <= 10) {
  console.log(num);
  // num = num + 1;
  // num += 1
  num++;
}

// Sum of n natural numbers

let n = 5;
let i = 1;
let sum = 0;

while (i <= n) {
  sum += i; // sum = sum + i;
  i++; // i = i + 1
}

console.log(sum);
```

### Example - For Loop

```javascript
// print values from one to ten
// for (declare; condition; inc/dec)
for (let n = 1; n <= 10; n++) {
  console.log(n);
}

// print all odd values from one to ten
for (let n = 1; n <= 10; n += 2) {
  // n = n + 2
  console.log(n);
}

// print values from ten to one
for (let n = 10; n >= 1; n--) {
  console.log(n);
}

// Sum of n natural numbers
let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);
```

## Functions

Functions allow you to group code into reusable blocks. They can take parameters and return values.

```javascript
// Sum of n natural numbers

function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let n = 10;

console.log(sumOfN(10));

// function expression

let sum = function (a, b) {
  return a + b;
};

console.log(sum(10, 20));
```
