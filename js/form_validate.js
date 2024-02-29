/* 
  This script handles form validation and submission.
*/

// Select the form element
const form = document.querySelector('form');

// Function to validate form fields
const validateForm = () => {
    // Extract values from form fields
    let firstname = form.querySelector('#firstname').value; 
    let lastname = form.querySelector('#lastname').value; 
    let mobile = form.querySelector('#number').value; 
    let email = form.querySelector('#email').value; 
    let message = form.querySelector('#message').value; 

    // Validation for first name
    if ((firstname == "") || (firstname == null)) {
        alert("First name must be filled out.");
        return false;
    }
    if (!/^[a-zA-Z ]+$/.test(firstname)) {
        alert("Invalid first name format.");
        return false;
    }

    // Validation for last name
    if ((lastname == "") || (lastname == null)) {
        alert("Last name must be filled out.");
        return false;
    }
    if (!/^[a-zA-Z ]+$/.test(lastname)) {
        alert("Invalid last name format.");
        return false;
    }

    // Validation for mobile number
    if ((mobile == "") || (mobile == null)) {
        alert("Mobile must be filled out.");
        return false;
    }
    if (!(/^[6-9]\d{9}$/.test(mobile))) {
        alert("Invalid mobile number format.");
        return false;
    }

    // Validation for email
    if ((email == "") || (email == null)) {
        alert("Email ID must be filled out.");
        return false;
    }
    if (!(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email))) {
        alert("Invalid Email-ID format.");
        return false;
    }

    // Validation for message
    if ((message == "") || (message == null)) {
        alert("Message must be filled out.");
        return false;
    }
    if (message.length < 10 || message.length > 100) {
        alert("Message must be between 10 & 100 characters long.");
        return false;
    }
    if (!(/^[a-zA-Z0-9,.!? ]+$/.test(message))) {
        alert("Message contains invalid characters.");
        return false;
    }

    return true;
}

// Function to submit the form data
const submitForm = () => { 
    if(validateForm()) {
        const formData = new FormData(form);
        const url = form.getAttribute('action');

        // Send form data via fetch API
        fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok) {
                // Display a success message to the user
                alert('Form Submitted Successfully.');
                // Clear all fields after successful submission
                form.reset();
            }
            else {
                // Display an error message to the user
                alert('Form Submission Failed. Please Try Again Later.');
            }
        })
        .catch(error => {
            // Display an error message to the user
            alert('Form Submission Failed. Please Try Again Later.');
        });
    }
}

// Function to handle form submission
const loadForm = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    submitForm(); // Call the function to submit the form data
}

// Add event listener to the form submission event
form.addEventListener('submit', loadForm);

/* 
  This script handles form validation and submission.
*/
