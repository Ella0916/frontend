# frontend_0814

## 참고링크
https://github.com/

https://codesandbox.io/

www.w3schools.com

https://opentutorials.org/course/1

## HTML

### Introduxtion
https://www.w3schools.com/html/html_intro.asp

> 웹 페이지 구조 표시

> 웹 페이지 컨텐츠 표시
> - 텍스트 콘텐츠
> - 멀티미디어 콘텐츠 : 이미지, 비디오, 오디오 등 


### HTML Basic
> 기본 구조 Example Link : https://www.w3schools.com/html/html_intro.asp 


### HTML Elements
> https://www.w3schools.com/html/html_elements.asp

`(backtick)
```
<tagname> 첫번째 수업 </tagname>
* 시작태그만 있는 경우 : Empty Element 
```

> 포함관계(nested)
```
<html>
  <body>
    <h1>Heading</h1>
  </body>
</html>
```

> html-body-h1 관계<p>
>> html : body와의 관계 - 부모요소 / h1과의 관계 - 조상요소<p>
>> body : html과의 관계 - 자식요소 / h1과의 관계 - 자식요소<p>
>> h1 : body와의 관계 - 자식요소 / html과의 관계 - 자손요소
  
  
### HTML Attributes
> https://www.w3schools.com/html/html_attributes.asp<br>
> {X = 'Y'} ▶ 이 묶음을 '속성'이라고 한다.<br>
> Y값은 Value, X값은 name 이라고 한다.
 
  
### HTML Headings
> h1~h6 : 제목태그 (h > heading)

  
### HTML Paragraphs
> https://www.w3schools.com/html/html_paragraphs.asp
  
  
### HTML Links
> https://www.w3schools.com/html/html_links.asp
```
<a href="url">link text</a>
```
> a : anchor
> URL(Uniform Resource Locator) : 파일식별자(위치표시), 가장 넓은 의미의 인터넷 주소<br>
  

> 인터넷 주소<br> 
> - IP(Internet Protocol) : 숫자로 구성된 주소 (ex) 192.168.0.1) *원래주소
> - Domain Name : www.naver.com *www가 서버를 나타냄! 
> - ex) blog.naver.com/blog/123456 >> 서버 주소 + 상세 도메인 => url
> - 절대url 과 상대 url의 차이 알기
  
  
### HTML File 경로    
https://www.w3schools.com/html/html_filepaths.asp

절대 vs 상대
- 경로 위치 표시 방식
- 경로 표시 기준의 변경 여부
> 1) 절대경로
- ex) 대한민국 서울특별시 서초구 ~ 동 대호빌딩 801호 (절대경로방식)
- 도메인주소 + 상세경로까지 있는 url을 절대경로라고 한다. 
- ex) https://www.naver.com/blog/image/jpg
> 2) 상대경로
- ex) 강남역 11번 출구에서 3분 대호빌딩 (상대경로방식 - 출발지 위치를 기준으로 표기)
- 가능한 경우 상대 파일 경로를 사용하는 것이 가장 좋습니다.
- ex) /blog/image.jpg 혹은 image/jpg

