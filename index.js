opera_button.addEventListener("click", function () {
  console.log("opera");
  intro_section.style.display = "none";
  opera_section.style.display = "initial";
  edmonton_section.style.display = "none";
  calgary_section.style.display = "none";
});

edmonton_button.addEventListener("click", function () {
  console.log("edmonton");
  intro_section.style.display = "none";
  opera_section.style.display = "none";
  edmonton_section.style.display = "initial";
  calgary_section.style.display = "none";
});

calgary_button.addEventListener("click", function () {
  console.log("calgary");
  intro_section.style.display = "none";
  opera_section.style.display = "none";
  calgary_section.style.display = "initial";
  edmonton_section.style.display = "none";
});

intro_button.addEventListener("click", function () {
  console.log("intro");
  intro_section.style.display = "initial";
  opera_section.style.display = "none";
  edmonton_section.style.display = "none";
  calgary_section.style.display = "none";
});
