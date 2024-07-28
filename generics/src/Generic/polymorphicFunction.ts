type Filter = {
  (array: number[], predicate: (item: number) => boolean): number[];
  (array: string[], predicate: (item: string) => boolean): string[];
  (array: object[], predicate: (item: object) => boolean): object[];
}


const filter = <T>(array: T[], predicate:(item: T) => boolean): T[] => {
  let result: T[] = [];
  for(let i = 0; i < array.length; i++){
    if(predicate(array[i])){
      result.push(array[i]);
    }
  }
  return result;
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function predicate(item: number): boolean{
  return item > 7;
}


let animals = ['dog', 'cat', 'lion', 'tiger', 'elephant'];

function filtercat (item: string): boolean{
  return item === 'cat';
}

console.log(filter(numbers, predicate)); //Output: [8, 9]

console.log(filter(animals, filtercat)); //Output: ['cat']
