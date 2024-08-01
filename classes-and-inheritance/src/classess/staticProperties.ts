class Automobile {
  public static color: string = 'red';

  public static calculateMileage(
    miles: number,
    litres: number
  )
  {
    return miles / litres;
  }
}

Automobile.color = 'blue'; //static properties can be changed directly

console.log(Automobile.calculateMileage(100, 10)); // 10
