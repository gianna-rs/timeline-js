opera_button.addEventListener("click", function () {
  console.log("opera");
  intro_section.classList.add("hide");
  opera_section.classList.remove("hide");
  edmonton_section.classList.add("hide");
  calgary_section.classList.add("hide");
  document.body.classList.add("operaButton");
  document.body.classList.remove("introButton");
  document.body.classList.remove("edmontonButton");
  document.body.classList.remove("calgaryButton");
});

edmonton_button.addEventListener("click", function () {
  console.log("edmonton");
  intro_section.classList.add("hide");
  opera_section.classList.add("hide");
  edmonton_section.classList.remove("hide");
  calgary_section.classList.add("hide");
  document.body.classList.add("edmontonButton");
  document.body.classList.remove("introButton");
  document.body.classList.remove("calgaryButton");
  document.body.classList.remove("operaButton");
});

calgary_button.addEventListener("click", function () {
  console.log("calgary");
  intro_section.classList.add("hide");
  opera_section.classList.add("hide");
  edmonton_section.classList.add("hide");
  calgary_section.classList.remove("hide");
  document.body.classList.add("calgaryButton");
  document.body.classList.remove("introButton");
  document.body.classList.remove("edmontonButton");
  document.body.classList.remove("operaButton");
});

intro_button.addEventListener("click", function () {
  console.log("intro");
  intro_section.classList.remove("hide");
  opera_section.classList.add("hide");
  edmonton_section.classList.add("hide");
  calgary_section.classList.add("hide");
  document.body.classList.add("introButton");
  document.body.classList.remove("edmontonButton");
  document.body.classList.remove("calgaryButton");
  document.body.classList.remove("operaButton");
});
