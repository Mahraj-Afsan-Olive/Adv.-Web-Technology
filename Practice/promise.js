console.log("Start");
const prom=new Promise((resolve,reject)=>
{
    setTimeout(() => {
      let success=true
      if(success)
      {
        resolve("Done")
      }
      else{
        reject("Not Done")
      }
    }, 2000);
})
prom
.then((message)=>console.log(message))
.catch((error)=>console.log(error))

console.log("End")

console.log("")
//async
console.log("Start");
async function a()
{
    await new Promise((resolve)=>
        {
            setTimeout(() => {
              let sum=0
              for(i=0;i<100000000;i++)
              {
                sum+=i
              }
              console.log(sum)
              //resolve()
            }, 2000);
        })
}

a()
console.log("End")
