const str = 'Hello, world!';

const part1 = str.slice(7)
const part2 = str.slice(7, 10)

console.log(part1); // world!
console.log(part2); // wor

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
}


type Reserve = {
  (
  departureDate: Date,
  returnDate: Date,
  departingFrom: string,
  destination: string
): Reservation | never ;
( departureDate: Date, departingFrom: string, destination: string):
  |Reservation
  | never;
}; // Overloading function


const reserve : Reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination?:string): Reservation=> {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination,
    };
  } else if (typeof returnDateOrDepartingFrom === 'string') {
    return {
      departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination
    };
  }
  throw new Error('Invalid input!');
};

console.log(reserve(new Date(), new Date(), 'Mumbai', 'Delhi')); // { departureDate: 2021-07-25T05:30:00.000Z, returnDate: 2021-07-25T05:30:00.000Z, departingFrom: 'Mumbai', destination: 'Delhi' }
