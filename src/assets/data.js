const work = [
  "Bookends Marketplace\n\nA new second hand marketplace for a niche market. An early phase start targeting content creators and the film industry. Helping production companies and creatives achieve greater sustainability and perhaps a profit by helping sell post production materials or left over/unused equipment.\n\n Promo page made using NextJS and Tailwind. App prototype created in React Native, with Firebase/Firestore for data storage, authentication and realtime chat. Payment integration using Stripe.",
  "Spelling Bee Prep App\n\nThis passion project is the result of a conversation with my elementary age daughter who recently came home and said she wants to win her class's next year’s spelling bee. As a parent I do not always have the time to sit down and practice with her the way she may need it to reach her goal. So, I thought I should be able to do something about this. My goal is to create an app that will allow my daughter to practice as the app (device) reads the words out loud using speech synthesis and allows her to spell the word back.",
  '3 in 1 Word Puzzle Solving Helpers\n\nThis set of three distinct projects grew out of the Letter Boxed Solver project, which was the first of these three tools. My 8th grade son was always finding better words to solve the New York times word puzzle than I, so I came up with an app to help me find possible solutions. After that I created the Spelling Bee helper, and finally a Wordle Solution helper. Each of these apps uses React, there is no backend and each has a unique algorithm to help find the solution. These were fun projects to practice CSS. After completing them all I wrapped them up in a nav bar linking to each site and gave each one a light and dark mode.',
  'FRY Word Diagnosis Tool\n\nThis app will start as a simple one to help track student acquisition of the first 300 Fry sight words.  Teachers for students in grades K-3 will be able to use the app to track the skill acquisition of individual students and print learning lists per student or for a group of students.  Words themselves will be categorized in order of frequency of occurrence in written text, as well as by regularity of spelling and included spelling patterns, so that teachers can choose word lists for instruction based on those useful characteristics.  Flashcards or word lists for groups or individual students may be printed for teacher reference. Later versions of the app may include research-supported instruction and games that include responsive feedback and track student progress for the teacher.',
  'Bridge\n\n An environmental and climate oriented social app to share, learn and communicate about climate change related topics. This decoupled MERN app is from a 3-day hackathon in a cross functional team. I worked on the backend data models, routes, controllers and implemented the frontend services, AWS S3 upload, CSS and submission form for forum posts.',
  'ea$e\n\nA personal finance app to help track spending, set goals and save money. This decoupled MERN app is from a 3-day hackathon in a cross functional team. I worked on the backend data models, routes, controllers and implemented the frontend logic for the dashboard.',
  'Sticky-Note-Bulletin-Board\n\nAn attempt to create a classic bulletin board in a web-browser. Using Django, Python, JavaScript and jQuery. Offers option to use a personal background, a personal board and team view board.',
  'Homecooked\n\nA social website for recipe sharing and 7-day meal plan creation. Uses MongoDb and EJS implementing Google OAuth.',
  'Junction\n\nA social networking app for people seeking others with similar interests and hobbies to meet up or share insight, things learned or accomplishments. Using React, JavaScript, MaterialUi.',
  'Invaders from Space!\n\nA Space invaders clone using Vanilla Javascript. I am always inspired by the students in Unit 1 of our classes. We end Unit 1 with the assignment of a game to help solidify the essential JavaScript foundations. And I always want to see if I can create a game in the same time.',
  'Battleship2022\n\nA remake of the game Battleship using Vanilla JavaScript. One player places the boats; the second tries to guess where they are at. One twist in this version is that a spy gives away the location of one boat.',
  'MindMaster\n\nA Mastermind clone using vanilla JavaScript. The computer creates a pattern the user needs to guess it. Drag a game piece and place it where you want to make your guess, the computer will give hints based upon your guess.',
  'Tic-Tac-Toe\n\nThe classic game of Tic-Tac-Toe. This was written in vanilla JavaScript in my early days of learning. I have gone back and added a computer player to the game simply using a series of conditional statements to mimic my own thought process of how I play the game.'
]

const links = [
  'https://bookendsmarketplace.com/',
  'https://spelling-bee-practice-app.netlify.app/',
  'https://wordle-solving-helper.netlify.app/',
  '',
  'https://bridge-climate-app.netlify.app/',
  'https://frontend-nine-tawny.vercel.app/',
  'https://stickynotebullitenboard.fly.dev/',
  'https://home-cooked-meal-planner.herokuapp.com/',
  'https://community-junction.fly.dev/',
  'https://invadersfromspace.surge.sh/',
  'https://battleship2022.netlify.app/',
  'https://mindmaster.surge.sh/index.html',
  'https://tictactoe-namenottaken.netlify.app/'
]

