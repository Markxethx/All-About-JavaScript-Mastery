//create a fucntion that accepts string, and only capitalie every other letter

const acceptStrings = [];
console.log(acceptStrings)
function addString(word) {
    acceptStrings.push(word);
    for (let i = 0; i < word.length - 1; i++) {
        console.log(word.split(i).charAt().toUpperCase(i))
    }
}

addString("word2 is my lover");
addString("lover is being sad");
addString("akotoe sad boi lang");
addString("merry christmas");


