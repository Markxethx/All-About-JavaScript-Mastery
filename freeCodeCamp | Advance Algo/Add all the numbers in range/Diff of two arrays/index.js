Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

//solutions

function diffArray(arr1, arr2) {
  const newArr = [];
  var enough = 0;
  if (arr1.length < arr2.length) {
    enough = arr1.length;
  } else {
    enough = arr2.length;
  }

  for (let i =0; i < enough; i++) {
    if ()
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
