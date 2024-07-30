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
}

const person4: Person2 = new Person2('John');
const person5: Person2 = new Person2('Maek');
