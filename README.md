# vuex & router - 로그인 상태 관리 하기

## *Install*
<details>
<summary>펼치기/접기</summary>
<br>

- ### vue/cli 설치

  ```bash
  npm install -g @vue/cli
  ```

- ### vue-cli 설치 확인

  ```bash
  vue --version
  ```
- ### vue project 생성

  ```bash
  vue create {프로젝트명}
  ```

- ### 개발 환경 구축 옵션 선택
  선택을 통해 개발환경을 구축할 수 있다
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: (Use arrow keys)
    Default ([Vue 3] babel, eslint)
    Default ([Vue 2] babel, eslint)
  > Manually select features
  ```

- ### 기본적으로 사용할 라이브러리 선택 (Babel, Router, Vuex)  
  Select는 `Space`-Key Next는 `Enter`-Key  
  (Ctrl + A는 전체선택이다.)  

  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and
  <enter> to proceed)
  (*) Babel
  ( ) TypeScript
  ( ) Progressive Web App (PWA) Support
  (*) Router
  (*) Vuex
  ( ) CSS Pre-processors
  (*) Linter / Formatter
  ( ) Unit Testing
  ( ) E2E Testing
  ```

- ### Vue version 2.x 선택
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
    3.x
  > 2.x
  ```

- ### 라우터 History 모드 사용 여부 - Yes(Y)

  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
  ```

- ### 린트 선택 : prettier
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Pick a linter / formatter config:
    ESLint with error prevention only
    ESLint + Airbnb config
    ESLint + Standard config
  > ESLint + Prettier
  ```
- ### 코드정리 여부(save/git commit): save
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Pick a linter / formatter config: Prettier
  ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
  >(*) Lint on save
  ( ) Lint and fix on commit
  ```
- ### 개발 환경 관리 파일 - dedicated config files로 선택
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Where do you prefer placing config for Babel, ESLint, etc.?
  > In dedicated config files
  In package.json
  ```

- ### 현재 선택한 개발 환경을 저장할 것인지 여부- No(n)
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
  ? Save this as a preset for future projects? (y/N) N
  ```

</details>