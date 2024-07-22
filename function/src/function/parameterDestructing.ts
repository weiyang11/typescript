type Numbers = {
  a: number;
  b: number;
  c: number;
};

let numbers: Numbers = {
  a: 1,
  b: 2,
  c: 3
};

function sum(numbers: Numbers){
  return numbers.a + numbers.b + numbers.c; // 6
}

function sum1({a, b, c}: Numbers){
  return a + b + c; // 6
}

console.log(sum1(numbers)); // 6
console.log(sum1({a: 3, b: 4, c: 5})); // 12
