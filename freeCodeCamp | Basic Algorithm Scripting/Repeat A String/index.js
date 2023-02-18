Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
For the purpose of this challenge, do not use the built-in .repeat() method

//solutions 1 (using for loop)
function repeatStringNumTimes(str, num) {
  var repeatedString = '';
  for (let i = 0; i < num; i ++) {
    repeatedString += str;
  }
  
  return repeatedString;

}

repeatStringNumTimes("abc", 3);

//solution using recursion
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}


//solution 3
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
