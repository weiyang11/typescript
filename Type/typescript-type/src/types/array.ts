let s : number[] = [1, 2, 3];

let q : Array<string> = ["a", "b", "c"];

let v : (string|number)[] = [1, "a"];

type Airplane2 = {
  fightNumber: string;
  airPlaneModel: string;
  dateofDeparture: string;
  timeofDeparture: string;
  from : string;
  to : string;
  seats : {
    [key:string]: string;
  };
};

type Airplanes = Airplane2[];

const airplanes : Airplanes = [
  {
  fightNumber: '23',
  airPlaneModel: 'Boeing 777',
  dateofDeparture: '2021-12-12',
  timeofDeparture: '12:00',
  from : 'LAX',
  to : 'JFK',
  seats: {
    '10A' : "John",
    '10B' : "Doe"
  }
  },
  {
    fightNumber: '23',
    airPlaneModel: 'Boeing 777',
    dateofDeparture: '2021-12-12',
    timeofDeparture: '12:00',
    from : 'LAX',
    to : 'JFK',
    seats: {
      '10A' : "John",
      '10B' : "Doe"
    }
    }
];
