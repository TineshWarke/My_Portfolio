import { Bs0CircleFill } from "react-icons/bs";
import { IContact, IEducation, IProject, IService, ISkills } from "./type";

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
        level: '70%',
        icon: '/logos/c.png'
    },
    {
        name: 'C++',
        level: '75%',
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
        level: '70%',
        icon: '/logos/python.png'
    },
    {
        name: 'MySQL',
        level: '75%',
        icon: '/logos/mysql.png'
    },
    {
        name: 'HTML',
        level: '85%',
        icon: '/logos/html-5.png'
    },
    {
        name: 'CSS',
        level: '70%',
        icon: '/logos/css.png'
    },
    {
        name: 'Java-Script',
        level: '85%',
        icon: '/logos/java-script.png'
    },
    {
        name: 'MongoDB',
        level: '70%',
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
        level: '75%',
        icon: '/logos/typescript.png'
    },
    {
        name: 'NextJS',
        level: '80%',
        icon: '/logos/nextjs.png'
    },
    {
        name: 'Tailwind CSS',
        level: '90%',
        icon: '/logos/tailwind.png'
    },
    {
        name: 'DaisyUI',
        level: '80%',
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
        level: '60%',
        icon: '/logos/framer.png'
    },
]

export const projects: IProject[] = [
    {
        name: 'Resume Builder',
        description: [
            'A user-friendly web application built with Next.js that allows individuals to create, customize, and download professional resumes. With an intuitive interface and powerful features, this tool empowers users to build and personalize their resumes effortlessly.',
            '1. Real-Time Preview: As users input their details, the changes are immediately reflected in the resume preview, providing an interactive experience.',
            '2. Choose from various resume templates and effortlessly switch between them to create a professional look tailored to personal preferences.',
            '3. Once the resume is complete, users can download it as a high-quality PDF, ready for sharing or printing.',
        ],
        image_path: '/images/resume-builder.png',
        deployed_url: 'https://resume-builder-ten-neon.vercel.app/',
        github_url: 'https://github.com/TineshWarke/resume-builder.git',
        category: ['Next.js'],
        key_techs: ['Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
        name: 'Data Structures & Algorithms Visualizer',
        description: [
            'A cutting-edge platform that transforms the learning journey of Data Structures and Algorithms by integrating visualization, hands-on coding, and progress tracking in an interactive and engaging way.',
            '1. Understand complex DSA concepts through intuitive animations and real-world examples.',
            '2. Explore ready-to-use code snippets in C, C++, Java, Python, and JavaScript for every topic.',
            '3. Solve LeetCode problems, mark them as completed, earn badges, and track your learning journey with insightful analytics.',
        ],
        image_path: '/images/dsa.png',
        deployed_url: 'https://dsa-visualizer-bytinesh.vercel.app/',
        github_url: 'https://github.com/TineshWarke/dsa_visualizer.git',
        category: ['Next.js', 'MongoDB'],
        key_techs: ['Next.js', 'TypeScript', 'MongoDB']
    },
    {
        name: 'Portfolio Website',
        description: [
            'This is the portfolio website you are currently viewing. It is a single-page application built using Next.js & Tailwind CSS, featuring smooth animations & transitions. The website is designed to be responsive, & visually appealing, ensuring an optimal experience across various devices.',
            '1. Built with Next.js, TypeScript, Tailwind CSS, DaisyUI, & Framer Motion to deliver a seamless & responsive user experience.',
            '2. Offers detailed project descriptions and insights into my journey as a full-stack developer, making it a valuable resource for potential collaborators and employers.',
            '3. Features smooth animations and interactive elements.',
        ],
        image_path: '/images/portfolio.png',
        deployed_url: 'https://tineshwarke-portfolio.vercel.app/',
        github_url: 'https://github.com/TineshWarke/My_Portfolio.git',
        category: ['Next.js'],
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
        category: ['React', 'Java', 'MySQL'],
        key_techs: ['React', 'Java', 'MySQL', 'Spring Boot']
    },
    {
        name: 'Sign Language Recognition Using Deep Learning ',
        description: [
            'Developed a sign language recognition tool aimed at facilitating communication for the deaf and hard-of-hearing communities, providing an intuitive and real-time solution to bridge the communication gap and promote inclusivity.',
            '1. Designed and implemented the neural network using Keras and TensorFlow, ensuring high accuracy in recognizing sign language gestures.',
            "2. Utilized OpenCV for processing and annotating datasets, which contributed to the system's ability to recognize signs in real-time effectively.",

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
        name: 'NextToDoApp',
        description: [
            'A Next.js Todo List App designed for easy task management. Users can add, complete, and delete tasks efficiently. With a clean, responsive design, this app helps you stay organized and focused on your tasks with a seamless experience.',
            '1. Task Management: Add, delete, and mark tasks as completed with a simple checkbox toggle.',
            '2. Responsive Design: The app is fully responsive, offering a smooth user experience on all devices.',
            '3. Fast and Scalable: Built with Next.js, providing optimized performance and scalability for handling more tasks.',
            '4. Clean and intuitive UI that allows to quickly interact with their tasks.'
        ],
        image_path: '/images/todo.png',
        deployed_url: 'https://todo-list-eight-teal-73.vercel.app/',
        github_url: 'https://github.com/TineshWarke/Todo_List.git',
        category: ['Next.js', "MongoDB"],
        key_techs: ['Next.js', 'MongoDB']
    },
    {
        name: 'Chess Game',
        description: [
            'The 2-player chess game is a web-based application designed to provide an engaging and interactive platform for chess enthusiasts. Developed using Next.js, TypeScript, and Tailwind CSS, focuses on delivering a seamless user experience through its intuitive design and robust functionality.',
            '1. The application facilitating smooth piece movements and automatic turn changes to enhance the competitive experience.',
            '2. The game is built to adapt to various screen sizes, ensuring that users can enjoy chess on desktops, tablets, and smartphones without any loss of functionality or design integrity',
            '3. A comprehensive move validation feature is integrated to prevent illegal moves, ensuring a fair game.'
        ],
        image_path: '/images/chess.png',
        deployed_url: '',
        github_url: '',
        category: ['Next.js'],
        key_techs: ['Next.js', 'TypeScript']
    },
    {
        name: 'Inventory Management System',
        description: [
            'An Inventory Management System (IMS) built with Django and Bootstrap provides a powerful and responsive solution. This system offers a user-friendly interface while leveraging Django`s robust back-end to efficiently handle data processing.',
            '1. Allows users to monitor stock levels and movements across multiple locations, ensuring up-to-date inventory information.',
            '2. Admins can easily add, edit, or remove products with fields like SKU, name, category, and quantity, ensuring accurate inventory details.',
            '3. Provides a smooth, responsive design with efficient state management, ensuring seamless navigation and real-time updates.'
        ],
        image_path: '/images/ims.png',
        deployed_url: '',
        github_url: 'https://github.com/TineshWarke/Inventory-Management-System.git',
        category: ['Python'],
        key_techs: ['Django', 'Bootstrap']
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
    {
        name: 'Snake Game',
        description: [
            'I developed a classic Snake game using Python and Pygame, capturing the nostalgic feel of retro arcade games with modern enhancements. The game offers an enjoyable, straightforward experience, making it both fun and accessible for players of all ages.',
            '1. The game allows players to control the snake`s movement using the arrow keys, ensuring smooth and responsive gameplay. This makes maneuvering through the grid feel natural and enjoyable.',
            '2. Every time the snake eats the red food block, the score increases, which adds a fun challenge as the snake grows longer.',
            '3. If the snake collides with itself or the game boundary, a game-over screen appears, allowing the player to restart or exit.'
        ],
        image_path: '/images/snake.png',
        deployed_url: '',
        github_url: 'https://github.com/TineshWarke/Snake.git',
        category: ['Python'],
        key_techs: ['Python', 'Pygame']
    },
]

export const education: IEducation[] = [
    {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'R. C. Patel Institute of Technology, Shirpur',
        grade: 'CGPA : 7.48',
        year: '2019 - 2023',
        image_path: '/institution/rcpit.png'
    },
    {
        degree: 'C-DAC : [PG-DAC]',
        institution: 'Institute for Advanced Computing and Software Development, Akurdi',
        grade: 'Percentage : 81.75%',
        year: '- 2024',
        image_path: '/institution/cdac.png'
    },
]