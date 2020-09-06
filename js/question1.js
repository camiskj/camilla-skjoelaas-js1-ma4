const contactForm = document.querySelector("#contactForm")
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

function validateLength() {
    event.preventDefault();

    if (lastName.value.trim().length > 4) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
}

contactForm.addEventListener("submit", validateLength);