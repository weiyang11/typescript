class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(name: string, email: string, age: number, usersReporting: number) {
    super(name, email, age);
    this.usersReporting = 0;
  }
}

const user :User = new User('John', 'john@gamil.com', 30);

const admin :AdminUser = new AdminUser('Mark', 'mark@gamil.com', 30, 0);

console.log(user);
console.log(admin);
