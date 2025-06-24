document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isFormValid = true;  
        isFormValid = checkEmailValidity(emailInput) && isFormValid;  // Validate email
        isFormValid = checkInputLength(passwordInput, 6, 25) && isFormValid;  // Validate password length

        // Redirect only if all validations are successful
        if (isFormValid) {
            window.location.href = 'index.html';  // Redirect to the home page
        }
    });

    function checkEmailValidity(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
            return showInputSuccess(input);
        } else {
            return showInputError(input, "Email is not valid");
        }
    }

    function checkInputLength(input, min, max) {
        if (input.value.length < min) {
            return showInputError(input, `Password must be at least ${min} characters`);
        } else if (input.value.length > max) {
            return showInputError(input, `Password must be less than ${max} characters`);
        } else {
            return showInputSuccess(input);
        }
    }

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
});
