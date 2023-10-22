document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const strengthLabel = document.getElementById("strength-label");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);

        if (strength >= 8) {
            strengthLabel.textContent = "Strong";
            strengthLabel.className = "password-strong";
        } else if (strength >= 6) {
            strengthLabel.textContent = "Medium";
            strengthLabel.className = "password-moderate";
        } else {
            strengthLabel.textContent = "Weak";
            strengthLabel.className = "password-weak";
        }
    });

    function calculatePasswordStrength(password) {
        // Check the password length
        return password.length;
    }
});
