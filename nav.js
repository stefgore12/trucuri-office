const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");

btn.addEventListener("click", function () {
  nav.classList.toggle("show");
  document.querySelector(".line1").classList.toggle("active");
  document.querySelector(".line2").classList.toggle("active");
  document.querySelector(".line3").classList.toggle("active");
});
