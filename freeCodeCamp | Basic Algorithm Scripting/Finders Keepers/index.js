Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
This means that given an element x,
  the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
  
  //solutions
  function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

//other solution
function findElement(arr, func) {
  return arr.find(func);
}

//otehr solution
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

//using recursive
function findElement(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}
