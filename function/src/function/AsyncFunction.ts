//return as promise

async function fetchFromDatabase(id: number) : Promise<any> {
}


const anotherAsyncFunction = async (): Promise<any> => {
};

async function returnString(id: number): Promise<string> {
  return Promise.resolve('Hello');
}


type User = {
  name: string;
  age: number;
}

async function returnUser(id: number): Promise<User> {
  return Promise.resolve({ name: 'John', age: 30 });
}

console.log(returnUser(1)); // Promise { { name: 'John', age: 30 } }
