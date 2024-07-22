enum AgeUnit1 {
  Years = 'years',
  Months = 'months',
}

type GreetingFunction = (greeting: string) => string;

type Person1 = {
  name: string;
  age: number;
  ageUnit: AgeUnit1;
  //greet: Function
  greet: GreetingFunction
}

const person1: Person1 = {
  name: 'John',
  age: 30,
  ageUnit: AgeUnit1.Years,
  greet: (greeting) => {return `${greeting}, ${person1.name}`}
}

function convertAgeToMonths1(person1: Person1) :Person1 {
  if(person1.ageUnit === AgeUnit1.Years) {
    person1.age * 12;
    person1.ageUnit = AgeUnit1.Months;
  }
  return person1;
}

console.log(person1.greet('Hello')); // Hello, John
