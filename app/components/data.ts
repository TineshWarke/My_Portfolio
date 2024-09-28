import { Bs0CircleFill } from "react-icons/bs";
import { IContact, IProject, IService, ISkills } from "./type";

export const contacts: IContact[] = [
    {
        name: 'Linkedin',
        logo: '/icons/linkedin.png',
        link: 'https://www.linkedin.com/in/tinesh-warke/'
    },
    {
        name: 'Github',
        logo: '/icons/social.png',
        link: 'https://github.com/TineshWarke'
    },
    {
        name: 'Email',
        logo: '/icons/mail.png',
        link: 'mailto:tineshwarke2000@gmail.com'
    },
    {
        name: 'LeetCode',
        logo: '/icons/LeetCode.png',
        link: 'https://leetcode.com/u/Tinesh_Warke/'
    },
    {
        name: 'Chess',
        logo: '/icons/chess.png',
        link: 'https://www.chess.com/play/online/new?opponent=ThisIsTinesh'
    },
]

export const intro: string = "Allow me to introduce myself—I'm Tinesh Warke, a software engineer with a profound love for exploring the vast realm of technology " +
    "and crafting innovative applications. I find immense joy in staying at the forefront of emerging technologies, constantly seeking " +
    "new challenges to broaden my skill set and push the boundaries of what I can achieve. There's nothing quite like the satisfaction " +
    "of transforming ideas into functional and user-friendly solutions."

export const services: IService[] = [
    {
        title: 'Full-Stack Development',
        about: 'Building web applications using technologies like <b>React</b>, <b>Next.js</b>, <b>Node.js</b>, <b>Express</b>, and <b>Spring Boot</b>.',
        icon: '/icons/full-stack.png'
    },
    {
        title: 'Frontend Development',
        about: 'Creating responsive and interactive user interfaces using <b>React</b>, <b>Next.js</b>, <b>TypeScript</b>, <b>Tailwind CSS</b>, and <b>Framer Motion</b>.',
        icon: '/icons/frontend.png'
    },
    {
        title: 'Backend Development',
        about: 'Developing secure and scalable backend systems with <b>Node.js</b>, <b>Express</b>, <b>Spring Boot</b>, and <b>Microservices</b>.',
        icon: '/icons/api.png'
    },
    {
        title: 'Data Management',
        about: 'Working with databases like <b>MySQL</b> and <b>MongoDB</b> for efficient data storage and retrieval.',
        icon: '/icons/database.png'
    },
    {
        title: 'Competitive Coder',
        about: 'A dedicated daily problem solver on <b>LeetCode</b>, consistently enhancing coding skills and tackling algorithmic challenges.',
        icon: '/icons/coder.png'
    },
    {
        title: 'Machine Learning Projects',
        about: 'Implementing deep learning models using <b>Python</b>, <b>TensorFlow</b>, <b>Keras</b>, and <b>OpenCV</b>.',
        icon: '/icons/ml.png'
    },
    // {
    //     title: 'API Development',
    //     about: 'I can delelop robust REST API using <b>Node.js </b>',
    //     icon: '/icons/api.png'
    // },
]

export const skills: ISkills[] = [
    {
        name: 'C',
        level: '80%',
        icon: '/logos/c.png'
    },
    {
        name: 'C++',
        level: '85%',
        icon: '/logos/cpp.png'
    },
    {
        name: 'Java',
        level: '92%',
        icon: '/logos/java.png'
    },
    {
        name: 'Spring Boot',
        level: '80%',
        icon: '/logos/springboot.png'
    },
    {
        name: 'Python',
        level: '75%',
        icon: '/logos/python.png'
    },
    {
        name: 'MySQL',
        level: '70%',
        icon: '/logos/mysql.png'
    },
    {
        name: 'HTML',
        level: '85%',
        icon: '/logos/html-5.png'
    },
    {
        name: 'CSS',
        level: '65%',
        icon: '/logos/css.png'
    },
    {
        name: 'Java-Scrpt',
        level: '75%',
        icon: '/logos/java-script.png'
    },
    {
        name: 'MongoDB',
        level: '65%',
        icon: '/logos/mongo.png'
    },
    {
        name: 'React',
        level: '85%',
        icon: '/logos/react.png'
    },
    {
        name: 'NodeJS',
        level: '70%',
        icon: '/logos/nodejs.png'
    },
    {
        name: 'ExpressJS',
        level: '80%',
        icon: '/logos/ex.png'
    },
    {
        name: 'TypeScript',
        level: '60%',
        icon: '/logos/typescript.png'
    },
    {
        name: 'NextJS',
        level: '50%',
        icon: '/logos/nextjs.png'
    },
    {
        name: 'Tailwind CSS',
        level: '70%',
        icon: '/logos/tailwind.png'
    },
    {
        name: 'DaisyUI',
        level: '70%',
        icon: '/logos/daisyui.png'
    },
    {
        name: 'C#',
        level: '30%',
        icon: '/logos/c-sharp.png'
    },
    {
        name: 'Bootstrap',
        level: '50%',
        icon: '/logos/bootstrap.png'
    },
    {
        name: 'Framer Motion',
        level: '50%',
        icon: '/logos/framer.png'
    },
]

