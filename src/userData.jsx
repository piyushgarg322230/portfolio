import { FaGraduationCap, FaSchool, FaCode, FaChartLine, FaUsers, FaLaptop, FaPercent, FaTrophy } from 'react-icons/fa';

export const userData = {
    Home: {
        user: "Piyush Garg",
        title: "Software Developer",
        description: "Creating Responsive Websites and Mobile games that look Great and Perform Smoothly.",
        profileImage: "./image.jpg"
    },
    About: {
        title: "About Me",
        description: "I’m a dedicated Software Developer with over 2 years of experience, specializing in Unity for interactive application development and Node.js for building robust, real-time backend systems. I’ve worked on a variety of interactive and multiplayer applications, including poker, ludo, chess, helix jump, and snakes and ladders, using both Unity and Cocos. My expertise with SmartFox2X allows me to deliver seamless real-time communication and synchronization. I focus on writing clean, efficient code and creating smooth, high-performance user experiences across platforms...",
        mySkill: "My Skills",
        skills: ["C++", "TypeScript", "JavaScript", "Mongodb", "SQL", "Node.Js", "Unity", "Cocos Creator", "Android Studio", "Rect.Js", "Express.Js", "GitHub", "Cocos2dx"],
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
            title: "Helix Jump",
            intro: "",
            usingTecnolgy: "",
            live: "",
            github: ""
        }
    ],
    contactUs: {
        gmail: "",
        mobileNumber: "",
        location: "",
        github: "",
        linkedIn: "",
        instragram: "",
        twiter: ""
    },
    footerMessage: ""
}