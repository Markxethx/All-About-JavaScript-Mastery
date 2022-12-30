Return the length of the longest word in the provided sentence.

Your response should be a number.

//solutions
function findLongestWordLength(str) {
  let strSplit = str.split(' ');
  let longestWord = 0;
  for (let i=0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length
    }
  }
  console.log(longestWord)
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


//other solution
function findLongestWordLength(str) {
let longestLength = 0;
let currentLength = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    currentLength = 0;
  } else {
    currentLength++;
  }
}
if (currentLength > longestLength) {
  longestLength = currentLength;
}

return longestLength;
}

//other solution
function findLongestWordLength(s) {
  return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}

//other solution
function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
