// Reverse 1–10 using generator functions

function* reverseGenerator(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    yield arr[i];
  }
}
let gen = reverseGenerator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
