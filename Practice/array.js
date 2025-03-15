const a=[3,4,6]

const d=a.map(c=>c*2)
console.log(d);

const e=a.filter(c=>c%2==0)
console.log(e);

const b = a.slice(0, 2);
console.log(b);

const f = a.concat([7, 8, 9]);
console.log(f);

a.push(10);
console.log(a);

const g = a.join('-');
console.log(g);

const x=[5,2,3]

const h = x.reduce((acc, curr) => acc + curr, 0);
console.log(h);

const max = x.reduce((acc, curr) => (curr > acc ? curr : acc), a[0]);
console.log(max);