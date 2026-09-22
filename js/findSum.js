let findSum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(`
1,2,3,4,5  = ${findSum([1, 2, 3, 4, 5])}
[]         = ${findSum([])}
[5]        = ${findSum([5])}
[-1,2,-3]  = ${findSum([-1, 2, -3])}
[10,20,30] = ${findSum([10, 20, 30])}
`);