export const projects: IProject[] = [
    {
        name: 'Portfolio Website',
        description: [
            'This is the portfolio website you are currently viewing. It is a single-page application built using React & Tailwind CSS, featuring smooth animations & transitions. The website is designed to be responsive, & visually appealing, ensuring an optimal experience across various devices.',
            '1. Built with Next.js, TypeScript, Tailwind CSS, DaisyUI, & Framer Motion to deliver a seamless & responsive user experience.',
            '2. Offers detailed project descriptions and insights into my journey as a full-stack developer, making it a valuable resource for potential collaborators and employers.',
            '3. Features smooth animations and interactive elements.',
        ],
        image_path: '/images/portfolio.png',
        deployed_url: 'https://daisyui.com/docs/themes/',
        github_url: 'https://tailwindcss.com/',
        category: ['React'],
        key_techs: ['Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
        name: 'Map My Story',
        description:
            [
                'MapMyStory is a MERN stack platform that enables users to share their personal stories and experiences by pinning them on an interactive map. It offers an engaging way to connect with others by exploring narratives from different locations around the world.',
                '1. Discover stories from around the world and engage with diverse storytellers.',
                '2. Share your own experiences and become part of a global storytelling community.',
                '3. Seamless Experience: Built using MongoDB, Express.js, React, and Node.js for dynamic storytelling.',
            ],
        image_path: '/images/mapmystory.png',
        deployed_url: 'https://map-my-story.vercel.app/login',
        github_url: 'https://github.com/TineshWarke/MapMyStory',
        category: ['React', 'Express', 'MongoDB'],
        key_techs: ['MongoDB', 'Express', 'React']
    },
    {
        name: 'e-Nirvachan: Online Voting System',
        description: [
            'e-Nirvachan is a cutting-edge online voting platform designed to modernize the electoral process, making it more accessible, secure, and efficient. Built with robust technology, it ensures a seamless and trustworthy voting experience for all users.',
            '1. By leveraging advanced technologies, the system aims to encourage higher voter turnout, streamline voting procedures, and ensure data integrity and security throughout the process.',
            '2. Developed a responsive and user-friendly interface for a seamless voting experience.',
        ],
        image_path: '/images/voting.png',
        deployed_url: '',
        github_url: 'https://github.com/TineshWarke/e-Nirvachan_Online_Voting_System.git',
        category: ['React', 'Java' , 'MySQL'],
        key_techs: ['React', 'Java', 'MySQL', 'Spring Boot']
    },
    {
        name: 'Sign Language Recognition Using Deep Learning ',
        description: [
            'Developed a sign language recognition tool aimed at facilitating communication for the deaf and hard-of-hearing communities, providing an intuitive and real-time solution to bridge the communication gap and promote inclusivity.',
            '1. Designed and implemented the neural network using Keras and TensorFlow, ensuring high accuracy in recognizing sign language gestures.',
            "2. Utilized OpenCV for processing and annotating datasets, which contributed to the system's ability to recognize signs in real-time effectively." ,

        ],
        image_path: '/images/slr.jpg',
        deployed_url: '',
        github_url: 'https://github.com/TineshWarke/Sign_Language_Recognition.git',
        category: ['Python'],
        key_techs: ['Python', 'CNNs', 'OpenCV', 'Keras']
    },
    {
        name: 'Drum Kit',
        description: [
            'The Drum Kit app is an exciting and interactive React-based application that allows users to explore the world of drumming with ease. With responsive keyboard controls and clickable drum elements, it offers a fun and engaging way to create rhythms.',
            '1. Play drums by pressing designated keyboard keys (a, s, d, f, j, k, l) or by clicking on corresponding drum images.',
            '2. Each key and image triggers a unique, high-quality drum sound, providing instant audio feedback.',
            "3. Its intuitive design ensures that anyone, from beginners to experienced drummers, can enjoy the app effortlessly."
        ],
        image_path: '/images/drum-kit.png',
        deployed_url: 'https://drum-kit-bytinesh.vercel.app/',
        github_url: 'https://tailwindcss.com/',
        category: ['React'],
        key_techs: ['React', 'JavaScript', 'CSS']
    },
    {
        name: 'Quiz App',
        description: [
            'A dynamic quiz app built with React and TypeScript, offering an engaging experience to test your knowledge across various categories. The app features intuitive navigation, real-time feedback, and a smooth user interface to make learning fun and interactive.',
            '1. Features topics from General Knowledge to Anime, with dynamically fetched questions each session.',
            '2. Ensures strong type safety and scalability, making the app reliable and easy to expand.',
            '3. Offers a smooth, user-friendly interface with efficient state management for seamless quiz-taking.'
        ],
        image_path: '/images/quiz.png',
        deployed_url: 'https://quiz-app-lime-nine.vercel.app/',
        github_url: 'https://github.com/TineshWarke/QuizApp.git',
        category: ['React'],
        key_techs: ['React', 'TypeScript']
    },
]