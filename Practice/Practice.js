class a{
    constructor(name)
    {
        this.name=name
    }

    sayHello()
    {
        setTimeout(()=>{console.log(this.name)},1000);
    }
}
const ab=new a("Olive")
ab.sayHello()