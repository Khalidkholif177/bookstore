const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form form');
  const inputs = document.querySelectorAll(".input");


  form.addEventListener('submit', function(event) {
      event.preventDefault();  
      let isValid = true;

      inputs.forEach(input => {
          if (input.value === '') {
              isValid = false;
              alert('Please fill out all fields');  
              return;
          }
      });

      if (isValid) {
          window.location.href = 'index.html';  
      }
  });
});


