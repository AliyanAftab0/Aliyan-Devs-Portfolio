import itask from "../../public/itask.png"
interface ProjectType1 {
    slug: string;
    content: string;
    title: string;
    description: string;
    technologies: string[];
    repositoryUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
  }
  
  const SampleProjects: ProjectType1[] = [
    {
      slug: "todo-app",
      title: "Todo App",
      description: "A simple and efficient Todo application to manage your tasks.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      content: `
      # Todo App
      
      This project is a user-friendly Todo application where you can add, edit, and delete tasks.
      
      ### Features:
      - Task management
      - Responsive design
      - Built with Next.js and Tailwind CSS
      `,
      liveUrl: "https://itask-app.vercel.app/",
      imageUrl: "/itask.png"
    },
    {
      slug: "password-manager",
      title: "Password Manager",
      description: "A secure and convenient password manager to store and manage your passwords.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      content: `
  # Password Manager
  
  This project is a secure password manager to store and retrieve your passwords.
  
  ### Features:
  - Password storage and retrieval
  - Strong encryption
  - User-friendly interface
      `,
      liveUrl: "https://passop-man.vercel.app/",
      imageUrl: "/passop.png"
    },
    {
      slug: "old-portfolio",
      title: "Old Portfolio",
      description: "My old portfolio showcasing my previous work and projects.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      content: `
  # Old Portfolio
  
  This project is my previous portfolio website that showcases my work, skills, and projects.
  
  ### Features:
  - Project showcase
  - Contact form
  - Responsive design
      `,
      liveUrl: "https://aliyan-dev.vercel.app/",
      imageUrl: "/aliyandev.png"
    },
    {
      slug: "jarvis-ai",
      title: "J.A.R.V.I.S AI",
      description: "An advanced AI assistant inspired by Iron Man's J.A.R.V.I.S, built to perform various tasks and assist users in their daily activities.",
      technologies: ["Python"],
      content: `
      # J.A.R.V.I.S AI
      
      J.A.R.V.I.S AI is an AI-powered assistant designed to help users automate tasks, control devices, and provide real-time information. It's inspired by the iconic J.A.R.V.I.S from Iron Man.
      
      ### Features:
      - Voice-controlled commands
      - Real-time information retrieval
      - Device automation
      - Personalized task management
      `,
      liveUrl: "https://github.com/AliyanAftab0/J.A.R.V.I.S-AI",
      imageUrl: "/jarvis.png"
    },
    {
      slug: "ai-chat-bot",
      title: "AI Chat Bot",
      description: "An intelligent chatbot that interacts with users in natural language, providing assistance and engaging conversations.",
      technologies: ["Python"],
      content: `
      # AI Chat Bot
      
      AI Chat Bot is a conversational agent built to provide users with assistance and information through natural language processing. It's capable of handling a wide range of queries and engaging in meaningful conversations.
      
      ### Features:
      - Natural language understanding
      - Contextual responses
      - Multi-platform support
      - Easy integration with other services
      `,
      liveUrl: "https://github.com/AliyanAftab0/AI-Chat-Bot",
      imageUrl: "/aichatbot.png"
    },
  ];
  
  export default SampleProjects;
  