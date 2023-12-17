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

let sum = function (a,b) {
    return a+b;
};

console.log(sum(10,20))