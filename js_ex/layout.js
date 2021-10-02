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

// slide 롤링 효과 주기

// 시간의 개념이 포함된 반복 실행 함수
// setInterval (함수, 시간)

// 일정 시간이 지난 후 실행 함수
// setTimeout (함수, 시간)

// 시간 매개변수 값의 단위 ms : 1000ms = 1s

let currentIndex = 0;
let nextIndex = 1;
const slide = document.querySelectorAll(".slide");

console.log(slide);

setInterval(function () {
  if (nextIndex > 2) {
    nextIndex = 0;
  }

  slide[currentIndex].classList.remove("active");
  slide[nextIndex].classList.add("active");

  currentIndex = nextIndex;
  nextIndex++;
}, 3000);
