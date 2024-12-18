const medDetailsOne = document.querySelector(".med_details_one");
const medDetailsTwo = document.querySelector(".med_details_two");
const medDetailsThree = document.querySelector(".med_details_three");
const medDetailsFour = document.querySelector(".med_details_four");

const medHideOne = document.querySelector(".med_details_close_one");
const medHideTwo = document.querySelector(".med_details_close_two");
const medHideThree = document.querySelector(".med_details_close_three");
const medHideFour = document.querySelector(".med_details_close_four");

document.querySelector(".med_btn1").addEventListener("click", () => {
  medDetailsOne.classList.add("show");
});
document.querySelector(".med_btn2").addEventListener("click", () => {
  medDetailsTwo.classList.add("show");
});
document.querySelector(".med_btn3").addEventListener("click", () => {
  medDetailsThree.classList.add("show");
});
document.querySelector(".med_btn4").addEventListener("click", () => {
  medDetailsFour.classList.add("show");
});


medHideOne.addEventListener("click", () => {
  medDetailsOne.classList.remove("show");
});
medHideTwo.addEventListener("click", () => {
  medDetailsTwo.classList.remove("show");
});
medHideThree.addEventListener("click", () => {
  medDetailsThree.classList.remove("show");
});
medHideFour.addEventListener("click", () => {
  medDetailsFour.classList.remove("show");
});

