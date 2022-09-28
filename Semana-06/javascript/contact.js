// Form variable:
var formContact = document.getElementById('form-contact')

// Input variables:
var inputName = document.getElementById('input-name');
var inputEmail = document.getElementById('input-email');
var inputHumanResources = document.getElementById('input-human-resources');
var inputSystems = document.getElementById('input-systems');
var inputMarketing = document.getElementById('input-marketing');
var inputMessage = document.getElementById('input-message')
var divsForm = document.querySelectorAll('#form-contact > div');
var inputsRadio = document.querySelectorAll('input[type="radio"]');

// Buttons variables:
var liHome = document.getElementById('li-home');
var liSignUp = document.getElementById('li-sign-up');
var liLogIn = document.getElementById('li-log-in');
var liContact = document.getElementById('li-contact');
var btnSend = document.getElementById('btn-send')

// Errors variables:
for (var i = 0; i < 4; i++) {
    var newP = document.createElement('p');
    divsForm[i].appendChild(newP);
    newP.className = 'error-hidden';
    newP.id = 'p-error-' + i;
}

var pError0 = document.getElementById('p-error-0');
var pError1 = document.getElementById('p-error-1');
var pError2 = document.getElementById('p-error-2');
var pError3 = document.getElementById('p-error-3');

pError0.innerText = 'Name must contain at least 2 caracters'
pError1.innerText = 'Email error'
pError2.innerText = 'Checkbox error'
pError3.innerText = 'Message must be alphanumeric and greater than 3 characters'

var textAlertErrors = [
    pError0.textContent,
    pError1.textContent,
    pError2.textContent,
    pError3.textContent
]

// Validation helper functions:
function isLetterOrSpace(a) {
    var charCode = a.charCodeAt(a);
    return (((charCode > 64 && charCode < 91)) || (charCode > 96 && charCode < 123) ||
    (charCode > 191 && charCode < 256) || charCode == 32);
}

function isThisStringHasOnlyLetters(string) {
    for (var caracter of string) {
        if ((isLetterOrSpace(caracter) == false)) {
            return false;
        }
    }
    return true;
}

function isThisStringHasOnlyNumbersOrLetters(string) {
    for (var caracter of string) {
        if (!isNumberOrLetter(caracter)) return false;
    }
    return true;
}

function isNumberOrLetter(a) {
    return (isNumber(a) || isLetter(a));
}

function isNumber(caracter) {
    return !isNaN(parseInt(caracter));
}

function isLetter(a) {
    var charCode = a.charCodeAt(a);
    if(((charCode > 64 && charCode < 91)) || (charCode > 96 && charCode < 123) || charCode == 32) return true;
    return false;
}

function isValid(input, i) {
    document.getElementById(`p-error-${i}`).classList = 'error-hidden'
    input.style.borderColor = '#009400';
    textAlertErrors[i] = ''
    return true;
}

function isNotValid(input, i, errorText) {
    input.style.borderColor = 'red';
    document.getElementById(`p-error-${i}`).classList = 'error';
    textAlertErrors[i] = errorText;
    return false;
}

function whenFocusName(e) {
    pError0.className = 'error-hidden'
    e.target.style.borderColor = '#373867';
}

function whenFocusEmail(e) {
    pError1.className = 'error-hidden'
    e.target.style.borderColor = '#373867';
}

function whenFocusMessage(e) {
    pError3.className = 'error-hidden'
    e.target.style.borderColor = '#373867';
}

function lastNameAndNameValidations(input, i, errorText) {
    if (input.value.length > 1 && isThisStringHasOnlyLetters(input.value)) return isValid(input, i);
    return isNotValid(input, i, errorText);
}

// Inputs validations:
function nameValidation() {
    return lastNameAndNameValidations(inputName, 0, pError0.textContent);
}

function emailValidation() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!emailExpression.test(inputEmail.value)) return isNotValid(inputEmail, 1, pError1.textContent);
    if (emailExpression.test(inputEmail.value)) return isValid(inputEmail, 1);
}

function messageValidation() {
    if (inputMessage.value.length > 3 &&
        isThisStringHasOnlyNumbersOrLetters(inputMessage.value)) {
        return isValid(inputMessage, 3)
    }
    else return isNotValid(inputMessage, 3, pError3.textContent)
}

function goHome() {
    window.location.href = '#header-top';
}

function goSignUp() {
    window.location.href = '../views/employee-signup.html';
}

function goLogIn() {
    window.location.href = '../views/login.html';
}

inputName.addEventListener('blur', nameValidation);
inputEmail.addEventListener('blur', emailValidation);
inputMessage.addEventListener('blur', messageValidation)

inputName.addEventListener('focus', whenFocusName);
inputEmail.addEventListener('focus', whenFocusEmail);
inputMessage.addEventListener('focus', whenFocusMessage);

liHome.addEventListener('click', goHome);
liSignUp.addEventListener('click', goSignUp);
liLogIn.addEventListener('click', goLogIn);