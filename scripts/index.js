const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');
const submit_button = document.querySelector("#submit_button");


function validatePassword(password, confirm_password) {
    let pword = password.value;
    let confirm_pword = confirm_password.value;
    if (pword === '') {
        password.setCustomValidity('Please enter a password');
        password.classList.add("invalidInput");
        return false;
    } else {
        password.setCustomValidity('');
    }
    if (confirm_pword === '') {
        confirm_password.setCustomValidity('Please enter a confirm password');
        confirm_password.classList.add("invalidInput");
        return false;
    } else {
        password.setCustomValidity('');
    }
    if (pword !== confirm_pword) {
        password.classList.add("invalid");
        confirm_password.setCustomValidity('Passwords do not match');
        confirm_password.classList.add("invalidInput");
        password.classList.add("invalidInput");
        return false;
    } else if (pword === confirm_pword) {
        confirm_password.setCustomValidity('');
        return true;
    }
}

submit_button.addEventListener('click', () => {
    validatePassword(password, confirm_password);

});