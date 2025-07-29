import { FaGraduationCap, FaSchool, FaCode, FaChartLine, FaUsers, FaLaptop, FaPercent, FaTrophy } from 'react-icons/fa';

//Photo Is uploade is "https://piyush-goyal22.imgbb.com/"

export const userData = {
    Home: {
        user: "Piyush Garg",
        title: "Software Developer",
        description: "Full-stack developer specialized in Unity multiplayer games, React, Node.js, and performance-focused Android game development.",
        profileImage: "./image.jpg",
        resume:"https://drive.google.com/file/d/10t8FkeWrMrjjjTwoajmj9lOi-yPW3BOE/view?usp=sharing"
    },
    About: {
        title: "About Me",
        description: "Full Stack Developer with 2+ years of experience in Unity (2D/3D) and Cocos game development, as well as modern web applications. Skilled in creating real-time multiplayer Android games using SmartFox and Agora voice integration, ensuring smooth gameplay and engaging user experiences. Proficient in React.js for dynamic, responsive interfaces and Node.js for scalable backend systems. Experienced in end-to-end development, from concept design and gameplay mechanics to backend infrastructure and UI enhancements, delivering high-quality, interactive applications and games across platforms.",
        mySkill: "My Skills",
        skills: ["C++", "TypeScript", "JavaScript","HTML5", "Mongodb", "SQL", "Node.Js", "Unity 2D/3D,", "Cocos Creator", "Android Studio", "Rect.Js", "Express.Js", "GitHub", "Cocos2dx"],
    },
    Education: [
        {
            icon: <FaGraduationCap />,
            title: "Master of Computer Application",
            institution: "Vellore Institute of Technology,Bhopal (VITB)",
            duration: "2021 - 2023",
            status: "Completed",
            highlights: [
                { icon: <FaCode />, text: "Full-Stack Development Focus" },
                { icon: <FaChartLine />, text: "Current CGPA: 8.9/10" },
            ]
        },
        {
            icon: <FaGraduationCap />,
            title: "Bachelor of Computer Applications",
            institution: "Stani Memorial P.G. College (SMPGC)",
            duration: "2018 - 2020",
            status: "Completed",
            highlights: [
                { icon: <FaLaptop />, text: "IFull-Stack Development Focus" },
                { icon: <FaPercent />, text: "Achieved: 72%" },
            ]
        }
    ],
    Project: [
        {
            title: 'Rummy Master',
            description: 'Rummy Master is a 2D single-player card game built in Unity with C#, featuring classic Rummy gameplay, smooth animations, and an intuitive interface for a fun experience.',
            tech: ['Unity2D', 'C#'],
            image: 'https://i.ibb.co/mVRTmrgm/rummy.png',
            githubLink:"https://github.com/piyushgarg322230/Rummy_Game?tab=readme-ov-file",
            liveLink:"https://rummy-master.netlify.app/"
        },
        {
            title: 'Chess Multiplayer',
            description: 'Multiplayer Chess is a web-based game built with HTML5, JavaScript, and CSS, using Photon Server for real-time matchmaking, delivering smooth, interactive online chess gameplay across devices.',
            tech: ['HTML5', 'JavaScript', 'Css', 'Photon Server'],
            image: 'https://i.ibb.co/gb92QJ7y/chess.png',
            githubLink:"https://github.com/piyushgarg322230/Chess_Multiplayer.git",
            liveLink:"https://piyushgarg322230.github.io/Chess_Multiplayer/"
        },
        {
            title: 'Snake Ladder Game',
            description: 'Snake Ladder Game is a browser-based board game built with HTML5, CSS, and JavaScript, featuring real-time multiplayer support via Photon Server for a smooth and interactive gaming experience.',
            tech: ['HTML5', 'JavaScript', 'Css', 'Photon Server'],
            image: 'https://i.ibb.co/tP1Fw27c/snakess.png',
            githubLink:"https://github.com/piyushgarg322230/Snake-Ladder-Game.git",
            liveLink:"https://piyushgarg322230.github.io/Snake-Ladder-Game/"
        },
        {
            title: 'Task Flow',
            description: 'Task Flow is a task management web application built with React.js, Node.js, Firebase, and Tailwind CSS, offering real-time project tracking, task organization, and a clean, responsive interface for improved productivity.',
            tech: ['ReactJs', 'NodeJs', 'Firebase', 'JavaScript', "Tailwind Css"],
            image: 'https://i.ibb.co/QzLPvSx/taskFlow.png',
            githubLink:"https://github.com/piyushgarg322230/TaskFlow.git",
            liveLink:"https://todo-authentication-3f47d.web.app/"
        },
        {
            title: 'Find It! Hidden Cats',
            description: 'Find It! Hidden Cats is a 2D hidden-object puzzle game developed in Cocos Creator using TypeScript and integrated with Firebase. Built at Assert InfoTech, I implemented Google Ads, Google Analytics, in-app purchases, and core game board logic, ensuring engaging gameplay and effective monetization.',
            tech: ['Cocos Creator 2D', 'TypeScript', 'Android Studio', 'Java', "Firebase"],
            image: 'https://i.ibb.co/rRbPZbj7/unnamed.webp',
            githubLink:null,
            liveLink:"https://play.google.com/store/apps/details?id=com.creativebeans.findithiddencats&hl=en"
        },
        {
            title: 'Poker Date',
            description: 'Poker Date is a multiplayer poker game developed in Cocos2d-x using C++ with Firebase integration, built at Assert InfoTech. I implemented Google Ads, Google Analytics, in-app purchases, and the core game board logic, along with real-time chat and voice communication using Agora. Additionally, I contributed to bug fixing and performance optimization to ensure a smooth and engaging gameplay experience.',
            tech: ['Cocos2dx', 'C++', 'Android Studio', 'Java', "Firebase"],
            image: 'https://i.ibb.co/JWzFVVCh/poker.webp',
            githubLink:null,
            liveLink:"https://www.pokerdate.net/"
        }
    ],
    contactUs: {
        gmail: "piyushgarg322230@gmail.com",
        mobileNumber: "+91 9079900239",
        location: "Jaipur, Rajasthan",
        github: "https://github.com/piyushgarg322230",
        linkedIn: "https://www.linkedin.com/in/piyush-garg-35066919a/",
        // instragram: "",
        // twiter: ""
        YOUR_SERVICE_ID: "service_pgpl5mj",
        YOUR_TEMPLATE_ID: "template_iihmdm3",
        YOUR_PUBLIC_KEY: "ONR9_3Ry6HddUc5tM"
    },
    experienceData: [
        {
            id: 1,
            title: 'Software Developer',
            company: 'Assert Infotech',
            date: 'Nov 2022 - Present',
            tasks: [
                "Assert Infotech creates captivating PC, console, and mobile games, blending technical expertise and creativity for unforgettable experiences.",
                "Developed and maintained multiplayer Android games using Unity (2D/3D) and Cocos with SmartFox server integration, achieving smooth real-time gameplay.",
                "Collaborated in an Agile environment, improving game performance and reducing bugs by 14% through refactoring and optimization."
            ],
            animation: 'slide-in-right'
        }
    ],
    footerMessage: " My Portfolio. All rights reserved."
}