Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

//solutions
// function factorialize(num) {
//   let nums = 1;
//   for (let i = 2; i <= num; i ++) {
//     nums *= i;
//   console.log(nums)
//   }
//   return nums;
// }

// factorialize(5);

//other solution
// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }

// factorialize(5);

//other solution
// function factorialize(num, factorial = 1) {
//   if (num === 0) {
//     return factorial;
//   } else {
//     return factorialize(num - 1, factorial * num);
//   }
// }

// factorialize(5);

//other solution
function factorialize(num) {
  return num < 0 ? 1 :
    new Array(num)
      .fill(undefined)
      .reduce((product, _, index) => product * (index + 1), 1);
}
factorialize(5);
