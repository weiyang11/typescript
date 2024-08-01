type Holidays = {
  date: Date;
  reason: string;
}[];


abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {

  }

  public addHoliday(holidays: Holidays) {
    if(Array.isArray(holidays)) {
      for(const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
}

// const department = new Department('Accounting'); // Error: Cannot create an instance of an abstract class.

class ItDepartment extends Department {
  constructor() {
    super('IT');
  }
  protected holidays: Holidays = [];
}


class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('Admin');
  }
}

const itHolidays = [
  { date: new Date('2021-01-01'), reason: 'IT Year' },
  { date: new Date('2021-01-26'), reason: 'Republic Day' }
];


const adminHolidays = [
  { date: new Date('2021-04-01'), reason: 'Admin Year' },
  { date: new Date('2021-01-26'), reason: 'Republic Day' }
];


const itDepartment:ItDepartment = new ItDepartment();
const adminDepartment:AdminDepartment = new AdminDepartment();

itDepartment.addHoliday(itHolidays);
adminDepartment.addHoliday(adminHolidays);

console.log(itDepartment); // ItDepartment { name: 'IT', holidays: [ { date: 2021-01-01T00:00:00.000Z, reason: 'IT Year' }, { date: 2021-01-26T00:00:00.000Z, reason: 'Republic Day' } ] }
