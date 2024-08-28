export const PORTFOLIO_DATA = [
  {
    index: 0,
    slug: "matma",
    date: "2015",
    color: "#15a34a",
    imageSize: { height: 180, width: 90 },
    windowsStoreLink:
      "https://www.microsoft.com/pl-pl/p/matma/9nblggh6hs3l?activetab=pivot:overviewtab",
    screenshotsCount: 3,
    screenshotSize: { height: 460, width: 250 },
    casesCount: 0,
    title: "Matma++",
    description:
      "The app was created by a student for students and includes calculators, tables, and math formulas.",
    about:
      "My first big app that I created after classes at school. Matma++ was intended to create tools for students to do quick calculations, but also included math tables and formulas.<br /><br />Despite starting my programming adventure early, it was after the release of this app that I started programming more with focus on end users.",
    usedTechnologies: "C#,UWP,WP Platform,XAML",
  },
  {
    index: 1,
    slug: "logicos",
    date: "2016-2017",
    color: "#0a91b2",
    imageSize: { height: 180, width: 90 },
    windowsStoreLink:
      "https://www.microsoft.com/en-us/p/logicos/9nblggh51blc?rtc=1&activetab=pivot:overviewtab",
    screenshotsCount: 3,
    screenshotSize: { height: 460, width: 250 },
    casesCount: 0,
    title: "Logicos 1, 2, 3, Forever",
    description:
      "A series of puzzle games appreciated by users. Interesting puzzles, unusual solutions is what distinguishes these games.",
    about:
      "Logicos is a series of puzzle games released for the Windows universal platform and Windows Phone. The idea for the games was born in my head during my studies in technical school.<br /><br />Applications appreciated by tens of thousands of users.<br /><br />Working on the application taught me a lot, not only about programming, but also about communication with users or promotion.<br /><br /><b>Logicos is a really creative production.</b><br /><i>AntyApps</i><br /><br /><b>Logicos is a fun game and has plenty of puzzles to give your brain a workout.</b><br /><i>Windows Central</i>",
    usedTechnologies: "C#,UWP,WP Platform,XAML",
  },
  {
    index: 2,
    slug: "whats-inside",
    date: "2017",
    color: "#5a6778",
    imageSize: { height: 180, width: 90 },
    screenshotsCount: 2,
    screenshotSize: { height: 580, width: 320 },
    casesCount: 0,
    title: "What's inside",
    description:
      "A box opening puzzle game for the Universal Windows Platform.",
    about:
      "A simple logical mobile game, where you open a box and solve different level puzzles. Made for Windows 10.",
    usedTechnologies: "C#,UWP,XAML",
  },
  {
    index: 3,
    slug: "qopml",
    date: "2019-2020",
    color: "#e39922",
    imageSize: { height: 165.94, width: 270 },
    screenshotsCount: 2,
    screenshotSize: { height: 417, width: 800 },
    casesCount: 0,
    title: "QoP-ML Web Tool",
    description: "UI wrapper for making simulations in QoP-ML language.",
    about:
      "Web application for making simulations in QoP-ML language that allows you to perform multi-faceted security analysis of complex information systems. Allows you to generate scripts based on a graphical interface using drag and drop feature.",
    usedTechnologies: "Typescript,React,Node JS,MobX,AQoPA engine,MySQL",
  },
  {
    index: 4,
    slug: "simple-weather-app",
    date: "2021",
    color: "#2463eb",
    imageSize: { height: 184.69, width: 90 },
    githubLink: "https://github.com/lukaszkurantdev/weather-app",
    screenshotsCount: 3,
    screenshotSize: { height: 523, width: 250 },
    casesCount: 0,
    title: "Simple Weather App",
    description:
      "A simple weather checker application based on an open source API.",
    about:
      "An app that displays the weather made in React Native. The application uses open source weather API.",
    usedTechnologies: "Typescript,React Native",
  },
  {
    index: 5,
    slug: "dzielo-biblijne",
    date: "2021",
    color: "#b43342",
    imageSize: { height: 184.69, width: 90 },
    screenshotsCount: 3,
    screenshotSize: { height: 413, width: 200 },
    casesCount: 3,
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.dzielobiblijne&hl=pl&gl=US",
    appStoreLink:
      "https://apps.apple.com/pl/app/dzie%C5%82o-biblijne/id1595265008?l=pl",
    title: "Dzieło Biblijne",
    description:
      "Application with bible texts, readings, theological aids and a map of the holy land. The system includes a CMS panel for managing data in the application.",
    about:
      "The application in Polish contains Bible texts, comments, curiosities, Bible dictionary and Bible map using Open street maps.<br /><br />My job was to create both a powerful mobile application and a CMS to manage the data displayed in the application.",
    usedTechnologies:
      "Typescript,React Native,Redux,Redux Saga,Open street maps,Strapi,ReactJS,MongoDB",
    cases: [
      {
        title: "Rich text editor",
        description:
          "One of the goals of the project was to be able to link biblical dictionary items directly in commentary texts. In order to do that I created a custom plugin Strapi, in which the client could easily add the necessary links.",
      },
      {
        title: "Displaying data",
        description:
          "Data in the CMS is entered using a rich text editor in HTML form. To increase the efficiency and readability of texts in the application, a library was used to translate HTML tags into native components.",
      },
      {
        title: "Tablet support",
        description:
          "The application was also targeting tablets, hence a scalable interface had to be made.",
      },
    ],
  },
  {
    index: 7,
    slug: "constcash-web",
    date: "2022",
    color: "#e39922",
    imageSize: { height: 165.94, width: 270 },
    screenshotsCount: 0,
    screenshotSize: { height: 580, width: 320 },
    casesCount: 0,
    websiteLink: "https://constcash.com/",
    title: "ConstCash Web",
    description: "A website showcasing the ConstCash mobile application.",
    about:
      "After the ConstCash app was published in the App Store, it was necessary to create a recognizable website with a product presentation.<br /><br />Interesting Fact: After hovering the mouse over the phone mockup, an interesting animation using the AtroposJS framework was applied.",
    usedTechnologies: "NextJS,Tailwind,AtroposJS",
  },
  {
    index: 8,
    slug: "plant-you-grow",
    date: "2022-2023",
    color: "#7ba25e",
    imageSize: { height: 165.94, width: 270 },
    screenshotsCount: 0,
    screenshotSize: { height: 580, width: 320 },
    casesCount: 0,
    websiteLink: "https://dogtronic.io/case-studies/plant-you-grow/",
    title: "Plant You Grow",
    description:
      "A system for monitoring and making advanced measurements of plants and climatic conditions.",
    about:
      "My role was to create a method to take plant measurements using a mobile device, develop a mobile application, a web application (including a backend) and documentation.<br /><br />You can learn more in the case study.",
    usedTechnologies:
      "Typescript,ReactJS,React Native,NextJS,NextJS,MongoDB, Offline support, Native components,Java,Objective-C,OpenCV,OneSignal,Docker",
  },
  {
    index: 9,
    slug: "portfolio-page",
    date: "2024",
    color: "#2463eb",
    imageSize: { height: 165.94, width: 270 },
    screenshotsCount: 0,
    screenshotSize: { height: 580, width: 320 },
    casesCount: 0,
    githubLink: "https://github.com/lukaszkurantdev/personal-website",
    title: "Portfolio page",
    description:
      "Public code of my current personal website along with my portfolio.",
    about:
      "My website is designed to present information about my professional life, along with a portfolio presentation and an index of articles.",
    usedTechnologies: "Typescript,NextJS",
  },
  {
    index: 6,
    slug: "constcash",
    date: "2021-2024",
    color: "#e39922",
    imageSize: { height: 174.43, width: 85 },
    screenshotsCount: 3,
    screenshotSize: { height: 693, width: 320 },
    casesCount: 4,
    appStoreLink:
      "https://apps.apple.com/app/apple-store/id1586637609?pt=123524905&ct=lkwebpage&mt=8",
    title: "ConstCash",
    description:
      "A proprietary security-focused personal finance management application. Manage budgets, view statistics and create your own financial goals.",
    about:
      "ConstCash (previously Casha) is a personal finance management app currently prepared for iOS.<br /><br />Among the main tasks of the application is cash flow management, posting income and expenses, but also reviewing statistics and advanced reports, budgets, financial goals or recurring payments.<br /><br />The idea for the app was born a year and a half ago, and during that time I've been effectively developing the project with new features after my main job hours. In September 2021 the first version of the application was published in the App Store. Since then, the application is constantly developed.",
    usedTechnologies:
      "Typescript,React Native,VisionKit,MobX,Detox,React Native Testing Library,OneSignal,AppCenter",
    cases: [
      {
        title: "State management",
        description:
          "During the development phase, the library for managing application state was changed from Redux to MobX. The large amount of user data held locally in the device memory requires fast and efficient solutions, and by using MobX, the calculations were successfully accelerated.",
      },
      {
        title: "VisionKit",
        description:
          "A module for scanning receipts has been created in the application. By using the native VisionKit library we were able to create an interface for scanning a receipt and performing OCR on it. Everything locally on the user's device, without internet connection.",
      },
      {
        title: "Testing",
        description:
          "Working on an application that is used by users requires a high degree of confidence in the functionality. By covering the code with unit tests using React Native Testing library and end-to-end tests using Detox library, the confidence of application's performance when adding new updates was increased.",
      },
      {
        title: "Fast local storage",
        description:
          "By using the react-native-mmkv-storage library, data operations run synchronously and up to 30 times faster than using Async storage.",
      },
    ],
  },
].reverse();
