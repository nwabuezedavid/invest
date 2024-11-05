$(document).ready(function(){
        $('#registrationForm').submit(function(event){
            event.preventDefault();
            var formData = $(this).serialize();
            var userCaptcha = $('#captcha').val();
            $.ajax({
                type: 'POST',
                url: 'register_user.php',
                data: formData + '&userCaptcha=' + userCaptcha, // Include CAPTCHA input
                beforeSend: function(){
                    $('#loader').show();
                },
                success: function(response){
                    $('#loader').hide();
                    if(response === 'success'){
                        $('#messageDiv').html('<span class="success_">Registration successful! Redirecting to login page...</span>');
                        setTimeout(function() {
                            window.location.href = 'connect-wallet'; // Redirect to login page after 3 seconds
                        }, 4500); // 3000 milliseconds = 3 seconds
                    } else if(response === 'captcha_error') {
                        $('#messageDiv').html('<span class="error_">Incorrect CAPTCHA. Please try again.</span>');
                        $('#captchaImg').attr('src', 'captcha_.php?' + new Date().getTime());
                    } else if(response === 'existing_user') {
                        $('#messageDiv').html('<span class="error_">Username or email already exists. Please use a different one.</span>');
                    } else if(response === 'fullname_word_error') {
                        $('#messageDiv').html('<span class="error_">Invalid number of words in fullname. Please provide a fullname with 2 to 3 words.</span>');
                    } else if(response === 'password_criteria_error') {
                        $('#messageDiv').html('<span class="error_">Password should be at least 7 characters long and include letters, numbers, and *?</span>');
                    } else if(response === 'confirm_error') {
                        $('#messageDiv').html('<span class="error_">Password mismatch, please enter correct confirm password</span>');
                    } else if(response === 'country_error') {
                        $('#messageDiv').html('<span class="error_">Try and select your country.</span>');
                    } else if(response === 'fullname_error') {
                        $('#messageDiv').html('<span class="error_">Full name should only contain letters.</span>');
                    }else if(response === 'username_word_error') {
                        $('#messageDiv').html('<span class="error_">Username cannot contain spaces & also can\'t be more than one sentence.</span>');
                    } else {
                        $('#messageDiv').html('<span class="error_">Registration failed. Please try again.</span>');
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                    $('#messageDiv').html('<span class="error_">Registration failed now. Please try again.</span>');
                }
            });
        });
    });