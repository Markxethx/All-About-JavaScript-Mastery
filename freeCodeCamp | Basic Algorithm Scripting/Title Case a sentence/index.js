Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

//solutions
function titleCase(str) {
  var newStr = str.split((' '))
  var arrayStr = [];
  newStr.map(item => {
    arrayStr.push(item.charAt(0).toUpperCase() + item.slice(1, item.length).toLowerCase());
  })
  return arrayStr.join((' '))
}

titleCase("I'm a little tea pot bEcause i liKe YoU");

//other solutions
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

//solutions
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("I'm a little tea pot");

//solutions
function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
