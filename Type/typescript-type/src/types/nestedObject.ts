type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeofDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
};


let airplane: Airplane = {
  model: 'Boeing 737',
  flightNumber: 'BA123',
  timeofDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: 'Caterer 1',
    address: '123 Main Street, London',
    phone: 1234567890
  }
}
