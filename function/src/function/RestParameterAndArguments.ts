function multiplyBy(by: number, ...numbers: number[]): number[] {
  return numbers.map(num => num * by);
}

console.log(multiplyBy(2, 1, 2, 3, 4, 5)); // [ 2, 4, 6, 8, 10 ]

const args = [8,5];

console.log(multiplyBy(2, ...args)); // [ 16, 10 ]

const angle = Math.atan2(args[1], args[0]);

const args1 = [8,5] as const;

const angle1 = Math.atan2(...args1);

const args2: [number, number] = [8,5]; // Tuple

const angle2 = Math.atan2(...args2);
