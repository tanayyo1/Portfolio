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
        "Engineered the rendering pipeline for OpenClip to efficiently visualize AI-generated video segments within a web environment. Integrating a robust Discord bot microservice to facilitate seamless bi directional communication between the application backend and user communities ",
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
      title: "decodedocs",
      href: "https://decodedocs.tech",
      dates: "",
      active: true,
      description:
        "AI document simplifier that analyzes contracts, NDAs, and legal agreements—extracting key terms, flagging risky clauses, and explaining everything in plain English with an interactive chat assistant.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "OpenAI GPT-4",
        "Tailwind CSS",
        "NextAuth.js",
        "Supabase",
        "PDF Processing",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/decodedocs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Personal Portfolio",
      href: "tanayyo1.me",
      dates: "",
      active: true,
      description:
        "Personal portfolio website showcasing projects, open source contributions, and professional experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub Pages"
    ],
      links: [
        {
          type: "Website",
            href: "https://github.com/tanayyo1/Portfolio",
            icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
            href: "https://github.com/tanayyo1/Portfolio",
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
      title: "Feasto Food Delivery",
      href: "https://feasto-ejaa79yio-tanays-projects-7c87c213.vercel.app/",
      dates: "",
      active: true,
      description:
        "Food delivery web app built as a MERN style practice project with restaurant listings, menus, and ordering flows.",
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
      title: "RealTimeChat",
      href: "https://github.com/tanayyo1/RealTimeChat",
      dates: "",
      active: true,
      description:
        "Real time chat application showcasing WebSocket based messaging with a modern TypeScript and React stack.",
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
    }
  ],
  openSource: [
    {
      title: "Zero Email Client",
      href: "https://github.com/tanayyo1/Zero",
      dates: "",
      active: true,
      description:
        "Contributing to Mail0's Zero, an open source, privacy focused email client. Exploring self-hosting setup and email UX improvements.",
      technologies: ["TypeScript", "React", "Electron", "Node.js"],
      links: [
        {
          type: "My Fork",
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
      title: "Cal.com",
      href: "https://github.com/tanayyo1/cal.com",
      dates: "",
      active: true,
      description:
        "Contributing to Cal.com, the open source Calendly alternative. Working on scheduling infrastructure and calendar integrations.",
      technologies: ["TypeScript", "Next.js", "Prisma", "tRPC"],
      links: [
        {
          type: "My Fork",
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
      title: "Rocket.Chat",
      href: "https://github.com/tanayyo1/Rocket.Chat",
      dates: "",
      active: true,
      description:
        "Contributing to Rocket.Chat, open source team communication platform. Exploring real time messaging and enterprise collaboration features.",
      technologies: ["TypeScript", "Meteor", "React", "MongoDB"],
      links: [
        {
          type: "My Fork",
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
  ],
  hackathons: [
    {
      title: "Hackanova 2.0",
      dates: "2023",
      location: "Mumbai",
      description: "Built a project",
      image: "hacknova.png",
      links: [],
    },
  ],
} as const;
