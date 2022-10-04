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
var inputs = document.querySelectorAll('input');

// Errors variables:
for (var i = 0; i < 11; i++) {
    var newP = document.createElement('p');
    var fieldset = inputs[i].parentElement;
    fieldset.appendChild(newP);
    newP.className = 'error-hidden';
    newP.id = 'p-error-' + i;
}

var pError0 = document.getElementById('p-error-0');
var pError1 = document.getElementById('p-error-1');
var pError2 = document.getElementById('p-error-2');
var pError3 = document.getElementById('p-error-3');
var pError4 = document.getElementById('p-error-4');
var pError5 = document.getElementById('p-error-5');
var pError6 = document.getElementById('p-error-6');
var pError7 = document.getElementById('p-error-7');
var pError8 = document.getElementById('p-error-8');
var pError9 = document.getElementById('p-error-9');
var pError10 = document.getElementById('p-error-10');
var pError11 = document.getElementById('p-error-11');

pError0.innerText = 'Name must contain at least 2 caracters';
pError1.innerText = 'Last name must contain at least 2 caracters';
pError2.innerText = 'Dni must be numeric and greater than 7';
pError3.innerText = 'You must introduce a valid date';
pError4.innerText = 'Phone must contain 10 numbers';
pError5.innerText = 'Residence must contain first letters and then numbers';
pError6.innerText = 'Enter a valid location';
pError7.innerText = 'Must contain 4 to 5 numbers';
pError8.innerText = 'Must be an email';
pError9.innerText = 'Password must contain at least 8 caracters and numbers';
pError10.innerText = `Passwords don't match`;

var textAlertErrors = [
    pError0.textContent,
    pError1.textContent,
    pError2.textContent,
    pError3.textContent,
    pError4.textContent,
    pError5.textContent,
    pError6.textContent,
    pError7.textContent,
    pError8.textContent,
    pError9.textContent,
    pError10.textContent,
]

// Validation helper functions:
function isLetterOrSpace(a) {
    var charCode = a.charCodeAt(a);
    return (((charCode > 64 && charCode < 91)) || (charCode > 96 && charCode < 123) ||
    (charCode > 191 && charCode < 256) || charCode === 32);
}

function isThisStringHasOnlyLetters(string) {
    for (var caracter of string) {
        if ((isLetterOrSpace(caracter) === false)) {
            return false;
        }
    }
    return true;
}

function isNumber(caracter) {
    return !isNaN(parseInt(caracter));
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
    if(((charCode > 64 && charCode < 91)) || (charCode > 96 && charCode < 123) || charCode === 32) return true;
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
    input.nextElementSibling.classList = 'error-hidden'
    input.className = 'input-valid';
    textAlertErrors[i] = '';
    return true;
}

function isNotValid(input, i, errorText) {
    input.className = 'input-error';
    input.nextElementSibling.classList = 'error';
    textAlertErrors[i] = errorText;
    return false;
}

function lastNameAndNameValidations(input, i, errorText) {
    if (input.value.length > 1 && isThisStringHasOnlyLetters(input.value)) return isValid(input, i);
    return isNotValid(input, i, errorText);
}

// Validation of each input:
function nameValidation() {
    return lastNameAndNameValidations(inputName, 0, pError0.textContent);
}

function lastNameValidation() {
    return lastNameAndNameValidations(inputLastName, 1, pError1.textContent);
}

function DNIValidation() {
    if (inputDNI.value.length >= 7 && isThisStringHasOnlyNumbers(inputDNI.value)) return isValid(inputDNI, 2);
    return isNotValid(inputDNI, 2, pError2.textContent);
}

function birdthdayValidation() {
    var isValidDate = Date.parse(inputBirthday.value);
    if (isNaN(isValidDate)) return isNotValid(inputBirthday, 3, pError3.textContent);
    return isValid(inputBirthday, 3);
}

function phoneValidation() {
    if (inputPhone.value.length === 10 && isThisStringHasOnlyNumbers(inputPhone.value)) return isValid(inputPhone, 4);
    isNotValid(inputPhone, 4, pError4.textContent);
}

function residenceValidation() {
    var stringFirstPart = inputResidence.value.substring(0, inputResidence.value.indexOf(' '));
    var stringSecondPart = inputResidence.value.substring(inputResidence.value.indexOf(' ') +
        1, inputResidence.value.length);

    if (inputResidence.value.length >= 5 && isThisStringHasOnlyLetters(stringFirstPart)
    && isThisStringHasOnlyNumbers(stringSecondPart)) return isValid(inputResidence, 5)
    return isNotValid(inputResidence, 5, pError5.textContent);
}

