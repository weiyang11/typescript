enum AgeUnit {
  Years = 'years',
  Months = 'months',
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit
}

const person: Person = {
  name: 'John',
  age: 30,
  ageUnit: AgeUnit.Years
}

function convertAgeToMonths(person: Person) :Person {
  if(person.ageUnit === AgeUnit.Years) {
    person.age * 12;
    person.ageUnit = AgeUnit.Months;
  }
  return person;
}
