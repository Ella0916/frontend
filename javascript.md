# Javascript

## 사이트 소개

- https://programmers.co.kr/
- https://www.codeit.kr/
- https://roadmap.sh/

## Javascript (ECMA Script) 버전

- 2009 : ES5
- 2015 : ES6 (이후 minor한 부분이 업데이트 됨. 뒤에는 년도를 붙임)

## ES6 버전의 특징 (ES5에서의 major한 변화)

- 변수 scope 개념 확장
- class 게념 도입
- 함수 선언 형식 / 개념 추가
- 프론트엔드 프레임워크 / 라이브러리에 사용

## 프로그래밍 언어 공부

- 프로그래밍 언어 문법알기
- 프로그래밍 언어 활용하기
  - 알고리즘 > 반드시 공부
  - 로직 > 반드시 공부
  - 자료구조
  - API 활용 (만들어진 개발코드를 가져다가 쓰는 것)

## Javascript 문법

- 변수(데이터 타입) (수 = 값)

- 명령문(구문)

- 함수

- 배열, 객체, class

## Javascript 활용

- 이벤트

- html, css와의 관계를 파악

## Javascript 변수 : var

https://www.w3schools.com/js/js_variables.asp

- 변수를 정의/ 선언할 때 사용하는 키워드(예약어) 이다.
- ES5 버전에서 사용
- 값을 초기화한 후 자유롭게 변경이 가능하다.

```
var a;
var b;

var a, b; > 로 한번에 여러개를 선언할 수 있다.
```

## Javascript 변수 : let

https://www.w3schools.com/js/js_let.asp

- 변수를 정의/ 선언할 때 사용하는 키워드(예약어) 이다.
- 기능은 var과 같은 성질인데, 특징이 조금 다르다.
- 값을 초기화한 후 자유롭게 변경이 가능하다.

## Javascript 변수 : const (상수 변수)

- constant : 상수='항상 같은 숫자' (의 약자)
- 한번 값을 초기화하면 변경할 수 없음
  > ES5 버전에서는 일반 변수 var 만 존재 , ES6 일반변수 let, 상수변수 const 가 추가됨.

### 데이터 타입 (데이터의 종류)

https://codingisgame.tistory.com/1

- 1)숫자

  - 정수
  - 실수

- 2)논리

  - 참 (true)
  - 거짓 (false)

- 3)문자

  - 문자 (character)
  - 문자열 (string)

> 자바스크립트는 숫자, 논리, 문자 구분 외의 데이터 타입을 구분하지 않는다.
> 자바 스크립트는 숫자, 논리, 문자 데이터를 구분하는 변수 선언 키워드가 없기 때문이다.
> 데이터 타입을 구분해주는 자바스크립트가 있다. : 타입 스크립트
> https://www.samsungsds.com/kr/insights/TypeScript.html

## Javascript Assigned Operators (연산자)

https://www.w3schools.com/js/js_operators.asp

### 산술연산자

- +, -, \*, /, %

### 대입(할당)연산자

- =

```
b = a + 1;

a = a + 2; // 여러번 실행시 2씩 증가하는 식
축약 : a +=2; => a = a + 2;

-----------------------------------------------------------
<증감연산자>
a = a + 1; => 프로그래밍에서는 count 개념으로 사용됨

a += 1;

a++; (카운트의 의미가 있기 떄문에 '+1'의 경우 이렇게 쓰일 수 있다.)
-----------------------------------------------------------
a = a-1;

a-=1;

a--;
-----------------------------------------------------------
```

> ++, -- : 증감연산자

### 연결 연산자

```
"a" + "b" => ab (a와b를 붙여서 나타나게 하자.)

"a" + 1 => a1 (숫자도 문자로 만들어서 붙이고 싶은 경우)

"1" + 1 => 11 (숫자도 문자로 만들어서 붙이고 싶은 경우)

console.log("총합계 : " + sum);

```

> - 만 가능하다.

### 따옴표 사용방법

```
element.innerHTML = "<img =src=＼"picture.jpg"＼>"

element.innerHTML = "<img = src='picture.jpg'>"
```

> 같은 종류의 따옴표를 연달아 쓸 수 없다.
> 백슬래시를 쓰거나 작은따옴포 + 큰따옴표 구성으로 가야 한다.

### 비교 연산자

- ==, === : 데이터 타입 비교 여부에 따라서 다른 결과를 도출한다.

- 비교연산의 결과는 논리 데이터가 출력된다 : true 또는 false 이다.

### 논리 연산자

- 여러개의 비교식을 연결해서 연산할 때 사용
- 논리 데이터를 연산할 때 사용

> &&(and) : &&로 연결되는 비교식 또는 논리데이터가 모두 참일 때 전제가 참

```
true && truw => true
true && false => false
3 < 5 && 10 < 12 => true
```

| : pipe line

> || (or) : || 로 연결되는 비교식 또는 논리데이터가 하나라도 참이면 전제가 참

```
true || true =>true
true || false =>true
3<5 || 10>12 => true
```

## 명령문(구문) syntax

https://www.w3schools.com/js/js_if_else.asp

- 프로그램 실행 흐름을 제어 역할

### 1) 조건문/분기문

> if 구문
> https://www.w3schools.com/js/js_if_else.asp

```
if(conditions){
  // 코드블럭 1
}
---------------------------------
if(conditions){
  // 코드블럭 1
}
else {
// 코드블럭 2
}
----------------------------------
if(condition 1) {
  //코드블럭1
} else if (condition 2) {
  // 코드블럭 2
} else {
  // 코드블럭 3
}

- else if 블럭은 필요에 따라 여러개 쓸 수 있음
- else는 마지막에 한 번 쓴다.
```

> conditions 식의 결과가 true이면 실행코드 블럭을 실행, false 이면 실행하지 않음.
>
> conditions : 결과가 true / false가 나오는 식 ex) 비교식, 논리연산 등..
> conditions에 그냥 true 나 false가 들어가도 됨 \*문법상은 괜찮음 but 실행은 되지 않음.
>
> 0 : false
>
> 그 외의 정수 : true (1~~~ , -1 ~~~ )

> if 사용법
>
> - else if() {} : 필요한 개수만큼 사용 가능]
> - else {} : 멘마지막 부분에 사용

> swich 구문
> https://www.w3schools.com/js/js_switch.asp
>
> - expressions 식의 결과에 따라 여러 갈래로 분기함.
>
> - expressions : 결과는 숫자 or 문자의 형태임 (true / false 와는 관계가 없음.)

```
switch(expressions) {
  case '결과값1' :
  코드블럭1;
  break;

  case '결과값2' :
  코드블럭2;
  break;

  case '결과값3' :
  코드블럭3;
  break;

  default :
  코드블럭4;
}
```

### 2) 반복문

> for loop
> https://www.w3schools.com/js/js_loop_for.asp
>
> - 특정 횟수만큼 반복 실행

## 함수 (function)

- 특정한 기능을 실행(독립적으로 실행)할 수 있는 여러 코드를 묶어놓은 블럭
- 함수 선언 (declaration) : 함수 정의 (defination)
- 호출 (call) : 함수 실행
- 재사용 가능