function locationValidation() {
    if (isThisStringHasOnlyNumbersOrLetters(inputLocation.value)
    && letterCounter(inputLocation.value) > 3) return isValid(inputLocation, 6);
    return isNotValid(inputLocation, 6, pError6.textContent);
}

function postalCodeValidation() {
    if ((inputPostalCode.value.length === 4 || inputPostalCode.value.length === 5)
    && isThisStringHasOnlyNumbers(inputPostalCode.value)) return isValid(inputPostalCode, 7);
    return isNotValid(inputPostalCode, 7, pError7.textContent);
}

function emailValidation() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!emailExpression.test(inputEmail.value)) return isNotValid(inputEmail, 8, pError8.textContent);
    if (emailExpression.test(inputEmail.value)) return isValid(inputEmail, 8);
}

function passwordValidation() {
    if (inputPassword.value.length < 8) return isNotValid(inputPassword, 9, pError9.textContent);
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

    if (numbers && letters  && specialCaracters) return isValid(inputPassword, 9);
    return isNotValid(inputPassword, 9, pError9.textContent);
}

function repeatPasswordValidation() {
    if (inputRepeat.value === inputPassword.value && inputRepeat.value.length !== 0) return isValid(inputRepeat, 10);
    else isNotValid(inputRepeat, 10, pError10.textContent);
}

function whenFocus(e) {
    e.target.nextElementSibling.className = 'error-hidden';
    e.target.className = 'input';
}

// Buttons functions:
function buttonClick(e) {
    e.preventDefault();
    var birthday = inputBirthday.value;
    var dateSplit = birthday.split('-');
    birthday = dateSplit[1] + '/'+dateSplit[2]+ '/' + dateSplit[0];

    var name = inputName.value;
    var lastName = inputLastName.value;
    var DNI = inputDNI.value;
    var phone = inputPhone.value;
    var residence = inputResidence.value;
    var location = inputLocation.value;
    var postalCode = inputPostalCode.value;
    var email = inputEmail.value;
    var password = inputPassword.value;

    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + name
    + '&lastName=' + lastName
    + '&dni=' + DNI
    + '&dob=' + birthday
    + '&phone=' + phone
    + '&address=' + residence
    + '&city=' + location
    + '&zip=' + postalCode
    + '&email=' + email
    + '&password=' + password;

    if (nameValidation() && lastNameValidation && DNIValidation() && birdthdayValidation() && phoneValidation()
    && residenceValidation() && locationValidation() && postalCodeValidation() && emailValidation()
    && passwordValidation() && repeatPasswordValidation() === true) {
        alert(`        Form data:

        Name: ${name}
        Last Name: ${lastName}
        DNI: ${DNI}
        Birthday: ${inputBirthday.value}
        Phone: ${phone}
        Residence: ${residence}
        Location: ${location}
        Postal Code: ${postalCode}
        Email: ${email}
        Password: ${password}`)

        fetch(url)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                if (data.success) {
                    localStorage.setItem('name', name);
                    localStorage.setItem('lastName', lastName);
                    localStorage.setItem('DNI', DNI);
                    localStorage.setItem('birthday', inputBirthday.value);
                    localStorage.setItem('phone', phone);
                    localStorage.setItem('residence', residence);
                    localStorage.setItem('location', location);
                    localStorage.setItem('postalCode', postalCode);
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    alert(data.msg);
                }
                else throw new Error("There was an error with the request");
            })
            .catch(function(error){
                console.log(error)
            })
    } else {
        var stringErrors = '';
            for (var i = 0; i < textAlertErrors.length; i++) {
                if (textAlertErrors[i] !== '') {
                    stringErrors += '- ' + textAlertErrors[i] + '\n';
                }
            }
        alert('Oops! Something is wrong.' + '\n' +  'Correct the following errors:' + '\n' + '\n' +stringErrors);
    }
}

// Blur events:
inputName.addEventListener('blur', nameValidation);
inputLastName.addEventListener('blur', lastNameValidation);
inputEmail.addEventListener('blur', emailValidation);
inputPassword.addEventListener('blur', passwordValidation);
inputRepeat.addEventListener('blur', repeatPasswordValidation);
inputDNI.addEventListener('blur', DNIValidation);
inputPhone.addEventListener('blur', phoneValidation);
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

window.addEventListener("load", function() {
    inputName.value = localStorage.getItem('name');
    inputLastName.value = localStorage.getItem('lastName');
    inputDNI.value = localStorage.getItem('DNI');
    inputBirthday.value = localStorage.getItem('birthday');
    inputPhone.value = localStorage.getItem('phone');
    inputResidence.value = localStorage.getItem('residence');
    inputLocation.value = localStorage.getItem('location');
    inputPostalCode.value = localStorage.getItem('postalCode');
    inputEmail.value = localStorage.getItem('email');
    inputPassword.value = localStorage.getItem('password');
});