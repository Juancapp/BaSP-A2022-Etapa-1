var formLogin = document.getElementById('form-login');

// Input variables:
var inputEmail = document.getElementById('input-email');
var inputPassword = document.getElementById('input-password');
var inputs = document.querySelectorAll('input');

// Errors variables:
for (var i = 0; i < 2; i++) {
    var newP = document.createElement('p');
    var fieldset = inputs[i].parentElement;
    fieldset.appendChild(newP);
    newP.className = 'error-hidden';
    newP.id = 'p-error-' + i;
}

var pError0 = document.getElementById('p-error-0');
var pError1 = document.getElementById('p-error-1');

pError0.textContent = 'Must be an email';
pError1.textContent = 'Password is wrong';

var textAlertErrors = [
    pError0.textContent,
    pError1.textContent,
]

// Validation helper functions:
function isValid(input, i) {
    input.nextElementSibling.classList = 'error-hidden';
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

// Validation of each input:
function emailValidation() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailExpression.test(inputEmail.value)) return isNotValid(inputEmail, 0, pError0.textContent);
    if (emailExpression.test(inputEmail.value)) return isValid(inputEmail, 0);
}

function passwordValidation() {
    if (inputPassword.value.length < 8) return isNotValid(inputPassword, 1, pError1.textContent);
    var numbers = false;
    var letters = false;
    var specialCaracters = true;

    for (var i = 0; i < inputPassword.value.length; i++) {
        var element = inputPassword.value[i];
        var charCode = element.charCodeAt(i);
        parseElement = parseInt(element);
        if (isNaN(parseElement)) letters = true;
        else if (!isNaN(parseElement)) numbers = true;
        else if (charCode > 32 && charCode < 48) specialCaracters = false;
    }

    if (numbers && letters && specialCaracters) return isValid(inputPassword, 0)
    return isNotValid(inputPassword, 1, 'Password is wrong');
}

function whenFocus(e) {
    e.target.nextElementSibling.className = 'error-hidden';
    e.target.className = 'input';
}

// Buttons functions:
function buttonClick(e) {

    if (passwordValidation() && emailValidation() === true) {
        e.preventDefault();
        var email = inputEmail.value;
        var password = inputPassword.value;
        alert(`        Form data:

        Email: ${email}
        Password: ${password}`);
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email + '&password=' + password;

        fetch(url)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                alert(data.msg);
                if (!data.success) throw new Error("There was an error with the request");
                })
            .catch(function(error){
                console.log(error);
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
inputEmail.addEventListener('blur', emailValidation);
inputPassword.addEventListener('blur', passwordValidation);

// Focus events:
inputEmail.addEventListener('focus', whenFocus);
inputPassword.addEventListener('focus', whenFocus);

// Click events:
formLogin.addEventListener('submit', buttonClick);