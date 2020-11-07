const contactForm = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const breadcrumb = document.querySelector(".breadcrumb");
const h1 = document.querySelector("h1");

function validateForm(event) {
    event.preventDefault();

    if(!validateLength(name.value, 1)) {
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }
    if(!validateLength(subject.value, 10)) {
        subjectError.style.display = "block";
    } else {
        subjectError.style.display = "none";
    }
    if(!validateEmail(email.value)) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
    if(!validateLength(address.value, 25)) {
        addressError.style.display = "block";
    } else {
        addressError.style.display = "none";
    }
    successMessage();
}
contactForm.addEventListener("submit", validateForm);

function successMessage() {
    if(validateLength(name.value, 1) && validateLength(subject.value, 10) && validateEmail(email.value) && validateLength(address.value, 25)) {
        
        contactForm.innerHTML = `<div class="success">
                                    <p>The form was successfully submitted.</p>
                                    <p>Thanks for getting in touch!</p>
                                    <a href="index.html">Return to home page</a>
                                </div>
                                `;
    }
}

function validateLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contolEmailInput = regEx.test(email);
    return contolEmailInput;
}

function createHtml() {
    breadcrumb.innerHTML = `<a href="index.html">Rick and Morty Characters</a> / <p" class=currentPage>${h1.innerHTML}</p>`;
}
createHtml();