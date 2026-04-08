import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanay Chaudhari",
  initials: "TC",
  url: "https://tanayyo1.me",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "engineer. building tonr.app, shipping at openclip.",
  summary: `
     <p>baseline. self-taught by breaking things and following the sparks.</p>
     <p>currently at <a href="https://openclip.app/">openclip</a>, fighting NVENC b-frames and patching production at 3am.</p>
     <p>also building <a href="https://tonr.app">tonr</a>, an AI music platform for video creators. solo, mostly because nobody else would.</p>
     <p>most days it's code, gym, guitar, repeat. most of what i ship earns nothing. that's fine.</p>
  `,
  avatarUrl: "/me.jpg",
  skills: [
    "TypeScript",
    "Python",
    "PHP",
    "SQL",
    "Next.js",
    "React",
    "Laravel",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "pgvector",
    "Redis",
    "Docker",
    "Modal",
    "RunPod",
    "FFmpeg",
    "Puppeteer",
    "OpenAI",
    "Gemini",
    "LLMs",
    "RAG",
    "Vector Search",
    "Prompt Engineering",
    "GCP",
    "Vercel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tanayy007@gmail.com",
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
        url: "https://www.linkedin.com/in/tanayyo1/",
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
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/OpenClipLogo.jpg",
      start: "December 2025",
      end: "Present",
      description:
        "Hardened OpenClip's Content Intelligence Hub (RAG chat, 11 tool-calling tools, GPT-4o + Claude Sonnet). Fixed A/V desync in the FFmpeg media-processor by disabling NVENC B-frames and replacing trim/atrim with dual-seek for frame-accurate clip cutting. Built the AI emoji caption system across backend, renderer, and Discord bot. Helped ship the public launch. Now serving 7K+ users and 84K+ rendered clips.",
    },
  ],
  education: [
    {
      school: "Terna Engineering College, Mumbai University",
      href: "https://mu.ac.in/",
      degree: "B.E. Electronics & Telecommunication",
      logoUrl: "/waterloo.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Tonr",
      href: "https://tonr.app",
      dates: "2026 – Present",
      active: true,
      description:
        "AI music platform for video creators. Solo build with hybrid semantic search, custom music generation via Lyria 3 with prompt translation, async 6-stem separation on Modal serverless GPU, and an interactive Web Audio mixer. 500+ tracks processed.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "pgvector",
        "Modal",
        "Cloudflare R2",
        "Clerk",
        "Gemini",
        "Lyria 3",
        "HTDemucs",
        "ACRCloud",
      ],
      links: [
        {
          type: "Website",
          href: "https://tonr.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Openfast",
      href: "https://github.com/tanayyo1/Openfast",
      dates: "Jan 2026 – Present",
      active: true,
      description:
        "Solo-built AI Reddit marketing platform: subreddit analysis, AI post drafting with compliance scoring, BullMQ-backed scheduled posting with retry logic and shadowban detection. 135 commits, full Jest + Playwright test coverage.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "PostgreSQL (Prisma)",
        "Supabase",
        "Redis + BullMQ",
        "OpenAI GPT-4",
        "LangChain",
        "Reddit OAuth",
        "Polar",
        "Playwright",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tanayyo1/Openfast",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GeminiWatermark",
      href: "https://geminiwatermark.tech",
      dates: "Feb 2026 – Present",
      active: true,
      description:
        "Reverse-engineered Google Gemini's image watermark algorithm and shipped a fully browser-based removal tool using NCC detection and per-pixel alpha estimation. No server, no uploads. Open source (MIT) with Polar licensing for the Pro tier.",
      technologies: [
        "JavaScript",
        "Canvas API",
        "esbuild",
        "Supabase",
        "Polar",
      ],
      links: [
        {
          type: "Website",
          href: "https://geminiwatermark.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tanayyo1/geminiwatermark",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  openSource: [
    {
      title: "Mail-0/Zero",
      href: "https://github.com/Mail-0/Zero",
      dates: "Aug 2025",
      active: true,
      description:
        "2 merged PRs to Mail-0/Zero, an open source privacy-focused email client: light-mode email visibility fix (#1994) and button cursor UX improvements (#1993).",
      technologies: ["TypeScript", "React", "Electron", "Node.js"],
      links: [
        {
          type: "PR #1994",
          href: "https://github.com/Mail-0/Zero/pull/1994",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "PR #1993",
          href: "https://github.com/Mail-0/Zero/pull/1993",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Rocket.Chat",
      href: "https://github.com/RocketChat/Rocket.Chat",
      dates: "Mar 2026 – Present",
      active: true,
      description:
        "Contributing to Rocket.Chat core. Open PRs under review. Drafted Google Summer of Code 2026 proposals for the Apps Engine Test Framework and a Personal Calendar UI.",
      technologies: ["TypeScript", "Meteor", "React", "MongoDB"],
      links: [
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
  hackathons: [],
} as const;
