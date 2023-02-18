Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.lenght > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

truncateString('a word by blue poeple is unknown', 8);
