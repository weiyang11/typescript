class Person2 {
  private _age: number | undefined;

  constructor(private name: string) {
    // if(age < 0 || age> 200){
    //   throw new Error('The age is invalid');
    // }
  }

  public getName(){
    return this.name;
  }

  public set age(age: number){
    if(age < 0 || age> 200){
      throw new Error('The age is invalid');
    }
    this._age = age;
  }

  public get age(){
    if(this._age == undefined){
      throw new Error('The age is not set yet');
    }
    return this._age;
  }
}

const person4: Person2 = new Person2('John');

person4.age = 30; // set the age

console.log(person4); // Person2 { name: 'John', _age: 30 }

const mark: Person2 = new Person2('Mark');

console.log(mark.age); // Error: The age is not set yet
