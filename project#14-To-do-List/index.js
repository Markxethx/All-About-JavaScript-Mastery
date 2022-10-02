const addBtn = document.getElementById('add-btn');
const container = document.querySelector('.container');
const textContainer = document.querySelector('.text-container');

addBtn.addEventListener('click', () => {
    container.style.display = 'none';
    textContainer.style.display = 'flex';
});

const toDoText = document.querySelector('.to-do-text');
const toDoDone = document.querySelector('.to-do-done');
const toDo= document.querySelector('.to-do');


let toDoList = 0;

function listItem() {
    textValue = toDoText.value;
    if(textValue){
        container.style.display = 'flex';
        textContainer.style.display = 'none';
        let newItem = document.createElement('div');
        newItem.classList.add('to-do');
        newItem.innerHTML = 
        `
        <h4 class="need-to-do">${textValue}</h4>
        <span>
        <i id="logo" class="done-btn fa-solid fa-pen-to-square"></i>
        <i id="logo" class="delete-btn fa-solid fa-trash"></i>
        </span>
        `;
        container.appendChild(newItem);
        toDoText.value = "";
    } else {
        alert('Input your TO-DO list')
    }



};

toDoDone.addEventListener('click', () => {

    listItem();
});


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')){
        //e.target.classList.parentElement.remove();
        e.target.parentElement.parentElement.remove();
    };
});

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('done-btn')){
        console.log('fsdfsadfsda')
       e.target.parentElement.parentElement.classList.toggle('squash');
    }
})
// function doneBtn() {
//     const needToDo = document.querySelector('.need-to-do');
//     if (needToDo.classList.contains('squash')) {
//         needToDo.classList.remove('squash');
//     } else {
//         needToDo.classList.add('squash')
//     }
// };
