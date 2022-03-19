var nameElem = document.getElementById('name');
var password = document.getElementById('password');
var form = document.getElementById('form');
var error = document.getElementById('error');

form.addEventListener('submit', (event) => {
    var message = [];

    if(nameElem.value === "" || nameElem.value == null) {
        message.push('Please enter your name');
    }
    if(password.value.length <= 7) {
        message.push('please enter a password 8 digit or longer');
    }
    if(password.value.length >= 12){
        message.push("Please enter your password 12 digit or less")
    }
    if(message.length > 0) {
        event.preventDefault();
        error.innerText= message.join(', ')
    }
})