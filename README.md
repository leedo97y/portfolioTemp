# 📁 PortfoiloTemp

<br/>

포트폴리오를 만들며, 템플릿을 함께 만들었습니다.
<br/>

배포는 하지 않은 상태이며, `Interface`가 작성되지 않은 코드입니다.
<br/>

간단한 디자인과 함께 반응형 까지만 제작되었으며, `data.template.json` 코드를 참고하여 `data.json`을 작성하여 사용해주세요.
<br/>

> 이해가 어렵다면, [portfolioDo](https://github.com/leedo97y/portfolioDo)를 참고하여 작성해주세요!

<br/>
<br/>

## 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"/>

<br/>
<br/>

## 프로젝트 설명

포트폴리오는 프로필 부분과 프로젝트 부분으로 이루어져 있으며 반응형으로 구성되어있습니다.

포트폴리오의 모든 데이터는 각 페이지에서 찾을 필요없이 한번에 관리하기 위해 `data.json`이라는 파일을 만들어 작성하고, 이를 fetch하여 사용하고 있습니다.

프로젝트 상세설명은 다음과 같습니다.

- ### 프로필 부분

  <img width="600" alt="profile part" src="https://github.com/leedo97y/portfolioDo/assets/99410440/8c16da29-b5ff-4b80-92f1-322b4e5338f1">

  - 반응형으로 구성하며 정렬을 위해 `ProfileText`, `IntroComponents`의 컴포넌트로 분리하여 구성했습니다.
  - 이름, 생년월일, 주소, 이메일 주소, 깃헙 주소, 블로그 주소, 짧은 소개글로 이루어져 있습니다.

- ### 프로젝트 부분

  <img width="600" alt="project part" src="https://github.com/leedo97y/portfolioDo/assets/99410440/72c48d3c-d1ba-4bc6-b0bb-855c755e0c3e">

  - `time-line`을 사용하여 진행한 프로젝트를 시간 순으로 보여줍니다.
  - 각 포트폴리오의 메인 페이지 이미지와 기술스택, 프로젝트 기간, 기여도, 팀 구성, 짧은 프로젝트 소개글로 이루어져 있습니다.
  - 회면의 맨 위로 올려주는 `TopButton`을 추가해주었습니다.

- ### 프로젝트 세부 페이지

  <img width="600" alt="large  project detail" src="https://github.com/leedo97y/portfolioDo/assets/99410440/db7a8330-8ebc-49cd-851e-1165705fc948">

  - `time-line`의 각 프로젝트 '자세히 보기' 버튼을 클릭하여 볼 수 있습니다.
  - 프로젝트 로고와 프로젝트 기간, 메인 페이지 이미지, 프로젝트를 보여줄 수 있는 링크들, 기술 스택, 프로젝트 설명글로 이루어져 있습니다.
  - 이전 화면으로 돌아가게 해주는 `PrevBtn`을 추가해주었습니다.

<br/>

### 📱 모바일 사이즈 예시

> iphone SE size

| <img width="373" alt="iphoneSE profile" src="https://github.com/leedo97y/portfolioDo/assets/99410440/723e4334-ca89-4cde-bbf7-199aaf440ffe"> | <img width="373" alt="iphoneSE project" src="https://github.com/leedo97y/portfolioDo/assets/99410440/0926426c-81a9-4bc4-a8da-5942ea2df01e"> | <img width="373" alt="iphone SE project detail" src="https://github.com/leedo97y/portfolioDo/assets/99410440/447fc0f7-a482-4f7f-8b04-4a0b6331149e"> |
| :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| iphoneSE profile part                                                                                                                       | iphoneSE project part                                                                                                                       | iphoneSE project detail                                                                                                                             |

<br/>

> Galaxy Fold size

| <img width="265" alt="galaxy fold main" src="https://github.com/leedo97y/portfolioDo/assets/99410440/4d9cb6d1-ac8f-4b1f-a0c1-08d6f54f3e2a"> | <img width="265" alt="galaxy fold  project detail" src="https://github.com/leedo97y/portfolioDo/assets/99410440/2f842b98-689a-4336-aedd-0b6e06527873"> |
| :------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Galaxy Fold main                                                                                                                            | Galaxy Fold project detail                                                                                                                             |

<br/>

> Galaxy A51/71 size

| <img width="203" alt="galaxy A51:71 main" src="https://github.com/leedo97y/portfolioDo/assets/99410440/79e83f24-da27-47cd-8161-769af9897aa8"> | <img width="203" alt="galaxy A51:71  project detail" src="https://github.com/leedo97y/portfolioDo/assets/99410440/e78ceadb-d77d-440b-bc61-7d9ad61ec29f"> |
| :-------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Galaxy A51/71 main                                                                                                                            | Galaxy A51/71 project detail                                                                                                                             |

<br/>
<br/>

## How to run?

```bash
npm install
```

```bash
npm run dev
```

<br/>
