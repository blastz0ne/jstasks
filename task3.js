let a = ["cat", "dog", "parrot", "horse"];
let index = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] === "parrot") {
    index = i;
    break;
  }
}

console.log(index);

// Второй вариант
//let a = ["cat", "dog", "parrot", "horse"];
//let index = a.indexOf("parrot");
//console.log(index);
