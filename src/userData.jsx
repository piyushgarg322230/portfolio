import { FaGraduationCap, FaSchool, FaCode, FaChartLine, FaUsers, FaLaptop, FaPercent, FaTrophy } from 'react-icons/fa';

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
        description: "Full Stack Developer with 2 years of experience in Unity 2D/3D game development and modern web applications. Skilled in creating real-time multiplayer Android games using SmartFox and Agora voice integration, ensuring smooth gameplay and engaging user experiences. Proficient in React.js for dynamic, responsive interfaces and Node.js for scalable backend systems. Experienced in end-to-end development, from concept design and gameplay mechanics to backend infrastructure and UI enhancements, delivering high-quality, interactive applications and games across platforms.",
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
                "Developed and maintained multiplayer Android games using Unity (2D/3D) and Cocos2d with SmartFox server integration, achieving smooth real-time gameplay.",
                'Built scalable backend systems with Node.js and integrated REST APIs for seamless client-server communication.',
                "Collaborated in an Agile environment, improving game performance and reducing bugs by 14% through refactoring and optimization."
            ],
            animation: 'slide-in-right'
        }
    ],
    footerMessage: " My Portfolio. All rights reserved."
}