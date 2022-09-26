var formSignUp = document.getElementById('form-sign-up');

// Input variables:
var inputName = document.getElementById('input-name');
var inputLastName = document.getElementById('input-last-name');
var inputDNI = document.getElementById('input-dni');
var inputBirthday = document.getElementById('input-birthday');
var inputPhone = document.getElementById('input-phone');
var inputResidence = document.getElementById('input-residence');
var inputLocation = document.getElementById('input-location');
var inputPostalCode = document.getElementById('input-postal-code');
var inputEmail = document.getElementById('input-email');
var inputPassword = document.getElementById('input-password');
var inputRepeat = document.getElementById('input-repeat-password');
var inputs = document.querySelectorAll('#form-sign-up input');

// Buttons variables:
var liHome = document.getElementById('li-home');
var liSignUp = document.getElementById('li-sign-up');
var liLogIn = document.getElementById('li-log-in');
var liContact = document.getElementById('li-contact');

// Errors variables:
for (var i = 0; i < 11; i++) {
    var newP = document.createElement('p');
    var fieldset = inputs[i].parentElement;
    fieldset.appendChild(newP);
    newP.className = 'error';
    newP.id = 'pError-' + i;
}

var textErrors = [
    'Name must contain at least 3 caracters',
    'Last name must contain at least 3 caracters',
    'Dni must be numeric and greater than 7',
    'This is not a valid birthday format',
    'Phone must contain 10 numbers',
    'Enter a valid residence',
    'Enter a valid location',
    'Must contain 4 to 5 numbers',
    'Must be an email',
    `Password must contain at least 8 caracters and numbers`,
    `Password don't match`,
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

function isNumber(caracter) {
    var numberCaracter = parseInt(caracter);
    return !isNaN(numberCaracter);
}

function isThisStringHasOnlyNumbers(string) {
    for (var caracter of string) {
        if (!isNumber(caracter)) {
            return false;
        }
    }
    return true;
}

function isNumberOrLetter(a) {
    return (isNumber(a) || isLetter(a));
}

function isLetter(a) {
    var charCode = a.charCodeAt(a);
    if(((charCode > 64 && charCode < 91)) || (charCode > 96 && charCode < 123) || charCode == 32) return true;
    return false;
}

function isThisStringHasOnlyNumbersOrLetters(string) {
    for (var caracter of string) {
        if (!isNumberOrLetter(caracter)) return false;
    }
    return true;
}

function letterCounter(string) {
    var letters = 0;
    for (var caracter of string) {
        if (isLetterOrSpace(caracter)) letters++;
    }
    return letters;
}

function isValid(input, i) {
    input.nextElementSibling.innerText = ' ';
    input.style.borderColor = '#373867';
    textErrors[i] = '';
    return true;
}

function isNotValid(input, i, errorText) {
    input.style.borderColor = 'red'
    input.nextElementSibling.innerText = errorText;
    textErrors[i] = errorText;
    return false;
}

function lastNameAndNameValidations(input, i, errorText) {
    if (input.value.length > 2 && isThisStringHasOnlyLetters(input.value)) return isValid(input, i);
    return isNotValid(input, i, errorText);
}

// Validation of each input:
function nameValidation() {
    return lastNameAndNameValidations(inputName, 0, 'Name must contain at least 3 caracters');
}

function lastNameValidation() {
    return lastNameAndNameValidations(inputLastName, 1, 'Last name must contain at least 3 caracters');
}

function DNIValidation() {
    if (inputDNI.value.length >= 7 && isThisStringHasOnlyNumbers(inputDNI.value)) return isValid(inputDNI, 2);
    return isNotValid(inputDNI, 2, 'Dni must be numeric and greater than 7');
}

function birdthdayValidation() {
    let isValidDate = Date.parse(inputBirthday.value);
    if (isNaN(isValidDate)) return isNotValid(inputBirthday, 3, 'This is not a valid birthday format');
    return isValid(inputBirthday, 3);
}

function PhoneValidation() {
    if (inputPhone.value.length === 10 && isThisStringHasOnlyNumbers(inputPhone.value)) return isValid(inputPhone, 4);
    isNotValid(inputPhone, 4, 'Phone must contain 10 numbers');
}

function residenceValidation() {
    var stringFirstPart = inputResidence.value.substring(0, inputResidence.value.indexOf(' '));
    var stringSecondPart = inputResidence.value.substring(inputResidence.value.indexOf(' ') +
        1, inputResidence.value.length);

    if (inputResidence.value.length >= 5 && isThisStringHasOnlyLetters(stringFirstPart)
    && isThisStringHasOnlyNumbers(stringSecondPart)) return isValid(inputResidence, 5)
    return isNotValid(inputResidence, 5, 'Enter a valid residence');
}

function locationValidation() {
    if (isThisStringHasOnlyNumbersOrLetters(inputLocation.value)
    && letterCounter(inputLocation.value) > 3) return isValid(inputLocation, 6);
    return isNotValid(inputLocation, 6, 'Enter a valid location');
}

function postalCodeValidation() {
    if ((inputPostalCode.value.length == 4 || inputPostalCode.value.length == 5)
    && isThisStringHasOnlyNumbers(inputPostalCode.value)) return isValid(inputPostalCode, 7);
    return isNotValid(inputPostalCode, 7, 'Must contain 4 to 5 numbers');
}

function emailValidation() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!emailExpression.test(inputEmail.value)) return isNotValid(inputEmail, 8, 'Must be an email');
    if (emailExpression.test(inputEmail.value)) return isValid(inputEmail, 8);
}

