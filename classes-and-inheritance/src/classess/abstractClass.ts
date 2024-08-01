type Holidays = {
  date: Date;
  reason: string;
}[];


abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {
    this.name = name;
  }
}

// const department = new Department('Accounting'); // Error: Cannot create an instance of an abstract class.

class ItDepartment extends Department {
  protected holidays: Holidays = [];
}


class AdminDepartment extends Department {
  protected holidays: Holidays = [];
}
