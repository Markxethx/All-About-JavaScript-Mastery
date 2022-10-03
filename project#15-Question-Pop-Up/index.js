
// const btns = document.querySelectorAll('.question-btn')

// // question.addEventListener('click', function(e) {
// //     if (e.target.classList.contains('fa-plus-square')){
// //         e.target.parentElement.parentElement.parentElement.classList.add('show-text');
// //         console.log('jejj')
// //     }
// // });
// btns.forEach(function(btn){
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     });
// });


// minusIcon.addEventListener('click', () => {
//     questionText.style.display = 'none'; 
//     plusIcon.style.display = 'inline';
//     minusIcon.style.display = 'none';
// })

//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        questions.forEach(function (item){
            if (item !== question) {
                item.classList.remove('show-text')
            }   
        });
        question.classList.toggle('show-text')
    })
})