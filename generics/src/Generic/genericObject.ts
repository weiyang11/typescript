type KeyValuePair <K, V> = {
  key: K;
  value: V;
};

let stringNumberPair: KeyValuePair<string, number> = {
  key: 'age',
  value: 40,
};

let numberArrayPair: KeyValuePair<number, string[]> ={
  key: 25,
  value: ['age', 'name'],
};


type HasId = {
  id: number;
};

function printId<T extends HasId> (obj: T): void{
  console.log(obj.id);
}

const user = {
  id: 1,
  name: 'John Doe',
};

printId(user); //Output: 1

const product ={
  name: 'sop'
}

// printId(product); //Error: Argument of type '{ name: string; }' is not assignable to parameter of type 'HasId'.
