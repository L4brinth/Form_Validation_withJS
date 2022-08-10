// SELECT THE INPUT FIELDS AND THE FORM
const emailEl = document.querySelector('#email');
const firstNameEl = document.querySelector('#firstname');
const lastNameEl = document.querySelector('#lastname');
const addressEl = document.querySelector('#address');
const phoneEl = document.querySelector('#phone');
const checkboxEl = document.querySelector('#signup');
const formEl = document.querySelector('#form');

// Variables for INVALID INPUT ( messages )
const emptyInput = 'REQUIRED';
const emailInvalid = 'BAD FORMAT! Please enter a valid email address. Example: abc123@email.com';
const phoneInvalid = 'BAD FORMAT! Please enter your number in format: +0123456789';

// Variables with regular expression of the email and phone
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /\+[0-9]{10}$/;

// FORM VALIDATION for EMAIL and PHONE
const validationEmailPhone = (field, regex, error1, error2) => {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = error1;
        return false;
    } else if (!field.value.match(regex)) {
        field.nextElementSibling.innerHTML = error2;
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

//FORM VALIDATION for FIRSTNAME, LASTNAME and ADDRESS
const validationNameAddress = (field, error) => {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = error;
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

// VALIDATION for CHECKBOX
const validationCheckbox = () => {
    if (checkboxEl.checked) {
        checkboxEl.nextElementSibling.innerHTML = "";
        return true;
    } else {
        checkboxEl.nextElementSibling.innerHTML = "Checkbox is REQUIRED.";
        return false;
    }
};

const validateForm = (e) => {
    !validationNameAddress(firstNameEl, emptyInput) && e.preventDefault();
    !validationNameAddress(lastNameEl, emptyInput) && e.preventDefault();
    !validationNameAddress(addressEl, emptyInput) && e.preventDefault();
    !validationEmailPhone(emailEl, emailRegex, emptyInput, emailInvalid) && e.preventDefault();
    !validationEmailPhone(phoneEl, phoneRegex, emptyInput, phoneInvalid) && e.preventDefault();
    !validationCheckbox() && e.preventDefault();
}

// On submit show all errors (if any)
formEl.addEventListener("submit", validateForm);

// On blur SHOW errors 
emailEl.addEventListener("blur", (e) => validationEmailPhone(emailEl, emailRegex, emptyInput, emailInvalid, e));
firstNameEl.addEventListener("blur", (e) => validationNameAddress(firstNameEl, emptyInput, e));
lastNameEl.addEventListener("blur", (e) => validationNameAddress(lastNameEl, emptyInput, e));
addressEl.addEventListener("blur", (e) => validationNameAddress(addressEl, emptyInput, e));
phoneEl.addEventListener("blur", (e) => validationEmailPhone(phoneEl, phoneRegex, emptyInput, phoneInvalid, e));

// On focus HIDE errors
emailEl.addEventListener("focus", () => emailEl.nextElementSibling.innerHTML = "");
firstNameEl.addEventListener("focus", () => firstNameEl.nextElementSibling.innerHTML = "");
lastNameEl.addEventListener("focus", () => lastNameEl.nextElementSibling.innerHTML = "");
addressEl.addEventListener("focus", () => addressEl.nextElementSibling.innerHTML = "");
phoneEl.addEventListener("focus", () => phoneEl.nextElementSibling.innerHTML = "");

// Event Listener for CHECKBOX
checkboxEl.addEventListener('change', validationCheckbox);