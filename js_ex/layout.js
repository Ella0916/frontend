// 햄버거 버튼 가져오기
const hamburger = document.querySelector(".hamburger");
// gnb 가져오기
const gnb = document.querySelector(".gnb");
// 닫기 버튼 가져오기
const close = document.querySelector(".close");

// on class 추가하기
hamburger.addEventListener("click", function () {
  gnb.classList.add("on");
  close.classList.add("on");
});
// 버튼 누르면 왔다갔다 하게 조절하기!
close.addEventListener("click", function () {
  gnb.classList.remove("on");
  close.classList.remove("on");
});
