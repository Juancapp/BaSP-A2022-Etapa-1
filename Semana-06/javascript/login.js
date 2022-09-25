
var inputEmail = document.getElementById('input-email');
var inputPassword = document.getElementById('input-password');
var inputs = document.querySelectorAll('input');
var button = document.getElementById('button-submit');

var liHome = document.getElementById('li-home');
var liSignUp = document.getElementById('li-sign-up')
var liContact = document.getElementById('li-contact')

var textErrors = [
    'Must be an email',
    `Password is wrong`,
]

for (var i = 0; i < 2; i++) {
    var newP = document.createElement('p');
    var fieldset = inputs[i].parentElement;
    fieldset.appendChild(newP);
    newP.className = 'error';
    newP.id = 'pError-' + i;
}

function isValid(input, p) {
    p.innerText = ' ';
    input.style.borderColor = '#373867';
}

function isNotValid(input, p, errorText) {
    input.style.borderColor = 'red'
    p.innerText = errorText;
}

function emailValidation() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var newPForThisValidation = document.getElementById('pError-0');

    if (!emailExpression.test(inputEmail.value)) {
        isNotValid(inputEmail, newPForThisValidation, 'Must be an email')
        textErrors[0] = 'Must be an email'
        return false
    }
    if (emailExpression.test(inputEmail.value)) {
        isValid(inputEmail, newPForThisValidation)
        textErrors[0] = ''
        return true
    }
}


function passwordValidation() {
    var newPForThisValidation = document.getElementById('pError-1');
    if (inputPassword.value.length < 8) {
        isNotValid(inputPassword, newPForThisValidation, 'Password is wrong')
        textErrors[1] = 'Password is wrong';
        return false;
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
        isValid(inputPassword, newPForThisValidation)
        textErrors[0] = ''
        return true
    }
    else {
        inputPassword.style.borderColor = 'red'
        isNotValid(inputPassword, newPForThisValidation, 'Password is wrong')
        textErrors[1] = 'Password is wrong';
        return false
    }
}

function whenFocus(e) {
    var newPForThisValidation = e.target.nextElementSibling;
    newPForThisValidation.innerText = ''
    e.target.style.borderColor = '#373867'
}

function buttonClick() {
    if (passwordValidation() == true && emailValidation() == true) {
        alert(`
        Email: ${inputEmail.value}
        Password: ${inputPassword.value}`)
    } else {
        var stringErrors = '';
        for (let i = 0; i < textErrors.length; i++) {
            if (textErrors[i] !== '') {
                stringErrors += '- ' + textErrors[i] + '\n'
            }
        }
        alert('Oops! Something is wrong.' + '\n' +  'Correct the following errors:' + '\n' + '\n' +stringErrors);
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

button.addEventListener('click', buttonClick)
liHome.addEventListener('click', goHome)
liSignUp.addEventListener('click', goSignUp)


