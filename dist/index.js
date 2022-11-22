
(function() {
    const form = document.getElementById("form")

    form.addEventListener("submit", function(e) {
        
            e.preventDefault()
        
            const payLoad = new FormData(form)
            // const payLoad = new URLSearchParams(prePayload);
            console.log([...payLoad])
        
            fetch('https://httpbin.org/post', {
                method: "POST",
                body: payLoad,
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(error))
        })
})()

// (function() {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', function(e) {
//     // Prevent default behavior
//     e.preventDefault();
//     // Create payload as new FormData object
//     const payload = new FormData(form);
//     // Post the payload using Fetch
//     fetch('https://httpbin.org/post', {
//     method: 'POST',
//     body: payload,
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     })
//     })()



















// function sendEmail(e) {
//     e.preventDefault()
//     console.log(document.getElementById("firstName").value)
//     console.log(document.getElementById("lastName").value)
//     console.log(document.getElementById("email").value)
//     console.log(document.getElementById("phone").value)
//     console.log(document.getElementById("occupation").value)
//     console.log(document.getElementById("message").value)
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "mamagrey01@gmail.com",
//         Password: "dodengdaga",
//         To: 'theblank.eth@gmail.com',
//         From: document.getElementById('email').value,
//         Subject: "New Form Inquiry",
//         Body: "Name: " + document.getElementById("firstName").value
//         + document.getElementById("lastName").value
//         + "<br/> Email: " + document.getElementById("email").value
//         + "<br/> Occupation: " + document.getElementById("occupation").value
//         + "<br /> Phone No: " + document.getElementById("phone").value
//         + "<br > Message: " + document.getElementById("message").value,

//     }).then(
//         message => alert("Message already Sent")
//     )
// }
// Email.send({
//     SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

