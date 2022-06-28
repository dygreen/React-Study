# React-Study
2022.02.28 START! ~

* JSX를 이용해 HTML blog 페이지 제작, state로 버튼 기능 개발(수정/가나다순 정렬 버튼) : (folder) src
  + Component 문법 / 삼항연산자를 통한 '모달창 스위치' 기능 / map 함수를 통해 글제목 갯수에 맞게 HTML 생성 및 출력
     / props 문법(컴포넌트간 자료 전달)을 통해 '제목을 누르면 new글의 제목이 해당 제목으로 바뀌는' 기능
     / input을 통해 '블로그 글발행' 기능 

***

* (folder) shoppingMall_project
  1) import / export를 사용해 상품 데이터 '데이터바인딩'
  2) Router) Link, Switch, History로 '페이지 구분' // useHistory, useParams로  '데이터바인딩'
  3) styled-components / SASS ) class없는 css 스타일링 및 css에서 여러 문법을 사용할 수 있는 SASS
  4) Lifecycle Hook / useEffect Hook : useEffect를 활용해 컴포넌트가 mount 됐을 때 알람창이 2초 후에 꺼지는 기능 구현
  5) Ajax 요청 ( by axios.get )으로 상품 데이터 추가 '데이터바인딩'
     - 더보기 버튼을 누르면 추가한 상품이 보여지는 기능
     - 보여줄 상품이 끝나면 더보기 버튼 숨기는 기능
     - 더보기 버튼을 누른 횟수에 따라 데이터 요청하는 경로를 바꾸는 기능
     - 데이터 요청에 실패했을 때 알림창UI 띄우는 
  6) 상위 Component의 state를 여러 하위 Component로 props 전송하기: 재고 상태 표시 + 주문하기 버튼을 누르면 재고가 하나 줄어듦
     + Context API 를 통해 state 전송하여 사용
  7) react-transition-group 라이브러리를 통해 Tab기능 만들기 + 애니메이션 
  8) (file: Cart.js + index.js) 'Redux'를 사용해 장바구니 Cart 페이지
     + reducer/dispatch를 이용해 데이터 수정: 장바구니 속 +/- 버튼 클릭시 수량이 변경되는
     + reducer를 한 개 더 추가해, state 여러개 만들 때 redux 사용법 학습 (alert창 닫기 버튼)
     + (+Detail.js) dispatch(playload로 데이터 보내기): 주문하기 버튼을 누르면 장바구니 상품 추가 기능
  9) 메인페이지 <Card> 누르면 제품 상세페이지(/detail)로 이동
  10) localStorage에 최근 본 상품 데이터 저장


***
### [06.28] Cat-Maker
* HTML 파일 내에 React를 추가해 사용
* `useState`를 사용하여 'n번째 고양이 가라사대'의 n 숫자 바꾸기
* `.map()`을 사용하여 하단 favorite 고양이 사진 리스트 보여주기
