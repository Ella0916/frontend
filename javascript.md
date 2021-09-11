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
