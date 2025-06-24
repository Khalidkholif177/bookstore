document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    if (!form) {
        console.error('Form not found!');
        return;
    }

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');
    const zipInput = document.getElementById('zip');
    const cardNameInput = document.getElementById('cardName');
    const cardNumInput = document.getElementById('cardNum');
    const cvvInput = document.getElementById('cvv');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isFormValid = true; 

        if (nameInput && nameInput.value.trim() === '') {
            console.error('Name is required');
            isFormValid = false;
        }

        if (isFormValid) {
            console.log("Form is valid. Redirecting...");
            window.location.href = 'shipping.html';
        } else {
            console.log("Form is not valid. Please correct the errors.");
        }
    });



    cardNumInput.addEventListener('input', function() {
        let cardNumber = cardNumInput.value.replace(/\D/g, ''); 
        let maskedNumber = cardNumber.slice(0, -4).replace(/./g, '*') + cardNumber.slice(-4);
        cardNumInput.value = maskedNumber;
    });

});

function checkRequiredFields(fields) {
    let isValid = true;
    fields.forEach(field => {
        if (field.value.trim() === "") {
            showInputError(field, "This field is required");
            isValid = false;
        } else {
            showInputSuccess(field);
        }
    });
    return isValid;
}

function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        showInputError(input, `${getFieldName(input)} must be at least ${min} characters`);
        return false;
    } else if (input.value.length > max) {
        showInputError(input, `${getFieldName(input)} must be less than ${max} characters`);
        return false;
    } else {
        showInputSuccess(input);
        return true;
    }
}

function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        showInputError(input, `${getFieldName(input)} must be at least ${min} characters`);
        return false;
    } else if (input.value.length > max) {
        showInputError(input, `${getFieldName(input)} must be less than ${max} characters`);
        return false;
    } else if (input.id === 'cardNum' && input.value.length !== 16) {
        showInputError(input, `${getFieldName(input)} must be exactly 16 numbers`);
        return false;
    } else {
        showInputSuccess(input);
        return true;
    }
}


function showInputError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small') || document.createElement('small');
    small.innerText = message;
    formControl.appendChild(small);
}

function showInputSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
