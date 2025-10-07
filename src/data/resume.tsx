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
  summary_th: "นักพัฒนา Full-Stack ผู้มีใจรักในการสร้างสรรค์โซลูชันใหม่ ๆ อย่างมีนวัตกรรม ด้วยประสบการณ์ในเทคโนโลยีหลากหลาย ผมสนุกกับการทำงานทั้งในส่วนของ Front-End และ Back-End เป้าหมายของผมคือการพัฒนาโปรแกรมที่ใช้งานง่าย มีประสิทธิภาพ และตอบโจทย์ความต้องการของผู้ใช้ง่าย",
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
    "Vite",
    "Next.js",
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
    "vite",
    "nextjs",
  ],
  projects: [
    {
      title: "Auto Lane",
      href: "",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description_en:
        "Developed a new feature that displays real-time values, including the number of unlawful vehicles, the weather, and the number of illegal events recorded by each CCTV camera. Allow users to search for detected vehicle plates by number, province, plate group, and vehicle color, brand, or model. ",
      description_th:
        "พัฒนาฟีเจอร์ใหม่ที่แสดงค่าแบบเรียลไทม์ ซึ่งรวมถึงจำนวนรถผิดกฎหมาย สภาพอากาศ และจำนวนเหตุการณ์ผิดกฎหมายที่บันทึกโดยกล้องวงจรปิดแต่ละตัว ช่วยให้ผู้ใช้ค้นหาป้ายทะเบียนรถที่ตรวจพบได้ตามหมายเลข จังหวัด กลุ่มป้ายทะเบียน และสี ยี่ห้อ หรือรุ่นของรถ",
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
      title: "Nsb Group Mgnt",
      href: "",
      dates: "Feb 2025 - May 2025",
      active: true,
      description_en:
        "Developed a new feature that displays approved user and able to edit user information. Give users the option to search for approved user by nation id, first name, last name etc. ",
      description_th:
        "พัฒนาฟีเจอร์ใหม่ที่จะแสดงผู้ใช้ที่ได้รับอนุมัติและสามารถแก้ไขข้อมูลผู้ใช้ได้ ให้ผู้ใช้สามารถค้นหาผู้ใช้ที่ได้รับอนุมัติตามรหัสประเทศ ชื่อ นามสกุล ฯลฯ",
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
      title: "LPR Center",
      href: "",
      dates: "Jan 2025 - Present",
      active: true,
      description_en:
        "Created a web application for collect data of all police station that uses CCTV cameras to display detected realtime vehicle plates and has a menu for adding additional, unique vehicle plate detection features. Provide a function for managing LPR Center and LPR Checkpoint users. Give users the option to search for detected vehicle plates by province, plate group, plate number, etc and able to print result.",
      description_th:
        "สร้างเว็บแอปพลิเคชันสำหรับรวบรวมข้อมูลของสถานีตำรวจทุกแห่ง โดยใช้กล้องวงจรปิดเพื่อแสดงป้ายทะเบียนรถที่ตรวจพบแบบเรียลไทม์ และมีเมนูสำหรับเพิ่มฟีเจอร์การตรวจจับป้ายทะเบียนรถเพิ่มเติม มีฟังก์ชันสำหรับจัดการผู้ใช้ LPR Center และ LPR Checkpoint ผู้ใช้สามารถค้นหาป้ายทะเบียนรถที่ตรวจพบตามจังหวัด กลุ่มป้ายทะเบียน หมายเลขป้ายทะเบียน ฯลฯ และสามารถพิมพ์ผลลัพธ์ได้",
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
      title: "LPR Checkpoint",
      href: "",
      dates: "Nov 2024 - Present",
      active: true,
      description_en:
        "Created a web application for every police station that uses CCTV cameras to display detected realtime vehicle plates and has a menu for adding additional, unique vehicle plate detection features. Give users the option to search for detected vehicle plates by province, plate group, plate number, etc and able to print result.",
      description_th:
        "สร้างเว็บแอปพลิเคชันสำหรับสถานีตำรวจทุกแห่งที่ใช้กล้องวงจรปิดเพื่อแสดงป้ายทะเบียนรถที่ตรวจพบแบบเรียลไทม์ และมีเมนูสำหรับเพิ่มฟีเจอร์ตรวจจับป้ายทะเบียนรถเพิ่มเติม ช่วยให้ผู้ใช้มีตัวเลือกในการค้นหาป้ายทะเบียนรถที่ตรวจพบตามจังหวัด กลุ่มป้ายทะเบียน หมายเลขป้ายทะเบียน ฯลฯ และสามารถพิมพ์ผลลัพธ์ได้",
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