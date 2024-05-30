$(document).ready(function() {
    const form = $('#registrationForm');

    function resetFormMessages() {
        $(".alert-danger").html("").hide(); // Assuming error messages have class 'alert-danger'
    }

    function validate() {
        let valid = true;
        resetFormMessages();

        const USERNAME = $("#username");
        const PASSWORD = $("#password");
        const CONFIRM = $("#confirm");
        const FNAME = $("#fname");
        const LNAME = $("#lname");
        const EMAIL = $("#email");

        // Username validation
        if (!USERNAME.val() || USERNAME.val().length < 5) {
            $("#user-msg").html("Username must be 5 characters or more").show();
            valid = false;
        } else if (USERNAME.val() !== USERNAME.val().toLowerCase()) {
            $("#user-msg").html("Username must be all lowercase").show();
            valid = false;
        }

        // Password validation
        if (!PASSWORD.val() || PASSWORD.val().length < 8) {
            $("#password-msg").html("Password needs to be at least 8 characters long").show();
            valid = false;
        } else {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
            if (!passwordRegex.test(PASSWORD.val())) {
                $("#password-msg").html("Password must contain at least one letter, one number, and one special character").show();
                valid = false;
            }
        }

        // Confirm password validation
        if (!CONFIRM.val() || PASSWORD.val() !== CONFIRM.val()) {
            $("#confirm-msg").html("Passwords don't match").show();
            valid = false;
        }

        // First and last name validation
        if (!FNAME.val()) {
            $("#fname-msg").html("First name must not be empty").show();
            valid = false;
        }
        if (!LNAME.val()) {
            $("#lname-msg").html("Last name must not be empty").show();
            valid = false;
        }

        // Email validation
        const atpos = EMAIL.val().indexOf("@");
        const dotpos = EMAIL.val().lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= EMAIL.val().length) {
            $("#email-msg").html("You need to enter a valid email address").show();
            valid = false;
        }

        return valid;
    }

    form.on('submit', function(event) {
        event.preventDefault();
        if (validate()) {
            const formData = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "/register",
                data: formData,
                success: function(response) {
                    if (response.success) {
                        alert('Registration successful!');
                        // Optionally redirect the user or clear the form
                        form[0].reset();
                    } else {
                        // Display error messages returned from the server
                        $.each(response.errors, function(key, value) {
                            $('#' + key + '-msg').html(value).show();
                        });
                    }
                },
                error: function() {
                    alert('An error occurred. Please try again.');
                }
            });
        }
    });
});
