document.getElementById("showPassword").addEventListener("change", function() {
    let passwordInput = document.getElementById("password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials.");
    }
});