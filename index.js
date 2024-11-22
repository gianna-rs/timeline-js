opera_button.addEventListener("click", function () {
  console.log("opera");
  intro_section.style.display = "none";
  opera_section.style.display = "initial";
  edmonton_section.style.display = "none";
  calgary_section.style.display = "none";
  document.body.classList.add("operaButton");
  document.body.classList.remove("introButton");
  document.body.classList.remove("edmontonButton");
  document.body.classList.remove("calgaryButton");
});

edmonton_button.addEventListener("click", function () {
  console.log("edmonton");
  intro_section.style.display = "none";
  opera_section.style.display = "none";
  edmonton_section.style.display = "initial";
  calgary_section.style.display = "none";
  document.body.classList.add("edmontonButton");
  document.body.classList.remove("introButton");
  document.body.classList.remove("calgaryButton");
  document.body.classList.remove("operaButton");
});

calgary_button.addEventListener("click", function () {
  console.log("calgary");
  intro_section.style.display = "none";
  opera_section.style.display = "none";
  calgary_section.style.display = "initial";
  edmonton_section.style.display = "none";
  document.body.classList.add("calgaryButton");
  document.body.classList.remove("introButton");
  document.body.classList.remove("edmontonButton");
  document.body.classList.remove("operaButton");
});

intro_button.addEventListener("click", function () {
  console.log("intro");
  intro_section.style.display = "initial";
  opera_section.style.display = "none";
  edmonton_section.style.display = "none";
  calgary_section.style.display = "none";
  document.body.classList.add("introButton");
  document.body.classList.remove("edmontonButton");
  document.body.classList.remove("calgaryButton");
  document.body.classList.remove("operaButton");
});
