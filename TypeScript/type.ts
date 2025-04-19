let age:number=30
console.log(age)
if(age>20)
{
    age=age+10
}
console.log(age)

let numbers:number[] =[3,4,5]
console.log(numbers)

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(car.type)
  console.log(car.model)
  console.log(car.year)

  interface Rectangle {
    height: number,
    width: number
  };
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  
  console.log(rectangle);

  let value:string|number
  value="Hello"
  console.log(value)
  value=32
  console.log(value)

  function multiply(a: number, b: number):number {
    return a * b;
  }
  
  console.log(multiply(2,5))

  function add<T>(value:T):T{
    return value
  }
  let num=add<number>(10)
  let str=add<string>("aaa")
  console.log(num,str)
