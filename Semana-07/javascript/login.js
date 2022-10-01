var formLogin = document.getElementById('form-login')

// Input variables:
var inputEmail = document.getElementById('input-email');
var inputPassword = document.getElementById('input-password');
var inputs = document.querySelectorAll('input');

// Buttons variables:
var liHome = document.getElementById('li-home');
var liSignUp = document.getElementById('li-sign-up');
var liContact = document.getElementById('li-contact');

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

pError0.textContent = 'Must be an email'
pError1.textContent = 'Password is wrong'

var textAlertErrors = [
    pError0.textContent,
    pError1.textContent,
]

// Validation helper functions:
function isValid(input, i) {
    input.nextElementSibling.classList = 'error-hidden'
    input.style.borderColor = '#009400';
    textAlertErrors[i] = ''
    return true;
}

function isNotValid(input, i, errorText) {
    input.style.borderColor = 'red';
    input.nextElementSibling.classList = 'error'
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
    if (inputPassword.value.length < 8) return isNotValid(inputPassword, 1, pError1.textContent)
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
function buttonClick(e) {
    e.preventDefault()
    var email = inputEmail.value;
    var password = inputPassword.value;
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email + '&password=' + password;

    fetch(url)
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        console.log(url)
        if(data.success) alert('Todo bien')
        else if (data.errors){
            var string = ''
            for (var error of data.errors) {
                string += error.msg + '\n'
            }
            alert(string)
            //throw new Error("There was an error with the request")
        }
        else alert(data.msg)
    })
    .catch(function(error){
        console.log(error)
    })
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

function goContact() {
    window.location.href = '../views/index.html#sec-form';
}

// Blur events:
inputEmail.addEventListener('blur', emailValidation);
inputPassword.addEventListener('blur', passwordValidation);

// Focus events:
inputEmail.addEventListener('focus', whenFocus);
inputPassword.addEventListener('focus', whenFocus);

// Click events:
liHome.addEventListener('click', goHome);
liSignUp.addEventListener('click', goSignUp);
liContact.addEventListener('click', goContact);
formLogin.addEventListener('submit', buttonClick)