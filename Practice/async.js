//sync
console.log("Start");
function a()
{
    let sum=0
    for(i=0;i<100000000;i++)
    {
        sum=sum+i
    }
    console.log(sum)
}
a()
console.log("End");

console.log("");
//async
console.log("Start");
function b()
{
    setTimeout(()=>{
        let sum=0
        for(i=0;i<100000000;i++)
        {
            sum=sum+i
        }
        console.log(sum)
    },2000)

}
b()
console.log("End");