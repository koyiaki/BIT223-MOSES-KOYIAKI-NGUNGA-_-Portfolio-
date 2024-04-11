 function registerUser() {
            var regUsername = document.getElementById("regUsername").value;
            var regPassword = document.getElementById("regPassword").value;

            // You would typically send this data to a backend for registration
            // This is just a frontend example

            // For demonstration, let's just log the registration details
            console.log("Registered Username:", regUsername);
            console.log("Registered Password:", regPassword);

            // Prevent form submission
            return false;
        }

        function loginUser() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // You would typically send this data to a backend for authentication
            // This is just a frontend example

            // For demonstration, let's just log the login credentials
            console.log("Username:", username);
            console.log("Password:", password);

            // Prevent form submission
            return false;
        }