import { HomeIcon } from "lucide-react";
import { Icons } from "../components/icons";

export const DATA = {
  name_en: "Haris Heamanunt",
  name_th: "ฮารีส เหมอนันต์",
  initials: "HH",
  avatarUrl: "/images/profile.png",
  description_en:
    "Full-Stack Developer. I love building things.",
  description_th:
    "นักพัฒนา Full-Stack — ผมหลงใหลในการสร้างสรรค์สิ่งใหม่",
  summary_en: "I'm a Full-Stack Developer with a passion for creating innovative solutions. I have experience in various technologies and enjoy working on both the front-end and back-end of applications. My goal is to build user-friendly and efficient software that meets the needs of users.",
  summary_th: "ฉันคือนักพัฒนา Full-Stack ผู้มีใจรักในการสร้างสรรค์โซลูชันใหม่ ๆ อย่างมีนวัตกรรม ด้วยประสบการณ์ในเทคโนโลยีหลากหลาย ผมสนุกกับการทำงานทั้งในส่วนของ Front-End และ Back-End เป้าหมายของผมคือการพัฒนาโปรแกรมที่ใช้งานง่าย มีประสิทธิภาพ และตอบโจทย์ความต้องการของผู้ใช้ง่าย",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "haris_are@outlook.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Haris-HH",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haris-heamanunt-4a446013a/",
        icon: Icons.linkedin,

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
      company: "Core IT Solution",
      href: "https://www.facebook.com/tripleeyescctv/?locale=th_TH",
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/images/work/core-it-solution.jpg",
      start: "Nov 2024",
      end: "Present",
      description_en: "Developed and maintained web applications using React.js, Node.js, and TypeScript.",
      description_th: "พัฒนาและดูแลแอปพลิเคชันบนเว็บโดยใช้ React.js, Node.js และ TypeScript",
    },
    {
      company: "Merypto",
      href: "https://www.merypto.com/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/images/work/merypto.png",
      start: "Oct 2024",
      end: "Oct 2024",
      description_en: "Learn about Lark API, Telegram API, Telegram mini app",
      description_th: "ศึกษาการใช้งาน Lark API, Telegram API และ Telegram Mini App",
    },
    {
      company: "Transtron (THAILAND) CO., LTD.",
      href: "https://www.transtron.com/en/",
      location: "Thailand",
      title: "Software Engineer - Senior Software Engineer",
      logoUrl: "/images/work/transtron.png",
      start: "Jan 2023",
      end: "July 2024",
      description_en: "Developed and maintained web applications using Vue.js, Java. Collaborated with a team of developers, contributing to a 10% increase in team productivity. Trained and mentored junior developers, improving their skills in web development.",
      description_th: "พัฒนาและดูแลแอปพลิเคชันบนเว็บโดยใช้ Vue.js และ Java ร่วมมือกับทีมพัฒนา ช่วยเพิ่มประสิทธิภาพการทำงานของทีมขึ้น 10% พร้อมทั้งฝึกอบรมและให้คำแนะนำแก่น้องในทีม ช่วยยกระดับทักษะด้านการพัฒนาเว็บ",
    },
    {
      company: "Human Resocia (ヒューマンリソシア)",
      href: "https://gitcareer.resocia.jp/",
      location: "Japan",
      title: "Software Engineer",
      logoUrl: "/images/work/human-resocia.png",
      start: "Sep 2018",
      end: "Jan 2021",
      description_en: "Developed and maintained application using Java. Generated metadata file using data from excel and xml files.",
      description_th: "พัฒนาและดูแลแอปพลิเคชันโดยใช้ภาษา Java พร้อมทั้งสร้างไฟล์ metadata จากข้อมูลในไฟล์ Excel และ XML",
    },
  ],
  education: [
    {
      school: "Mae Fah Luang University",
      href: "https://en.mfu.ac.th/home.html",
      degree: "Bachelor's Degree of Computer Engineering",
      logoUrl: "/images/education/mae-fah-luang-university.png",
      start: "2013",
      end: "2017",
    },
  ],
  skills: [
    "React",
    "Vue.js",
    "Node.js",
    "Typescript",
    "Java",
    "Python",
    "Postgres",
    "MySQL",
    "Docker",
    "C#",
    "Git",
    "Tailwind CSS",
    "Material UI",
    "Shadcn UI",
    "Magic UI",
  ],
  skillImages: [
    "react",
    "vue",
    "nodejs",
    "typescript",
    "python",
    "postgresql",
    "docker",
    "csharp",
    "mysql",
    "tailwind",
    "shadcn",
    "magicUi",
    "mui",
  ],
  projects: [
    {
      title: "CCTV Detect Vehicle",
      href: "",
      dates: "Oct 2024 - Present",
      active: true,
      description_en:
        "Developed a real-time frontend web application to display vehicle detection events and manage watchlist entries—allowing users to flag vehicles at specific threat levels (e.g., Blacklist for terrorism or stolen cases).",
      description_th:
        "พัฒนาเว็บแอปพลิเคชันแบบเรียลไทม์สำหรับแสดงเหตุการณ์การตรวจจับยานพาหนะ และจัดการรายการเฝ้าระวัง โดยเปิดให้ผู้ใช้สามารถตั้งค่ายานพาหนะตามระดับความเสี่ยง เช่น การขึ้นบัญชีดำกรณีเกี่ยวข้องกับการก่อการร้ายหรือรถถูกขโมย",
      technologies: [
        "Typescript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Material UI",
        "Git",
      ],
      links: [
      ],
      image: "",
      video: "",
    },
    {
      title: "Mea Sai Badminton",
      href: "",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description_en:
        "Developed a dynamic badminton management website that handles player queueing, pricing calculations.",
      description_th:
        "พัฒนาเว็บไซต์จัดการแบดมินตันแบบไดนามิก ที่รองรับการจัดคิวผู้เล่นและคำนวณค่าใช้จ่ายโดยอัตโนมัติ",
      technologies: [
        "Typescript",
        "HTML",
        "CSS",
        "React",
        "MySQL",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Haris-HH/MaesaiBadmintonClub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/mea-sai-badminton.mp4",
    },
    {
      title: "Fleet Management Website v3",
      href: "",
      dates: "Jan 2023 - Jul 2024",
      active: true,
      description_en:
        "Member the development and maintenance of a fleet management web platform, and RESTful APIs—featuring real-time driver behavior analytics, RTMP video streaming, and ActiveMQ notifications. Contributing to a 10% boost in team productivity.",
      description_th:
        "มีส่วนร่วมในการพัฒนาและดูแลแพลตฟอร์มบริหารจัดการยานพาหนะบนเว็บ พร้อมทั้ง RESTful API โดยมีฟีเจอร์วิเคราะห์พฤติกรรมผู้ขับขี่แบบเรียลไทม์, การสตรีมวิดีโอผ่าน RTMP และระบบแจ้งเตือนผ่าน ActiveMQ ช่วยเพิ่มประสิทธิภาพการทำงานของทีมขึ้น 10%",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Vue.js",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Cassandra",
        "ActiveMQ",
        "Tortoise SVN"
      ],
      links: [
      ],
      image: "",
      video: "",
    },
    {
      title: "Fleet Management Website v2",
      href: "",
      dates: "Mar 2021 - Jan 2023",
      active: true,
      description_en:
        "Developed and maintained a fleet management web application, featuring real-time driver behavior analytics, API integration, and ActiveMQ-based notifications from in-vehicle terminals.",
      description_th:
        "พัฒนาและดูแลเว็บแอปพลิเคชันสำหรับบริหารจัดการยานพาหนะ โดยมีฟีเจอร์วิเคราะห์พฤติกรรมผู้ขับขี่แบบเรียลไทม์ การเชื่อมต่อกับ API และระบบแจ้งเตือนจากอุปกรณ์ในรถผ่าน ActiveMQ",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Vue.js",
        "C#",
        ".NET",
        "MSSQL",
        "ActiveMQ",
        "Tortoise SVN"
      ],
      links: [
      ],
      image: "",
      video: "",
    }
  ],
} as const;