let countMinus = document.getElementById("count")
let countAdd = document.getElementById("count")
let countSave = document.getElementById("count")
count = 0

function increment() {
    count += 1;
    countAdd.textContent = count;
    document.body.style.color = "blue";
}

function decrement() {
    count -= 1;
    countMinus.textContent = count;
    document.body.style.color = "red" ;
}
function save() {
    count = 0
    countSave.textContent = count
    document.body.style.color = "#00afb9";
}