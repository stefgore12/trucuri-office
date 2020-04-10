const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
const lines = document.querySelectorAll(".menu-btn div");

btn.addEventListener("click", function () {
  nav.classList.toggle("show");
  lines.forEach((line) => {
    line.classList.toggle("active");
  });
});
