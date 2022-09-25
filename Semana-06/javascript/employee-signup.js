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
var inputRepeat = document.getElementById('input-repeat-password')
var inputs = document.querySelectorAll('input');

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

// Buttons variables:
var button = document.getElementById('button-submit');
var liHome = document.getElementById('li-home');
var liSignUp = document.getElementById('li-sign-up')
var liLogIn = document.getElementById('li-log-in')
var liContact = document.getElementById('li-contact')

// Error paragraph maker:
for (var i = 0; i < 11; i++) {
    var newP = document.createElement('p');
    var fieldset = inputs[i].parentElement;
    fieldset.appendChild(newP);
    newP.className = 'error';
    newP.id = 'pError-' + i;
}

// Validation helper functions:
function isLetterOrSpace(a) {
    var charCode = a.charCodeAt(a)
    if(((charCode > 64 && charCode < 91)) || (charCode > 96 && charCode < 123) || (charCode > 191 && charCode < 256) || charCode == 32) return true
    return false
}

function isThisStringHasOnlyLetters(string) {
    for (var caracter of string) {
        if ((isLetterOrSpace(caracter) == false)) {
            return false
        }
    }
    return true
}

function isNumber(caracter) {
    var numberCaracter = parseInt(caracter)
    if (!isNaN(numberCaracter)) return true
    return false
}

function isThisStringHasOnlyNumbers(string) {
    for (var caracter of string) {
        if (!isNumber(caracter)) {
            return false
        }
    }
    return true
}

function isNumberOrLetter(a) {
    return (isNumber(a) || isLetter(a))
}

function isLetter(a) {
    var charCode = a.charCodeAt(a)
    if(((charCode > 64 && charCode < 91)) || (charCode > 96 && charCode < 123) || charCode == 32) return true
    return false
}

function isThisStringHasOnlyNumbersAndLetters(string) {
    for (var caracter of string) {
        if (!isNumberOrLetter(caracter)) return false
    }
    return true
}

function letterCounter(string) {
    var letters = 0;
    for (var caracter of string) {
        if(isLetterOrSpace(caracter)) letters++
    }
    return letters
}

function isValid(input, p) {
    p.innerText = ' ';
    input.style.borderColor = '#373867';
}

function isNotValid(input, p, errorText) {
    input.style.borderColor = 'red'
    p.innerText = errorText;
}

function nameValidation() {
    var newPForThisValidation = document.getElementById('pError-0')
    if (inputName.value.length > 8 && isThisStringHasOnlyLetters(inputName.value)) {
        isValid(inputName, newPForThisValidation);
        textErrors[0] = ''
        return true
    }
    else {
        isNotValid(inputName, newPForThisValidation, 'Name must contain at least 3 caracters')
        textErrors[0] = 'Name must contain at least 3 caracters';
        return false
    }
}

function lastNameValidation() {
    var newPForThisValidation = document.getElementById('pError-1')
    if (inputLastName.value.length > 8 && isThisStringHasOnlyLetters(inputLastName.value)) {
        isValid(inputLastName, newPForThisValidation)
        textErrors[1] = ''
        return true
    }
    else {
        isNotValid(inputLastName, newPForThisValidation, 'Last name must contain at least 3 caracters')
        textErrors[1] = 'Last name must contain at least 3 caracters'
        return false
    }
}

function DNIValidation() {
    var newPForThisValidation = document.getElementById('pError-2');
    if (inputDNI.value.length >= 7 && isThisStringHasOnlyNumbers(inputDNI.value)) {
        isValid(inputDNI, newPForThisValidation)
        textErrors[2] = ''
        return true
    } else {
        isNotValid(inputDNI, newPForThisValidation, 'Dni must be numeric and greater than 7')
        textErrors[2] = 'Dni must be numeric and greater than 7'
        return false
    }
}

function birdthdayValidation() {
    var newPForThisValidation = document.getElementById('pError-3');
    let isValidDate = Date.parse(inputBirthday.value);

    if (isNaN(isValidDate)) {
        isNotValid(inputBirthday, newPForThisValidation, 'This is not a valid birthday format')
        textErrors[3] = 'This is not a valid birthday format'
        return false
    }
    else{
        isValid(inputBirthday, newPForThisValidation)
        textErrors[3] = ''
        return true
    }

}

function PhoneValidation() {
    var newPForThisValidation = document.getElementById('pError-4');
    if (inputPhone.value.length === 10 && isThisStringHasOnlyNumbers(inputPhone.value)) {
        isValid(inputPhone, newPForThisValidation)
        textErrors[4] = ''
        return true
    } else {
        isNotValid(inputPhone, newPForThisValidation, 'Phone must contain 10 numbers')
        textErrors[4] = 'Phone must contain 10 numbers'
        return false
    }
}

