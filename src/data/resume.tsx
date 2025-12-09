import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanay Chaudhari",
  initials: "TC",
  url: "https://tanayyo1.github.io",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Engineer, I love building things, Active on Twitter.",
  summary: `
     <p>baseline; self-taught by breaking things and following the sparks.</p>
     <p>most of what i make earns nothing, </p>
     <p>i grind my LLMs down to the breaking point </p>
     <p>most days it's code, gym, guitar, repeat. </p>
     
  `,  
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Go",
    "Java",
    "C++",
    "Postgres",
    "Supabase",
    "Prisma",
    "Docker",
    "Kubernetes",
    "Redis",
    "MongoDB",
    "GitHub",
    "Vercel",
    "Tailwind CSS",
    "AWS",
    "Azure",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tanayy07@gmail.com",
    tel: "7385989270",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tanayyo1",
          icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tanay-chaudhari-b318b5245/",
          icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tanayyo1",
          icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
          icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
          icon: Icons.email,

        navbar: false,
      },
    },
    },

  work: [
    {
      company: "OpenClip",
      href: "https://openclip.app/",
      badges: [],
      location: "UAE",
      title: "Software Engineer",
      logoUrl: "/OpenClipLogo.jpg",
      start: "November 2025",
      end: "Present",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "University of Mumbai",
      href: "https://mu.ac.in/",
      degree: "Electronics and Telecommunication (BE)",
      logoUrl: "/waterloo.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      href: "https://tanayyo1.github.io",
      dates: "",
      active: true,
      description:
        "Personal portfolio website showcasing projects, open‑source contributions, and professional experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub Pages"
    ],
      links: [
        {
          type: "Website",
            href: "https://tanayyo1.github.io",
            icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
            href: "https://github.com/tanayyo1/tanayyo1.github.io",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Xandeum LATTICE Dashboard",
      href: "https://github.com/tanayyo1/Xandeum-LATTICE",
      dates: "",
      active: true,
      description:
        "Real‑time analytics dashboard for monitoring Xandeum pNodes, built as a bounty submission with live node metrics and visual insights.",
      technologies: [
        "TypeScript",
        "React",
        "Charts/Visualization",
        "API Integration"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/Xandeum-LATTICE",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Rocket.Chat Contributions",
      href: "https://github.com/tanayyo1/Rocket.Chat",
      dates: "",
      active: true,
      description:
        "Fork of the Rocket.Chat communications platform used for contributing bug fixes and refactors to the upstream TypeScript/React codebase.",
      technologies: [
        "TypeScript",
        "Node.js",
        "MongoDB",
        "React",
        "WebSockets"
    ],
      links: [
        {
          type: "Source Fork",
          href: "https://github.com/tanayyo1/Rocket.Chat",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Upstream",
          href: "https://github.com/RocketChat/Rocket.Chat",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Cal.com Custom Fork",
      href: "https://github.com/tanayyo1/cal.com",
      dates: "",
      active: true,
      description:
        "Customized fork of Cal.com used to explore and extend scheduling infrastructure features for personal and experimental use cases.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Prisma",
        "PostgreSQL"
    ],
      links: [
        {
          type: "Source Fork",
          href: "https://github.com/tanayyo1/cal.com",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Upstream",
          href: "https://github.com/calcom/cal.com",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Inkpad (Excalidraw Clone)",
      href: "https://github.com/tanayyo1/Inkpad",
      dates: "",
      active: true,
      description:
        "Web‑based whiteboard and diagramming tool inspired by Excalidraw, enabling free‑form drawing and diagram creation in the browser.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Canvas API"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/Inkpad",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "AutoTube",
      href: "https://github.com/tanayyo1/AutoTube-",
      dates: "",
      active: true,
      description:
        "YouTube automation tool that downloads videos end‑to‑end, applying preset quality settings and trimming sections based on automation rules.",
      technologies: [
        "TypeScript",
        "Node.js",
        "CLI",
        "YouTube API"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/AutoTube-",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "YtDownloader (Private)",
      href: "https://github.com/tanayyo1/YtDownloader-private-",
      dates: "",
      active: true,
      description:
        "Private repository for a personal YouTube downloading workflow focused on automation and content processing.",
      technologies: [
        "TypeScript",
        "Node.js"
    ],
      links: [
        {
          type: "Source (Private)",
          href: "https://github.com/tanayyo1/YtDownloader-private-",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Feasto Food Delivery",
      href: "https://github.com/tanayyo1/Feasto",
      dates: "",
      active: true,
      description:
        "Food delivery web app built as a MERN‑style practice project with restaurant listings, menus, and ordering flows.",
      technologies: [
        "JavaScript",
        "React",
        "REST API",
        "CSS"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/Feasto",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Zero Email Client Fork",
      href: "https://github.com/tanayyo1/Zero",
      dates: "",
      active: false,
      description:
        "Fork of the Mail0 Zero open‑source email client, exploring privacy‑focused email UX and self‑hosting setup.",
      technologies: [
        "TypeScript",
        "React",
        "Electron",
        "Node.js"
    ],
      links: [
        {
          type: "Source Fork",
          href: "https://github.com/tanayyo1/Zero",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Upstream",
          href: "https://github.com/Mail-0/Zero",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "DropLater",
      href: "https://github.com/tanayyo1/DropLater",
      dates: "",
      active: false,
      description:
        "Lightweight utility project experimenting with frontend interactions and state updates for delayed or scheduled actions.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/DropLater",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Major Project Analysis",
      href: "https://github.com/tanayyo1/MajorProjectAnalysis",
      dates: "",
      active: true,
      description:
        "Repository used for analysis, documentation, and experimentation related to the final‑year major engineering project.",
      technologies: [
        "HTML",
        "Data Analysis",
        "Documentation"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/MajorProjectAnalysis",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "RealTimeChat",
      href: "https://github.com/tanayyo1/RealTimeChat",
      dates: "",
      active: true,
      description:
        "Real‑time chat application showcasing WebSocket‑based messaging with a modern TypeScript and React stack.",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "WebSockets"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/RealTimeChat",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "React From Scratch",
      href: "https://github.com/tanayyo1/ReactFromScratch",
      dates: "",
      active: false,
      description:
        "Learning project focused on building a React application from the ground up with a custom TypeScript setup.",
      technologies: [
        "TypeScript",
        "React",
        "Vite/Webpack"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/ReactFromScratch",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "BMI Calculator",
      href: "https://github.com/tanayyo1/BmiCalculatorReact",
      dates: "",
      active: false,
      description:
        "Beginner‑friendly web app that calculates BMI from user inputs with a simple React UI.",
      technologies: [
        "JavaScript",
        "React",
        "CSS"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/BmiCalculatorReact",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Uber-go (Ride Sharing Backend)",
      href: "https://github.com/tanayyo1/Uber-go",
      dates: "",
      active: true,
      description:
        "Backend‑focused project for a ride‑sharing style application, experimenting with Go services and system design.",
      technologies: [
        "Go",
        "REST API",
        "PostgreSQL",
        "Docker"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/Uber-go",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "New Project (Landing Page)",
      href: "https://github.com/tanayyo1/New-Project",
      dates: "",
      active: false,
      description:
        "Static HTML project used for experimenting with layouts, components, and basic web structure.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/New-Project",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "MindfulMe (Final)",
      href: "https://github.com/tanayyo1/mindfulme-final",
      dates: "",
      active: false,
      description:
        "Front‑end for a mindfulness or wellbeing themed project, focusing on responsive UI and styling.",
      technologies: [
        "CSS",
        "HTML",
        "JavaScript"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/mindfulme-final",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Next.js Experiments (Private)",
      href: "https://github.com/tanayyo1/nextjs",
      dates: "",
      active: true,
      description:
        "Private sandbox for learning Next.js, experimenting with routing, data fetching, and full‑stack patterns.",
      technologies: [
        "TypeScript",
        "Next.js"
    ],
      links: [
        {
          type: "Source (Private)",
          href: "https://github.com/tanayyo1/nextjs",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Next.js Chat (Private)",
      href: "https://github.com/tanayyo1/nextjs-chat",
      dates: "",
      active: true,
      description:
        "Private real‑time chat app built with Next.js, focused on experimenting with server actions and live updates.",
      technologies: [
        "TypeScript",
        "Next.js",
        "WebSockets"
    ],
      links: [
        {
          type: "Source (Private)",
          href: "https://github.com/tanayyo1/nextjs-chat",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "FE-Mindfull (Hackathon)",
      href: "https://github.com/tanayyo1/FE-Mindfull",
      dates: "",
      active: false,
      description:
        "Frontend project built for Hackanova 3.0 with a focus on mental health UX and clean HTML structure.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
    ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/FE-Mindfull",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Video Course Starter Kit (Private)",
      href: "https://github.com/tanayyo1/video-course-starter-kit",
      dates: "",
      active: false,
      description:
        "Private starter kit for hosting or building video course content with a TypeScript front‑end.",
      technologies: [
        "TypeScript",
        "React"
    ],
      links: [
        {
          type: "Source (Private)",
          href: "https://github.com/tanayyo1/video-course-starter-kit",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Video Course Starter Kit 2 (Private)",
      href: "https://github.com/tanayyo1/video-course-starter-kit2",
      dates: "",
      active: false,
      description:
        "Second iteration of a video course starter kit exploring a refined architecture and project structure.",
      technologies: [
        "TypeScript",
        "React"
    ],
      links: [
        {
          type: "Source (Private)",
          href: "https://github.com/tanayyo1/video-course-starter-kit2",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    },
    {
      title: "Pong Game (Private)",
      href: "https://github.com/tanayyo1/pong-game-",
      dates: "",
      active: false,
      description:
        "Classic Pong game built as a college project, focusing on basic game mechanics and rendering.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS"
    ],
      links: [
        {
          type: "Source (Private)",
          href: "https://github.com/tanayyo1/pong-game-",
          icon: <Icons.github className="size-3" />,
        },
    ],
      image: "",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Hackanova 2.0",
      dates: "November 2024",
      location: "Mumbai, India",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],  
} as const;
