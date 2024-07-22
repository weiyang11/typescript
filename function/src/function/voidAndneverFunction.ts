function writeToDatabase(data: string): void {
  console.log('write to database', data);
} // void, no return value just display write to database

function throwError(message: string): never {
  throw new Error(message);
} // never, never return a value. never complete any execution
