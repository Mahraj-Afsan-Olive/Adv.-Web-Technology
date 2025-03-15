const car=['BMW','Red','Dhaka']
//const [,suv,truck]=car
const [suv,,truck]=car
//const [suv,truck,,]=car
console.log(suv,truck);


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
 
 let { firstName, age } = person;
  console.log(firstName,age);

  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  let [fruit1,,,fruit4] = fruits;
  console.log(fruit1,fruit4);


