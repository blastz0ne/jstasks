let arr = [31, 10, 'chicken', 9, 'fish', 10];
let stringArray = arr.filter(element => typeof element === 'string');
console.log(stringArray);
//массив с элементами, равными 10
let arr = [31, 10, 'chicken', 9, 'fish', 10];
let numberTenArray = arr.filter(element => element === 10);
console.log(numberTenArray);

