// script.js

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get values from form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate the form (basic check)
    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! We'll get back to you soon.");
        document.getElementById("contact-form").reset(); // Reset the form after submission
    } else {
        alert("Please fill in all fields.");
    }
});
