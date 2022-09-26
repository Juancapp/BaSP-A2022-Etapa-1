var formLogIn = document.getElementById('form-login')

// Input variables:
var inputEmail = document.getElementById('input-email');
var inputPassword = document.getElementById('input-password');
var inputs = document.querySelectorAll('input');

// Buttons variables:
var liHome = document.getElementById('li-home');
var liSignUp = document.getElementById('li-sign-up');
var liContact = document.getElementById('li-contact');

// Errors variables:
var textErrors = [
    'Must be an email',
    `Password is wrong`,
]

for (var i = 0; i < 2; i++) {
    var newP = document.createElement('p');
    var fieldset = inputs[i].parentElement;
    fieldset.appendChild(newP);
    newP.className = 'error-hidden';
    newP.id = 'p-error-' + i;
}

var pError0 = document.getElementById('p-error-0');
var pError1 = document.getElementById('p-error-1');

pError0.textContent = 'Must be an email'
pError1.textContent = 'Password is wrong'

// Validation helper functions:
function isValid(input, i) {
    input.nextElementSibling.classList = 'error-hidden'
    input.style.borderColor = '#373867';
    textErrors[i] = ''
    return true;
}

function isNotValid(input, i, errorText) {
    input.style.borderColor = 'red';
    input.nextElementSibling.classList = 'error'
    textErrors[i] = errorText;
    return false;
}

// Validation of each input:
function emailValidation() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailExpression.test(inputEmail.value)) return isNotValid(inputEmail, 0, 'Must be an email');
    if (emailExpression.test(inputEmail.value)) return isValid(inputEmail, 0);
}

function passwordValidation() {
    if (inputPassword.value.length < 8) return isNotValid(inputPassword, 1, 'Password is wrong')
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

    if (numbers == true && letters == true && specialCaracters == true) return isValid(inputPassword, 0)
    return isNotValid(inputPassword, 1, 'Password is wrong')
}

function whenFocus(e) {
    e.target.nextElementSibling.className = 'error-hidden'
    e.target.style.borderColor = '#373867';
}

// Buttons functions:
function buttonClick() {
    if (passwordValidation() == true && emailValidation() == true) {
        alert(`
        Email: ${inputEmail.value}
        Password: ${inputPassword.value}`);
    } else {
        var stringErrors = '';
        for (let i = 0; i < textErrors.length; i++) {
            if (textErrors[i] !== '') {
                stringErrors += '- ' + textErrors[i] + '\n';
            }
        }
        alert('Oops! Something is wrong.' + '\n' +  'Correct the following errors:' + '\n' + '\n' +stringErrors);
    }
}

function goHome() {
    window.location.href = '../views/index.html';
}

function goSignUp() {
    window.location.href = '../views/employee-signup.html';
}

function goLogIn() {
    window.location.href = '../views/login.html';
}

// Blur events:
inputEmail.addEventListener('blur', emailValidation);
inputPassword.addEventListener('blur', passwordValidation);

// Focus events:
inputEmail.addEventListener('focus', whenFocus);
inputPassword.addEventListener('focus', whenFocus);

// Click events:
formLogIn.addEventListener("submit", buttonClick)
liHome.addEventListener('click', goHome);
liSignUp.addEventListener('click', goSignUp);


