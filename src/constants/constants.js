export const projects = [
  {
    title: 'NianNian',
    description: "A 2D pixel-art roughlike game built from scratch in C++17\n" +
        "\n" +
        "NianNian adventrue is a 2D pixel art roughlike single-player game that gives gaming experience similar to Hades. The story of the game is about a stray cat that just got adopted and arrived her new home. The original residents (other cats, dogs and etc XD) has prepare a welcome party for the newbie stray cat, to see if she is qulified to live here. the game allows the player to grow from a nobody eventually to the queen of the home. It also provides plenty of maps, enemies, magics, and equipments to discover. It's developed without game engines such as Unreal engine or Unity." ,
    image: '/project_gif/niannian.gif',
    tags: ['C++','SFML'],
    source: 'https://github.com/DanielTschang/NianNian',
    visit: 'https://github.com/DanielTschang/NianNian',
    id: 3,
  },
  {
    title: 'EldenRing Map/AR Calculator',
    description: "Elden Ring Online Map and Attack Rating(AR) calculator / 艾爾登法環成就地圖&攻擊分數計算幾\n" ,
    image: '/project_gif/eldenring.png',
    tags: ['Vue.js','Typescript','MySQL'],
    source: 'https://github.com/DanielTschang/EldenRingOnlineTools',
    visit: 'https://github.com/DanielTschang/EldenRingOnlineTools',
    id: 2,
  },
  {
    title: 'Meeture',
    description: "覓趣Meeture 是針對長輩族群設計的活動參與平台，並搭配互動式地圖，提升長輩參與戶外活動的動力及周圍公共環境品質。希望幫助長輩們接軌科技產品、提升活動參與度，進而活絡個人與環境之間的關係。希望透過提供多樣的活動資訊、創造空間與個人的回憶錄，為長輩們的退休生活，激盪更多火花。",
    image: '/project_gif/meeture.gif',
    tags: ['Vue.js','Django','Line OAuth'],
    source: 'https://github.com/HCITeamOne/MeetureWebFronted',
    visit: 'https://github.com/HCITeamOne/MeetureWebFronted',
    id: 1,
  },

  {
    title: 'Phubber-Point',
    description: "Phubber-Point 是針對餐廳的集點系統，當顧客停止使用手機時，集點速度會即時的加快，進而促使顧客在餐桌上多與家人或朋友交流，減少科技冷漠的現象。而點數可以拿來換取餐點。同時，集點速度也將隨著用餐時間遞減，進而增加換桌率。",
    image: '/project_gif/phubber-point.gif',
    tags: ['React Native', 'Expo', 'Django'],
    source: 'https://github.com/DanielTschang/Phubber-Point-React-Native',
    visit: 'https://github.com/DanielTschang/Phubber-Point-React-Native',
    id: 0,
  },
];

export const TimeLineData = [
  { starttime: '2023 / 03', end:false,organization: 'M800 | Cinnox', position:'Software Engineer' , description: '1. Participated in developing WebRTC media server. Mainly responsible for the rtp packet handling and audio/video recording.\n' +
        '2. Refactored and reconstructed the Call monitoring system which instantly triggers alert when costumers continuously making potential spam calls. Integrated with Cinnox.'},
  { starttime: '2020 / 09', end:true,endtime:'2022 / 08',organization: 'National Tsing Hua University', position:'Master Student' , description: 'Institute of Information System and Applications - Computer Science'},
  { starttime: '2020 / 07', end:true,endtime:'2022 / 08' ,organization: 'Academia Sinica', position:'Research Assistant', description:'1. Developed indoor navigation dialogue system with implementing NLU using SPBA.\n' +
        '2. Participated in building ontology of insurance related knowledge.\n'+
        '3. Developed entity relation linking system which links the entities in an article by the causality reasoning.' },
  { starttime: '2020 / 03', end:true,endtime:'2020 / 07', organization: 'D8AI', position:'Software Engineer Intern', description:'Participated in developing both frontend and backend of websites for customers.' },
  { starttime: '2015 / 09', end:true,endtime:'2019 / 06' ,organization: 'Fu-jen University', position:'Bachelor Student', description:'Major in Statistic and Information Science' }
];

export const AcomplishmentsData = [
  { organization: 'Longevity-Ready Environments: Rethinking Physical Spaces for Century-Long Lives ', award:'Top 7'},
  { organization: 'AI CUP - De-identification of medical information ', award:'Top 10% Accuracy,  39/ 531'},
  { organization: 'ATCC - National College Business Case Competition ', award:'SurveyCake Team - Final Round'},
  { organization: 'Undergraduate Research - Analysing Bitcoin Float ', award:'Second Place of our department'},
];