function passwordValidation() {
    if (inputPassword.value.length < 8) return isNotValid(inputPassword, 9, 'Must contain numbers and letters and at least 8 characters');
    var numbers = false;
    var letters = false;
    var specialCaracters = true;

    for (var i = 0; i < inputPassword.value.length; i++) {
        var element = inputPassword.value[i];
        var charCode = element.charCodeAt(i);
        parseElement = parseInt(element)
        if (isNaN(parseElement)) letters = true;
        else if (!isNaN(parseElement)) numbers = true;
        else if (charCode > 32 && charCode < 48) specialCaracters = false;
    }

    if (numbers == true && letters == true && specialCaracters == true) return isValid(inputPassword, 9);
    return isNotValid(inputPassword, 9, 'Must contain numbers and letters and at least 8 characters');
}

function repeatPasswordValidation() {
    if (inputRepeat.value === inputPassword.value) return isValid(inputRepeat, 10);
    return isNotValid(inputRepeat, 10, `Password don't match`);
}

function whenFocus(e) {
    e.target.nextElementSibling.innerText = '';
    e.target.style.borderColor = '#373867';
}

// Buttons functions:
function buttonClick() {
    if (nameValidation() === true && lastNameValidation() === true && DNIValidation() === true && PhoneValidation() === true && residenceValidation() === true &&
        locationValidation() === true && postalCodeValidation() === true && emailValidation() === true && passwordValidation() === true &&
        repeatPasswordValidation() === true) {
        alert(`
        Name: ${inputName.value}
        Last Name: ${inputLastName.value}
        DNI: ${inputDNI.value}
        Birthday: ${inputBirthday.value}
        Phone: ${inputPhone.value}
        Residence: ${inputResidence.value}
        Location: ${inputLocation.value}
        Postal Code: ${inputPostalCode.value}
        Email: ${inputEmail.value}
        Password: ${inputPassword.value}`)
    } else {
        var stringErrors = '';
        for (let i = 0; i < textErrors.length; i++) {
            if (textErrors[i] != '') {
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
inputName.addEventListener('blur', nameValidation);
inputLastName.addEventListener('blur', lastNameValidation);
inputEmail.addEventListener('blur', emailValidation);
inputPassword.addEventListener('blur', passwordValidation);
inputRepeat.addEventListener('blur', repeatPasswordValidation);
inputDNI.addEventListener('blur', DNIValidation);
inputPhone.addEventListener('blur', PhoneValidation);
inputPostalCode.addEventListener('blur', postalCodeValidation);
inputResidence.addEventListener('blur', residenceValidation);
inputLocation.addEventListener('blur', locationValidation);
inputBirthday.addEventListener('blur', birdthdayValidation);

// Focus events:
inputName.addEventListener('focus', whenFocus);
inputLastName.addEventListener('focus', whenFocus);
inputEmail.addEventListener('focus', whenFocus);
inputPassword.addEventListener('focus', whenFocus);
inputRepeat.addEventListener('focus', whenFocus);
inputDNI.addEventListener('focus', whenFocus);
inputPhone.addEventListener('focus', whenFocus);
inputPostalCode.addEventListener('focus', whenFocus);
inputResidence.addEventListener('focus', whenFocus);
inputLocation.addEventListener('focus', whenFocus);
inputBirthday.addEventListener('focus', whenFocus);

// Click events:
formSignUp.addEventListener('submit', buttonClick);
liHome.addEventListener('click', goHome);
liSignUp.addEventListener('click', goSignUp);
liLogIn.addEventListener('click', goLogIn);
