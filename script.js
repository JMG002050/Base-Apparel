const input = document.querySelector("input");
const form = document.querySelector(".email-form");
const wrapper = document.querySelector(".input-wrapper");

const message = document.createElement("p");
const iconError = document.createElement("img");

// Image path relative to the HTML document
iconError.src = "./resources/images/icon-error.svg";
iconError.alt = "";
iconError.classList.add("error-icon");

// Add icon to the wrapper, not the input
wrapper.appendChild(iconError);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    message.textContent = "Please provide a valid email";
    wrapper.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");
  } else {
    message.textContent = "You've been added to the list!";
    wrapper.classList.remove("has-error");
    input.removeAttribute("aria-invalid");
  }

  message.classList.add("alert");

  if (!message.isConnected) {
    form.insertAdjacentElement("afterend", message);
  }
});