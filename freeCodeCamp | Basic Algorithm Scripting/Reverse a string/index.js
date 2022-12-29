Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

//solution
function reverseString(str) {
  console.log(str.split("").reverse().join())
  console.log(str.reverse())
  // return str.split("").reverse().join("");
}

reverseString("hello");
