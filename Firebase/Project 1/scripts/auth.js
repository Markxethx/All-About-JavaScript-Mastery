// sign up

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const auth = firebase.auth();

    //signup the user
    auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log(cred)
    })

})