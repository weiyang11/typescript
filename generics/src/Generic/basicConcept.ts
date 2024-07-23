function returnParams <Typ>(param: Typ): Typ{
  return param;
} //Type is a generic type that can be any type depends on the input


returnParams<string>('Hello World'); //Output: Hello World
returnParams<number>(1); //Output: 1
returnParams<boolean>(true); //Output: true

const myParam: <T>(param: T) => T =(param) => param ; //annotating the function type

const myParam2 = function <T>(param: T): T {
  return param;
} //function expression


type ObjectType = {
myParam: <T, X>(param: T, params:X) => T|X;
}

type MyParam = <K>(param: K) => K;
