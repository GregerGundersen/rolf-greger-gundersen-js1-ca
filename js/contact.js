const formContainer = document.querySelector("#contactform");
const button = document.querySelector('button[type="submit"]');

const formValidator = (e) => {
  //Variables to get form values
  const name = document.querySelector("#name");
  const address = document.querySelector("#address");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");

  //Variables to erase spaces from input values
  const nameTrim = name.value.trim();
  const addressTrim = address.value.trim();
  const emailTrim = email.value.trim();
  const subjectTrim = subject.value.trim();

  //Variables to get error messages
  const nameError = document.querySelector("#nameError");
  const addressError = document.querySelector("#addressError");
  const emailError = document.querySelector("#emailError");
  const subjectError = document.querySelector("#subjectError");

  e.preventDefault();

  nameError.innerHTML = "";
  if (nameTrim === "") {
    nameError.innerHTML =
      '<i class="fas fa-exclamation-circle"></i> Name is required to submit form.';
  } else if (/\d/.test(nameTrim)) {
    nameError.innerHTML =
      '<i class="fas fa-exclamation-circle"></i>Name can not include numbers.';
  }

  addressError.innerHTML = "";
  if (addressTrim.length < 25) {
    addressError.innerHTML =
      '<i class="fas fa-exclamation-circle"></i> Address must be at least 25 characters.';
  }

  emailError.innerHTML = "";
  let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailPattern.test(emailTrim)) {
    emailError.innerHTML +=
      '<i class="fas fa-exclamation-circle"></i> A valid e-mail address is required.';
  }

  if (subjectTrim.length < 10) {
    subjectError.innerHTML =
      '<i class="fas fa-exclamation-circle"></i> Subject must be at least 10 characters.';
  }

  if (
    nameError.innerHTML === "" &&
    addressError.innerHTML === "" &&
    subjectError.innerHTML === "" &&
    emailError.innerHTML === ""
  ) {
    formContainer.submit();
    button.innerHTML = "Submitted!";
  }
};

formContainer.addEventListener("submit", formValidator);
