function validateSignup() {
            var passwordInput = document.getElementById('password');
            var passwordError = document.getElementById('password-error');

            if (passwordInput.value.length < 8) {
                passwordError.textContent = "Password must be at least 8 characters long.";
                return false;
            } else {
                passwordError.textContent = "";
                return true;
            }
        }

        function validateSignin() {
            var emailInput = document.getElementById('signin-email').value;
            var passwordInput = document.getElementById('signin-password').value;

            if (emailInput === 'user@example.com' && passwordInput === 'password123') {
                return true; 
            } else {
                alert('Invalid email or password');
                return false; 
            }
        }
       