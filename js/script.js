// Gallery Script

const container = document.querySelector(".imgOfDay");
const url =
  "https://api.nasa.gov/planetary/apod?api_key=14K7PBgaKR42ojKR2dDAlzNzNiOiWmCT5OTBlMek";

async function getimage() {
  try {
    const response = await fetch(url);
    const images = await response.json();
    console.log(images);
    container.innerHTML = "";

    container.innerHTML += `
	<h2 class="title">${images.title}</h2>
	<p>${images.date}</p>
	<img class="image" src="${images.url}">
	<p class="explanation">${images.explanation}</p>
	<p>By: ${images.copyright}</p>`;
  } catch (error) {
    console.log(error);
    container.innerHTML = "Sorry, there was an error. :( ";
  }
}
getimage();

// Subscribe Script

const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm() {
  event.preventDefault();

  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}
form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
