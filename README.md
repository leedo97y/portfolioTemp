# 📁 PortfoiloTemp

<br/>

포트폴리오를 만들며, 템플릿을 함께 만들었습니다.
<br/>

배포는 하지 않은 상태이며, 간단한 디자인과 함께 반응형으로 제작되었습니다.
<br/>

템플릿을 사용하시려면 `data.template.json` 코드를 참고하여 `data.json`을 작성해주세요.
<br/>

현재는 `Interface`를 작성하지 않고 `any`를 사용하고 있으며, 작성하신 `data.json`를 참고한 `Type`을 지정하여 사용해주세요.
<br/>

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

  <img width="600" alt="profile temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/0809645f-ecfc-4870-8889-29227228eb15">

  - 반응형으로 구성하며 정렬을 위해 `ProfileText`, `IntroComponents`의 컴포넌트로 분리하여 구성했습니다.
  - 이름, 생년월일, 주소, 이메일 주소, 깃헙 주소, 블로그 주소, 짧은 소개글로 이루어져 있습니다.

- ### 프로젝트 부분

  <img width="600" alt="project temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/7b32cebf-20e8-4d39-8c87-6e7220fd22cd">

  - `time-line`을 사용하여 진행한 프로젝트를 시간 순으로 보여줍니다.
  - 각 포트폴리오의 메인 페이지 이미지와 기술스택, 프로젝트 기간, 기여도, 팀 구성, 짧은 프로젝트 소개글로 이루어져 있습니다.
  - 회면의 맨 위로 올려주는 `TopButton`을 추가해주었습니다.

- ### 프로젝트 세부 페이지

  <img width="600" alt="detail page" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/a843a4ba-5683-430c-872e-1223c5cf0126">

  - `time-line`의 각 프로젝트 '자세히 보기' 버튼을 클릭하여 볼 수 있습니다.
  - 프로젝트 로고와 프로젝트 기간, 메인 페이지 이미지, 프로젝트를 보여줄 수 있는 링크들, 기술 스택, 프로젝트 설명글로 이루어져 있습니다.
  - 이전 화면으로 돌아가게 해주는 `PrevBtn`을 추가해주었습니다.

<br/>

### 📱 모바일 사이즈 예시

> iphone SE size

| <img width="373" alt="iphoneSE main temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/ac219f46-392c-4dfb-843a-8c6ce845a894"> | <img width="373" alt="iphoneSE project temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/778e1b54-a4b7-4ef4-b2d9-895563a3f616"> | <img width="373" alt="iphoneSE detail temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/68ae782b-5b85-4c0f-ab1a-07605ffdf0be"> |
| :---------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| iphoneSE profile part temp                                                                                                                      | iphoneSE project part temp                                                                                                                         | iphoneSE project detail temp                                                                                                                      |

<br/>

> Galaxy Fold size

| <img width="265" alt="galaxy fold main temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/26a7ed7a-3623-432a-93d7-aacea30b88e3"> | <img width="265" alt="galaxy fold dt temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/ecde74af-6f63-45b1-8d97-a3b9f1ca8e4a"> |
| :------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Galaxy Fold main temp                                                                                                                              | Galaxy Fold project detail temp                                                                                                                  |

<br/>

> Galaxy A51/71 size

| <img width="203" alt="galaxy A51:71 main temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/78a4de2f-6f0e-4eda-a861-d02fd17f9d2b"> | <img width="203" alt="galaxy A51:71 dt temp" src="https://github.com/leedo97y/portfolioTemp/assets/99410440/40ac6f71-ad4b-4778-b2a0-16f53140a3b4"> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Galaxy A51/71 main temp                                                                                                                              | Galaxy A51/71 project detail temp                                                                                                                  |

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
