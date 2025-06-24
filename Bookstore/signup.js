const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password2');

function showInputError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-input error animate_animated animate_headShake";
    const small = formControl.querySelector('small');
    small.innerText = message;
    setTimeout(() => {
        formControl.className = 'form-input error';
    }, 3000);
    return false;
}

function showInputSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-input success animate animated animate_bounceIn';
    return true;
}

function checkEmailValidity(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        return showInputSuccess(input);
    } else {
        return showInputError(input, "Email is not valid");
    }
}

function checkRequiredFields(inputArr) {
    let isValid = true;
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            isValid = showInputError(input, `${getFieldName(input)} is required`) && isValid;
        } else {
            showInputSuccess(input);
        }
    });
    return isValid;
}

function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        return showInputError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        return showInputError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        return showInputSuccess(input);
    }
}

function checkUsername(input) {
    const usr = /^[0-9a-zA-Z]+$/;
    if (!usr.test(input.value)) {
        return showInputError(input, 'Username can only contain letters or numbers');
    } else {
        return showInputSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        return showInputError(input2, 'Passwords do not match');
    } else {
        return true;
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isFormValid = true;
    isFormValid = checkRequiredFields([usernameInput, emailInput, passwordInput, confirmPasswordInput]) && isFormValid;
    isFormValid = checkInputLength(usernameInput, 3, 15) && isFormValid;
    isFormValid = checkInputLength(passwordInput, 6, 25) && isFormValid;
    isFormValid = checkInputLength(confirmPasswordInput, 6, 25) && isFormValid;
    isFormValid = checkEmailValidity(emailInput) && isFormValid;
    isFormValid = checkPasswordMatch(passwordInput, confirmPasswordInput) && isFormValid;
    isFormValid = checkUsername(usernameInput) && isFormValid;

    if (isFormValid) {
        window.location.href = 'signin.html'; 
    }
});
