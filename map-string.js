const numbers = [12, 14, 16, 87 ,54];
const half = numbers.map(n => n/2);
const third = numbers.map(n => n/3);
const double = numbers.map(n => n*2);
const add = numbers.map(n => n+2);
const minimiza = numbers.map(n => n-2);
console.log(half);
console.log(third);
console.log(double);
console.log(add);
console.log(minimiza);



const friends = ['tom tom', 'som', 'kom', 'liti', 'miki']
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter)

const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);



const product = [
    {id:3001, name:'phn', price:40000},
    {id:3001, name:'phn1', price:50000},
    {id:3001, name:'phn2', price:60000},
    {id:3001, name:'phn3', price:70000},

]

const items = product.map(product => product.name);
console.log(items)
const price = product.map(product => product.price );
console.log(price);