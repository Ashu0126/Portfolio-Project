var contact = document
  .querySelector(".contact")
  .addEventListener("click", openList);

function openList() {
  document.querySelector("span div ul").classList.toggle("active");
  document.querySelector("span div ").classList.toggle("active");
}
