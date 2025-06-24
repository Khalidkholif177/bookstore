document.addEventListener('DOMContentLoaded', function() {
    const celebrationContainer = document.getElementById('celebration-container');
    const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#581845', '#C70039', '#900C3F', '#FFC0CB'];
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`; 
      confetti.style.animationDelay = `${Math.random() * 0.5}s`; 
  
      celebrationContainer.appendChild(confetti);
    }
  
    setTimeout(() => {
      celebrationContainer.style.display = 'none';
    }, 4000);
  });

  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var feedback = document.getElementById('feedback').value.trim();

    if (name === "" || email === "" || feedback === "") {
        alert("Please fill in all fields.");
        return; 
    }

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Feedback: " + feedback);

    this.reset();

    alert("Thank you for your feedback, " + name + "!");

    updateProgressBar(2); 
});

function updateProgressBar(stepNumber) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index < stepNumber) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (index === stepNumber) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

updateProgressBar(1); 
