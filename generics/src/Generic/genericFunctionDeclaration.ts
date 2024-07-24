type GetFirstElement =<T> (arr: T[]) => T;


const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
}


console.log(getFirstElement([1,2,3])); //Output: 1

const numbersArray: number[] = [1,2,3,4,5];
const stringsArray: string[] = ['Hello', 'World'];

let numberOutput = getFirstElement(numbersArray);
let stringOutput = getFirstElement(stringsArray);

console.log(numberOutput); //Output: 1
console.log(stringOutput); //Output: Hello


type FirstElement<T> = (arr: T[]) => T;

const firstElement: FirstElement<number> = (arr) => {
  return arr[0];
}


firstElement([1,2,3]); //Output: 1
