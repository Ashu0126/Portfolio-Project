var contact = document
  .querySelector(".contact")
  .addEventListener("click", openList);

function openList() {
  document.querySelector("span div ul").classList.toggle("active");
  document.querySelector("span div ").classList.toggle("active");
}

//Netflix
const project_nameN = document.querySelectorAll("#projects #netflix");

function hoverDivN() {
  document.querySelector("#netflix #links").classList.add("active");
}

project_nameN.forEach((item) =>
  item.addEventListener("pointerenter", hoverDivN)
);
project_nameN.forEach((item) => item.addEventListener("pointerleave", outDivN));

function outDivN() {
  document.querySelector("#netflix #links").classList.remove("active");
}

//Paytm
const project_nameP = document.querySelectorAll("#projects #paytm");

function hoverDivP() {
  document.querySelector("#paytm #links").classList.add("active");
}

project_nameP.forEach((item) =>
  item.addEventListener("pointerenter", hoverDivP)
);
project_nameP.forEach((item) => item.addEventListener("pointerleave", outDivP));

function outDivP() {
  document.querySelector("#paytm #links").classList.remove("active");
}

//Quote
const project_nameQ = document.querySelectorAll("#projects #quote");

function hoverDivQ() {
  document.querySelector("#quote #links").classList.add("active");
}

project_nameQ.forEach((item) =>
  item.addEventListener("pointerenter", hoverDivQ)
);
project_nameQ.forEach((item) => item.addEventListener("pointerleave", outDivQ));

function outDivQ() {
  document.querySelector("#quote #links").classList.remove("active");
}

//First ProjecF
const project_nameF = document.querySelectorAll("#projects #first");

function hoverDivF() {
  document.querySelector("#first #links").classList.add("active");
}

project_nameF.forEach((item) =>
  item.addEventListener("pointerenter", hoverDivF)
);
project_nameF.forEach((item) => item.addEventListener("pointerleave", outDivF));

function outDivF() {
  document.querySelector("#first #links").classList.remove("active");
}

//BrewBerry
const project_nameB = document.querySelectorAll("#projects #brewberry");

function hoverDivB() {
  document.querySelector("#brewberry #links").classList.add("active");
}

project_nameB.forEach((item) =>
  item.addEventListener("pointerenter", hoverDivB)
);
project_nameB.forEach((item) => item.addEventListener("pointerleave", outDivB));

function outDivB() {
  document.querySelector("#brewberry #links").classList.remove("active");
}
