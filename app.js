const form = document.querySelector("form");
const inputs = Array.from(document.querySelectorAll(".input"));
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
    let isValid = true;
  
    inputs.forEach((input) => {
      const value = input.value.trim();
      const name = input.getAttribute("name");
      const type = input.getAttribute("type")
      let errorMessage = "";
  
      if (value === "") {
        errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} cannot be blank`;
        isValid = false;
      } else if (type === "email" && !isEmail(value)) {
        errorMessage = "Please enter a valid email";
        isValid = false;
      } else if (type === "password" && value.length < 8) {
        errorMessage = "Password must be at least 8 characters long";
        isValid = false;
      } else if (type === "confirmPassword" && value !== document.getElementById("password").value.trim()) {
        errorMessage = "Passwords do not match";
        isValid = false;
      }
  
      if (errorMessage) {
        showError(input, errorMessage);
      } else {
        setSuccess(input);
      }
    });
  
    if (isValid) {
      showSuccessMessage();
      resetInputs();
    } else {
      showErrorMessage();
    }
  }
  
  function showSuccessMessage() {
    alert("User registered successfully!");
  }
  
  function showErrorMessage() {
    alert("Please fill the form correctly.");
  }
  
  function resetInputs() {
    form.reset();
    inputs.forEach((input) => {
        input.classList.remove("success", "error");
      });
  }
  
function setSuccess(input) {
  const small = input.nextElementSibling;
  small.textContent = "";
  input.classList.remove("error");
  input.classList.add("success");
}

function showError(input, message) {
  const small = input.nextElementSibling;
  small.style.color = "red";
  small.textContent = message;
  input.classList.remove("success");
  input.classList.add("error");
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
