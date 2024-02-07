const submitBtn = document.querySelector(".submit-btn");
const resultRate = document.querySelector(".result");
const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputSelect = document.querySelector("input[name=rate]:checked");
  resultRate.textContent = inputSelect?.value;

  section1.classList.toggle("hidden");
  section2.classList.toggle("hidden");
});