const repositories = [
  'https://github.com/MrJanHorak/bookendsPromoWeb',
  'https://github.com/MrJanHorak/spelling-bee-practice-tool',
  'https://github.com/MrJanHorak/wordle-solution-helper',
  'https://github.com/MrJanHorak/high-frequency-word-diagnosis-tool',
  'https://github.com/International-Aid-Hackathon-Team-7/frontend',
  'https://github.com/MrJanHorak/frontend',
  'https://github.com/MrJanHorak/sticky-note-bulletin-board',
  'https://github.com/MrJanHorak/home-cooked',
  'https://github.com/MrJanHorak/junction',
  'https://github.com/MrJanHorak/invadersFromSpace',
  'https://github.com/MrJanHorak/battleship',
  'https://github.com/MrJanHorak/mastermind',
  'https://github.com/MrJanHorak/ttt-weekend'
]

const projectPics = [
  './bookendspromo2.PNG',
  './passionProjects/spellingbeeappanimated.gif',
  './passionProjects/word-puzzle-helpers.gif',
  './passionProjects/sightWords.jpg',
  './bridgeApp.gif',
  './ease.gif',
  './stickyNoteSamp.gif',
  './homeCookedSamp.gif',
  './junctionAppSamp.gif',
  './invadersfromspace.gif',
  './battleshipSamp.gif',
  './MindMaster.gif',
  './tictactoeSamp.gif'
]

const passionProjects = [
  "Spelling Bee Prep App\n\nThis passion project is the result of a conversation with my elementary age daughter who recently came home and said she wants to win her class's next year’s spelling bee. As a parent I do not always have the time to sit down and practice with her the way she may need it to reach her goal. So, I thought I should be able to do something about this. My goal is to create an app that will allow my daughter to practice as the app (device) reads the words out loud using speech synthesis and allows her to spell the word back.",
  '3 in 1 Word Puzzle Solving Helpers\n\nThis set of three distinct projects grew out of the Letter Boxed Solver project, which was the first of these three tools. My 8th grade son was always finding better words to solve the New York times word puzzle than I, so I came up with an app to help me find possible solutions. After that I created the Spelling Bee helper, and finally a Wordle Solution helper. Each of these apps uses React, there is no backend and each has a unique algorithm to help find the solution. These were fun projects to practice CSS. After completing them all I wrapped them up in a nav bar linking to each site and gave each one a light and dark mode.',
  'FRY Word Diagnosis Tool\n\nThis app will start as a simple one to help track student acquisition of the first 300 Fry sight words.  Teachers for students in grades K-3 will be able to use the app to track the skill acquisition of individual students and print learning lists per student or for a group of students.  Words themselves will be categorized in order of frequency of occurrence in written text, as well as by regularity of spelling and included spelling patterns, so that teachers can choose word lists for instruction based on those useful characteristics.  Flashcards or word lists for groups or individual students may be printed for teacher reference. Later versions of the app may include research-supported instruction and games that include responsive feedback and track student progress for the teacher.',
  'Arduino Based weather station\n\nSeveral years ago I was part of a team that sent up a weather balloon to the stratosphere, some of the technology we used from that is still laying around my garage so I thought: I should be able to build something with some of this, and thus the idea of a weather station running off an Arduino or Raspberry Pi came to mind. It is a side project I hope to realize in the next few months.'
]

const passionProjectsLinks = [
  'https://spelling-bee-practice-app.netlify.app/',
  'https://wordle-solving-helper.netlify.app/',
  '',
  ''
]

const passionProjectsRepositories = [
  'https://github.com/MrJanHorak/spelling-bee-practice-tool',
  'https://github.com/MrJanHorak/wordle-solution-helper',
  'https://github.com/MrJanHorak/high-frequency-word-diagnosis-tool',
  ''
]

const passionProjectPics = [
  './passionProjects/spellingbeeappanimated.gif',
  './passionProjects/word-puzzle-helpers.gif',
  './passionProjects/sightWords.jpg',
  './passionProjects/arduino.jpg'
]

export {
  work,
  links,
  repositories,
  projectPics,
  passionProjects,
  passionProjectsLinks,
  passionProjectsRepositories,
  passionProjectPics
}
