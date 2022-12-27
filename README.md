# 실행방법

## 로그인, 회원가입

홈페이지에서 이메일과 비밀번호를 입력후 버튼을 누르면 로그인과 회원가입 가능.

로그인, 회원가입 실패시 alert창 뜬다. 로그인, 회원가입 성공시 jwt토큰 로컬스토리지에 저장

로그인 성공시 todo페이지로 자동 이동

## todo페이지

todo페이지 이동시 api get 호출로 todoLIst를 가져온다.

input창에 todo입력후 추가 버튼 클릭시 api post 호출 후 api get으로 todoList를 가져온다

수정버튼 클릭시 input활성화. 완료버튼 클릭시 input 텍스트 선. 저장버튼 클릭시 api put 호출 후 api get으로 todoList를 가져온다삭제버튼 클릭시 api deleate 호출 후 api get으로 todoList를 가져온다

## 배포 주소

https://imaginative-moxie-72c9b9.netlify.app/

## 동영상

https://drive.google.com/file/d/14keP-vrx_QPgb_mpa-QQuff8ZHlTOjTB/view?usp=share_link
