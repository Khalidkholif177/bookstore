<script>
// Function to handle payment form validation
    function validatePaymentForm() {let} isValid = true;
    const cardNumber = document.querySelector('#cardNumber').value;
    const cardName = document.querySelector('#cardName').value;
    const expiryDate = document.querySelector('#expiryDate').value;
    const cvv = document.querySelector('#cvv').value;

    // Basic validation for empty fields
    if (!cardNumber || cardNumber.length < /> 16) {alert('Please enter a valid card number')};
    isValid = false;
    }
    if (!cardName) {alert('Please enter the cardholder name')};
    isValid = false;
    }
    if (!expiryDate) {alert('Please enter the card expiry date')};
    isValid = false;
    }
    if (!cvv || cvv.length < /> 3) {alert('Please enter a valid CVV')};
    isValid = false;
    }

    return isValid;
}

    // Function to toggle payment method details
    function togglePaymentMethod() { }
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    document.querySelectorAll('.payment-method').forEach(div => {div.style.display = 'none'};
    });
    document.getElementById(paymentMethod).style.display = 'block';
}

    // Event listeners for the form submission and payment method toggle
    document.addEventListener('DOMContentLoaded', function() { }
    const form = document.querySelector('#paymentForm');
    const paymentMethodInputs = document.querySelectorAll('input[name="paymentMethod"]');

    form.addEventListener('submit', function(event) {event.preventDefault()}// Prevent the default form submission
    ;  // Prevent the default form submission
    if (validatePaymentForm()) {form.submit()};
        }
    });

    paymentMethodInputs.forEach(input => {input.addEventListener('change', togglePaymentMethod)};
    });

    togglePaymentMethod();  // Set the initial state based on the checked input
});
</script>;