function residenceValidation() {
    var newPForThisValidation = document.getElementById('pError-5');
    var stringFirstPart = inputResidence.value.substring(0, inputResidence.value.indexOf(' '));
    var stringSecondPart = inputResidence.value.substring(inputResidence.value.indexOf(' ') +
        1, inputResidence.value.length);

    if (inputResidence.value.length >= 5 && isThisStringHasOnlyLetters(stringFirstPart)
    && isThisStringHasOnlyNumbers(stringSecondPart)) {
        isValid(inputResidence, newPForThisValidation)
        textErrors[5] = ''
        return true
    } else {
        isNotValid(inputResidence, newPForThisValidation, 'Enter a valid residence')
        textErrors[5] = 'Enter a valid residence'
        return false
    }
}

function locationValidation() {
    var newPForThisValidation = document.getElementById('pError-6');
    if (isThisStringHasOnlyNumbersAndLetters(inputLocation.value) && letterCounter(inputLocation.value) > 3) {
        isValid(inputLocation, newPForThisValidation);
        textErrors[6] = ''
        return true
    } else {
        isNotValid(inputLocation, newPForThisValidation, 'Enter a valid location');
        textErrors[6] = 'Enter a valid location'
        return false
    }
}

function postalCodeValidation() {
    var newPForThisValidation = document.getElementById('pError-7');
    if ((inputPostalCode.value.length == 4 || inputPostalCode.value.length == 5) && isThisStringHasOnlyNumbers(inputPostalCode.value)) {
        isValid(inputPostalCode, newPForThisValidation);
        textErrors[7] = ''
        return true
    }
    else {
        isNotValid(inputPostalCode, newPForThisValidation, 'Must contain 4 to 5 numbers');
        textErrors[7] = 'Must contain 4 to 5 numbers'
        return false
    }
}

function emailValidation() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var newPForThisValidation = document.getElementById('pError-8');

    if (!emailExpression.test(inputEmail.value)) {
        isNotValid(inputEmail, newPForThisValidation, 'Must be an email');
        textErrors[8] = 'Must be an email'
        return false
    }
    if (emailExpression.test(inputEmail.value)) {
        isValid(inputEmail, newPForThisValidation);
        textErrors[8] = ''
        return true
    }
}

function passwordValidation() {
    var newPForThisValidation = document.getElementById('pError-9');
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
        isValid(inputPassword, newPForThisValidation);
        textErrors[9] = ''
        return true
    }
    else {
        isNotValid(inputPassword, newPForThisValidation, 'Must contain numbers and letters and at least 8 characters');
        textErrors[9] = 'Must contain numbers and letters and at least 8 characters'
        return false
    }
}

function repeatPasswordValidation() {
    var newPForThisValidation = document.getElementById('pError-10');
    if (inputRepeat.value === inputPassword.value) {
        isValid(inputRepeat, newPForThisValidation);
        textErrors[10] = ''
        return true
    } else {
        isNotValid(inputRepeat, newPForThisValidation, `Password don't match`);
        textErrors[10] = 'Must contain numbers and letters and at least 8 characters'
        return false
    }
}

function whenFocus(e) {
    var newPForThisValidation = e.target.nextElementSibling;
    newPForThisValidation.innerText = ''
    e.target.style.borderColor = '#373867'
}

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
        Password: ${inputPassword.value}
        Repeat password: ${inputRepeat.value}`)
    } else {
        var stringErrors = '';
        for (let i = 0; i < textErrors.length; i++) {
            if (textErrors[i] != '') {
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

console.log(textErrors)

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
inputBirthday.addEventListener('blur', birdthdayValidation)

inputName.addEventListener('focus', whenFocus);
inputLastName.addEventListener('focus', whenFocus);
inputEmail.addEventListener('focus', whenFocus);
inputPassword.addEventListener('focus', whenFocus);
inputRepeat.addEventListener('focus', whenFocus);
inputDNI.addEventListener('focus', whenFocus);
inputPhone.addEventListener('focus', whenFocus);
inputPostalCode.addEventListener('focus', whenFocus);
inputResidence.addEventListener('focus', whenFocus)
inputLocation.addEventListener('focus', whenFocus)
inputBirthday.addEventListener('focus', whenFocus)

button.addEventListener('click', buttonClick);
liHome.addEventListener('click', goHome)
liSignUp.addEventListener('click', goSignUp)
liLogIn.addEventListener('click', goLogIn)
