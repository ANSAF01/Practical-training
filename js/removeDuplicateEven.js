// Remove duplicate even numbers from an array using filter()

function removeDuplicateEven(arr) {
  let result = arr.filter((value, index) => {
    return value % 2 === 0 && arr.indexOf(value) === index;
  });
  return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 6, 0, 4];
console.log(removeDuplicateEven(arr));

//or

// let arr =[1,2,3,4,5,6,7,8,9,10,2,6,0,4];
// let result = arr.filter(x=>x%2===0)

// console.log([...new Set(result)])
