type HasLength = {
  length: number;
};

const numbersArray1: number[] = [1,2,3,4,5];
const stringsArray1: string[] = ['Hello', 'World'];

function loLength<T extends HasLength>(item: T): void {
  console.log(item.length);
};

loLength(numbersArray1); //Output: 5
loLength(stringsArray1); //Output: 2

loLength({name:'John', length: 6}); //Output: 6
