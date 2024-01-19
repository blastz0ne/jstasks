let a = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
let indexOfFish = a.indexOf('fish');
a.splice(indexOfFish, 1);
let indexOfCat = a.indexOf('cat');
a.splice(indexOfCat, 1);
a.splice(-2);
console.log(a);