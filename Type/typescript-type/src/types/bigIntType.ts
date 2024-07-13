let bigInt1 = BigInt(10);

let bigInt2 = 12345n;


const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt); // 9007199254740991

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne); // 9007199254740992 (2power53) Max safe integer
console.log(safeIntPlusTwo); // 9007199254740992 (2power53) Max safe integer

let a: bigint = BigInt(123456789890);
let b: bigint = 12345567890n;
let c: bigint = a * b; // OK, over max safe integer

// let e: bigint = 1234.2n; // Error: Type '1234.2' is not assignable to type 'bigint'.

// let f = Math.log(a); // Error: Argument of type 'bigint' is not assignable to parameter of type 'number'.
