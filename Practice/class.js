class a{
    constructor(name)
    {
        this.name=name
    }
    sayHello()
    {
        setTimeout(()=>{console.log(this.name)},5000)
    }
}

const ab=new a("Olive");
console.log(ab.name);
ab.sayHello();


