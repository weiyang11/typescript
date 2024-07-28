type Events = {
  id: number;
  date: Date;
  type: "indoors" | "outdoors";
};


type UnionOfKeysOfEvents = keyof Events; // 'id' | 'date' | 'type'

let idOfEvents: UnionOfKeysOfEvents = 'id';

let dateOfEvents: UnionOfKeysOfEvents = 'date';

let typeOfEvents: UnionOfKeysOfEvents = 'type';


//Index signature
type Numeric = {
  [key: number]: string;
};

type NumericKeyof = keyof Numeric; // 'number'

let numericKey: NumericKeyof = 1;

type NumberAndString = {
  [key: string]: string;
}

type NumberAndStringKeyof = keyof NumberAndString; // 'string' | 'number', javascript will convert the number to string

let stringObject: NumberAndString= {
  0: 'a',
  second: "second"
}

console.log(stringObject['0']); //Output: a

type Person = {
  name: string;
  age: string;
  address: string;
}

type PartialPerson = {
  [K in keyof Person]?: Person[K] | null;
}


let partialPerson: PartialPerson = {
  name: 'John Doe',
};
