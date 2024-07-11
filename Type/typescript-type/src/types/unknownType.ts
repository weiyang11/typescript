function multiByTo(num: unknown){
  if (typeof num === "number") {
  return num * 2;
  }
  return "please provide a number";
}

console.log(multiByTo(4));
console.log(multiByTo("john"));
