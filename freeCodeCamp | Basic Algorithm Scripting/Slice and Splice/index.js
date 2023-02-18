You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

//solutions
function frankenSplice(arr1, arr2, n) {
  var newArray = arr2.slice();
  newArray.splice(n, 0, ...arr1)
  return newArray
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//other solutions
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

//other solutions
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
