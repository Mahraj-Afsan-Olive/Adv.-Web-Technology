const x=(x,y)=>x*y;

 console.log(x(2,3));

 const z=(x,y)=>{return x*y}

 console.log(z(4,3));

 const a=()=>"Hello World!"
 console.log(a());

 function myFunction(x=10, y = 10) {

    return x + y;
  }

console.log(myFunction());
console.log(myFunction(5,2));
console.log(myFunction(5));