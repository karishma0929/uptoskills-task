document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let responseMessage = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Please fill in all fields.";
    } else if (!validateEmail(email)) {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Please enter a valid email address.";
    } else {
        responseMessage.style.color = "green";
        responseMessage.textContent = "Message sent successfully!";
        
        // Reset form
        document.getElementById("contactForm").reset();
    }
});

// Email Validation Function
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
