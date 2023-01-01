Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, 
  which was introduced in ES2015. But for the purpose of this challenge,
    we would like you to use one of the JavaScript substring methods instead.

    //solutions
    function confirmEnding(str, target) {
  console.log(str.length)
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

//other solution
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));

//other solution
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");
