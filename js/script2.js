document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Check if all fields are filled
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("All fields are required!");
            return;
        }

        // Email validation
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Password strength validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }

        // Confirm Password Match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Success message
        alert(Successful);

        // Reset the form
        document.getElementById("signupForm").reset();
    });
});
