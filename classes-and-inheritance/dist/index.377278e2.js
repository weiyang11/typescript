class Person2 {
    constructor(name){
        this.name = name;
    // if(age < 0 || age> 200){
    //   throw new Error('The age is invalid');
    // }
    }
    getName() {
        return this.name;
    }
    set age(age) {
        if (age < 0 || age > 200) throw new Error("The age is invalid");
        this._age = age;
    }
}
const person4 = new Person2("John");
const person5 = new Person2("Maek");

//# sourceMappingURL=index.377278e2.js.map
