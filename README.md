# study NextJs

- 앱에 있는 페이지들이 미리 렌더링됨

- react는 client-side-rendering
  - `<div id="root"></div>` 라는 곳에 모든 것을 불러옴
  - 브라우저가 유저가 보는 UI를 만드는 모든 것을 함
  - 자바스크립트가 모든 UI 만듦
  - 네트워크 환경이 좋지 않은 곳에서는 어떤 UI도 안 뜨고 흰 화면만 보이는 경우가 발생할 수 있음
- next.js는 실제 html 파일로 이루어져 있어서 네트워크 환경 상관없이 화면을 볼 수 있다.
  - 앱의 초기 상태를 활용하여 미리 렌더링 -> pre-rendering
  - react.js를 프론트엔드 안에서 실행하는 것 -> hydration
  - 초기 상태의 component로 된 미리 생성된 HTML 페이지를 유저가 보게 됨
  - 상호작용이 일어나면 react.js는 그걸 받아서 아주 잘 동작
  - SEO에 좋음

next.js가 react.js를 백엔드에서 동작 시켜서 페이지를 미리 만들고 -> 컴포넌트 렌더 -> 컴포넌트 렌더 후 HTML이 되고 -> next.js가 HTML을 페이지의 소스코드에 넣음 -> 유저가 자바스크립트, react.js가 로딩되지 않아도 콘텐츠를 볼 수 있음
react.js가 로딩되었을 때, 기본적으로 존재하는 것들과 연결이 되어 일반적인 react.js 앱이 된다.

- next.js 앱 내에서 페이지를 네비게이트할 때 사용해야만 하는 특정 컴포넌트가 존재

  - `<a>` 태그 단독 사용 안 됨 -> 전체 페이지 새로고침
  - `<Link>` 태그로 `<a>` 태그 감싸서 사용
  - `<Link>` 태그는 href에 지정한 경로로 이동하는 일만 함

- jsx style

  - `<style jsx>`는 style을 컴포넌트 내로 한정함

- next.js 는 렌더링되기 전 `_app.js` 파일을 본다
  - next.js는 \_app.js를 불러와서 그 안에 있는 함수를 호출한다.
  - {Component, pageProps} 2개의 인자가 함수 안에 들어감
  - 페이지나 컴포넌트 안에서 css 파일을 import 하고 싶다면 반드시 module이어야만 한다.
  - \_app.js의 컴포넌트 안 에서는 import 가능
