## React Init

### 목적

: React 프로젝트 진행 시 빠르고 효율적인 환경 세팅을 위해 init 버전을 제공합니다.

### 설치된 패키지

<div>
 <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
 <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
 <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
 <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
</div>
### 폴더 구조

```zsh
📦public
 ┗ 📂Img
📦src
 ┣ 📂API // API 폴더
 ┃ ┗ 📜UserAPI.js
 ┣ 📂Layout         // Layout으로 사용되는 컴포넌트 폴더
 ┃ ┣ 📜Header.js
 ┃ ┗ 📜Layout.js
 ┣ 📂Pages          // 서비스 구조에 사용되는 Page 폴더
 ┃ ┣ 📂HomePage
 ┃ ┃ ┗ 📜HomePage.js
 ┃ ┗ 📂MyPage
 ┃ ┃ ┗ 📜MyPage.js
 ┣ 📂Style          // thems, font 등 스타일로 사용되는 컴포넌트 폴더
 ┃ ┗ 📜theme.js
 ┣ 📂Util           // 자주 사용하는 컴포넌트들을 모아 놓은 폴더
 ┃ ┗ 📜Container.js
 ┣ 📂etc            // 기타
 ┃ ┗ 📜Routes.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```
