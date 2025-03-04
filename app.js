const nameElement = document.querySelector("#name");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const errorElement = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (nameElement.value === "" || nameElement.value === null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer the 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less then 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password can not be password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
