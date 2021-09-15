const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const phoneField = document.querySelector('#phone');
const submitBtn = document.querySelector('.submit-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function validateForm(e) {
    // prevent default action
    e.preventDefault();

    // remove previous messages on screen
    const allErrorMessage = document.querySelectorAll('.error-message');
    allErrorMessage.forEach((errorMessage) => {
        errorMessage.style.display = 'none';
    })
    // validate name
    validateName();
    // validate email
    validateEmail();
    // validate phone
    validatePhone();
}

function highlightField(field) {
    field.parentElement.style.borderBottom = '3px solid white'
}

function validateName() {
    // const regEx = /\d/g;    
    if(nameField.value === '' || nameField.value.length <= 1) {
        showError(nameField)
    } else {
        highlightField(nameField)
    }
}

function validateEmail() {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ( emailRegEx.test(emailField.value) ) {
        highlightField(emailField)
    } else {
        showError(emailField)
    }
}

function validatePhone() {
    const phoneRegEx = /^\d{10}$/;
    if ( phoneField.value.match(phoneRegEx)) {
        highlightField(emailField);
    } else {
        showError(phoneField)
    }
}

function showError(field) {
    field.nextElementSibling.style.display='inline-block';
}

// function toggleMenu() {
//     if() 
// }


// hamburgerMenu.addEventListener('click', toggleMenu)
if(submitBtn) {
    submitBtn.addEventListener('click', validateForm)
}