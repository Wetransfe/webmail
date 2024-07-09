function validateForm() {
    // Perform form validation
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (password.length < 8) {
        document.getElementById("alert").style.display = "block"; // Show alert
        return false; // Prevent form submission
    }

    document.getElementById("alert").style.display = "none"; // Hide alert
    redirectToGoogle(); // Redirect only if password length is valid
    return false; // Prevent default form submission
}


