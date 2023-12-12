"script";

const ownername = document.querySelector(".name");
const cardnumber = document.querySelector(".number");
const cv = document.querySelector(".cv");
const eYear = document.querySelector(".YY");
const emonth = document.querySelector(".MM");
const Name = document.querySelector(".Ownername");
const numb = document.querySelector(".CaNumb");
const expireDate = document.querySelector(".edate");
const Month = document.querySelector(".MY");
const CVC = document.querySelector(".CVC");
const Complete = document.querySelector(".complete");
const submitted = document.querySelector(".submit");
const accept = document.querySelector(".Accept");
const form = document.querySelector(".form");

function updateTextContent() {
  ownername.textContent = Name.value;
  cardnumber.textContent = numb.value;
  eYear.textContent = expireDate.value;
  emonth.textContent = Month.value;
  cv.textContent = CVC.value;
}

const filled = function () {
  form.classList.add("hidden");
  submitted.classList.remove("hidden");
};

const refill = function () {
  form.classList.remove("hidden");
  submitted.classList.add("hidden");
};

Complete.addEventListener("click", function (e) {
  e.preventDefault();
  filled();
});

accept.addEventListener("click", function () {
  refill();
  ownername.textContent = Name.value = "Jane Appleseed";
  cardnumber.textContent = numb.value = "0000 0000 0000 0000";
  eYear.textContent = expireDate.value = "00";
  emonth.textContent = Month.value = "00";
  cv.textContent = CVC.value = "000";
});
