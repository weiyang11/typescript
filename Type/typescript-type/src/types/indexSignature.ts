type Airplane1 = {
  fightNumber: string;
  airPlaneModel: string;
  dateofDeparture: string;
  timeofDeparture: string;
  from : string;
  to : string;
  seats : {
    [key:string]: string;
  };
}

let airPlane : Airplane1 = {
  fightNumber: '123',
  airPlaneModel: 'Boeing 777',
  dateofDeparture: '2021-12-12',
  timeofDeparture: '12:00',
  from : 'LAX',
  to : 'JFK',
  seats: {
    '10A' : "John",
    '10B' : "Doe"
    // 1: 'Jane' // Error: An index signature parameter type must be 'string' or 'number'.
  }
}
