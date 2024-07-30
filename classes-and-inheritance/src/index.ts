class Person2 {

  private testUsersAge(age: number){
    if(age < 0 || age> 200){
      throw new Error('The age is invalid');
    }
    return age;
  }

  constructor(private _name: string, private _age : number) {
    this.testUsersAge(_age);
    this._age = _age;
  }
  public set name(name: string){
    this._name = name;
  }

  public get name(){
    return this._name;
  }

  public set age(age: number){
    this.testUsersAge(age);
    this._age = age;
  }

  public get age(){
    return this._age;
  }
}

const person4: Person2 = new Person2('John', 32);

// person.age = 201; // Error: The age is invalid

person4.age = 30; // set the age

console.log(person4); // Person2 { name: 'John', _age: 30 }
