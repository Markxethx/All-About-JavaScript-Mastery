let quizData = [
    {
        question: 'How many dogs you have?',
        a : 'Five',
        b : 'Four',
        c :'Eleven',
        d : "i don't have a dog",
        correct : 'c',
    },
    {
        question: 'What do you prefer when you are tired?',
        a : 'Smoking',
        b : 'Sleep',
        c :'Walk',
        d : "Eat",
        correct : 'c',
    },
    {
        question: 'What do you want to be?',
        a : 'Engineer',
        b : 'Scientist',
        c :'Mathematician',
        d : "Simple man",
        correct : 'a',      
    },
    {
        question: 'Status',
        a : 'Single',
        b : 'Married',
        c :'Have child',
        d : "Student",
        correct : 'a',
    },
    {
        question: 'What my name?',
        a : 'Eric',
        b : 'Mark',
        c :'John',
        d : "The Blank.eth",
        correct : 'b',
    },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    notSelected();
    const quizItem = quizData[currentQuiz];

    questionEl.innerHTML = quizItem.question;
    a_text.textContent = quizItem.a;
    b_text.textContent = quizItem.b;
    c_text.textContent = quizItem.c;
    d_text.textContent = quizItem.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
       if(answerEl.checked){
        answer = answerEl.id
       }
    });
    return answer
}

function notSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}
submitBtn.addEventListener('click', function() {
    const answer = getSelected();

    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else { quiz.innerHTML =
            `<h2>Your score was ${score}/${quizData.length} congrats</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
});
