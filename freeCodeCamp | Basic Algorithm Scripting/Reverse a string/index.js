Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

//solution
function reverseString(str) {
  console.log(str.split("").reverse().join())
  console.log(str.reverse())
  // return str.split("").reverse().join("");
}

reverseString("hello");

//other solution
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
