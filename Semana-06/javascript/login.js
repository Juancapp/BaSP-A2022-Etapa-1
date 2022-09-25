
var inputEmail = document.getElementById('input-email');
var inputPassword = document.getElementById('input-password');
var inputs = document.querySelectorAll('input');
var button = document.getElementById('button-submit');

var liHome = document.getElementById('li-home');
var liSignUp = document.getElementById('li-sign-up')
var liContact = document.getElementById('li-contact')

for (var i = 0; i < 2; i++) {
    var newP = document.createElement('p');
    var fieldset = inputs[i].parentElement;
    fieldset.appendChild(newP);
    newP.className = 'error';
    newP.id = 'pError-' + i;
}

function emailValidation() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var newPForThisValidation = document.getElementById('pError-0');

    if (!emailExpression.test(inputEmail.value)) {
        newPForThisValidation.innerText = 'Must be an email';
        inputEmail.style.borderColor = 'red'
    }
    if (emailExpression.test(inputEmail.value)) {
        newPForThisValidation.innerText = ' ';
        return true
    }
}

function passwordValidation() {
    var newPForThisValidation = document.getElementById('pError-1');
    if (inputPassword.value.length < 8) {
        inputPassword.style.borderColor = 'red'
        return newPForThisValidation.innerText = 'Password must contain at least 8 caracters and numbers'
    }
    var numbers = false
    var letters = false
    var specialCaracters = true;

    for (var i = 0; i < inputPassword.value.length; i++) {
        var element = inputPassword.value[i];
        var charCode = element.charCodeAt(i)
        parseElement = parseInt(element)
        if (isNaN(parseElement)) letters = true;
        else if (!isNaN(parseElement)) numbers = true;
        else if (charCode > 32 && charCode < 48) specialCaracters = false;
    }

    if (numbers == true && letters == true && specialCaracters == true) {
        newPForThisValidation.innerText = ' ';
        inputPassword.style.borderColor = '#373867'
        return true
    }
    else {
        inputPassword.style.borderColor = 'red'
        return newPForThisValidation.innerText = 'Password must contain at least 8 caracters and numbers'
    }
}

function whenFocus(e) {
    var newPForThisValidation = e.target.nextElementSibling;
    newPForThisValidation.innerText = ''
    e.target.style.borderColor = '#373867'
}

function isSubmit() {
    if (passwordValidation() == emailValidation() !== true) return alert ('something is wrong');
    else {
        for (var i = 0; i < 2; i++) {
            var input = inputs[i];
            input.value = ''
        }
    }
}

function goHome() {
    window.location.href = '../views/index.html'
}

function goSignUp() {
    window.location.href = '../views/employee-signup.html'
}

function goLogIn() {
    window.location.href = '../views/login.html'
}

inputEmail.addEventListener('blur', emailValidation);
inputPassword.addEventListener('blur', passwordValidation);

inputEmail.addEventListener('focus', whenFocus);
inputPassword.addEventListener('focus', whenFocus);


button.addEventListener('click', isSubmit)
liHome.addEventListener('click', goHome)
liSignUp.addEventListener('click', goSignUp)


