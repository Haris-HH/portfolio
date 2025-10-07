"use client";
import { useEffect, useState, useRef } from "react";
import Markdown from "react-markdown";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Components
import BlurFadeText from "../components/magicui/blur-fade-text";
import BlurFade from "../components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { ResumeCard } from "../components/resume-card";
import { IconCloud } from "../components/magicui/icon-cloud";
import { ProjectCard } from "../components/project-card";

// Data
import { DATA } from "../data/resume";

// Icons
import { Icons } from "../components/icons";

// i18n
import { useTranslation } from "react-i18next";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  // i18n
  const { i18n, t } = useTranslation();
  // Theme
  const { theme } = useTheme();
  
  const SkillsSection = () => {
    const { ref, inView } = useInView({ threshold: 0.3 });
    const [windowHeight, setWindowHeight] = useState(0);

    const controls = useAnimation();

    useEffect(() => {
      setWindowHeight(window.innerHeight);
      const handleResize = () => setWindowHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } 
      else {
        controls.start("hidden");
      }
    }, [inView, controls]);

    // Parallax effect for icons container on scroll
    const skillsRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Track Y offset of the skills section relative to viewport
    const yRange = useTransform(scrollY, () => {
      if (!skillsRef.current || windowHeight === 0) return 0;
      const rect = skillsRef.current.getBoundingClientRect();
      return Math.min(Math.max(windowHeight - rect.top, 0), windowHeight);
    });

    const iconsY = useTransform(yRange, [0, windowHeight], [50, 0]);
    const iconsOpacity = useTransform(yRange, [0, windowHeight / 2], [0, 1]);

    // Badge container variants for staggered fade in
    const badgeVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.3 }
      }),
    };

    return (
      <section id="skills" ref={ref}>
        <div className="flex min-h-0 max-w-3xl mx-auto flex-col gap-y-1">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t('section.skills')}</h2>
          </BlurFade>

          <motion.div
            ref={skillsRef}
            style={{ y: iconsY, opacity: iconsOpacity }}
            className="flex items-center justify-center"
          >
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <IconCloud 
                icons={[
                  <Icons.java key="java" size={100} />,
                  <Icons.vue key="vue" size={100} />,
                  <Icons.react key="react" size={100} />,
                  <Icons.csharp key="csharp" size={100} />,
                  <Icons.docker key="docker" size={100} />,
                  <Icons.postgresql key="postgresql" size={100} />,
                  <Icons.nodejs key="nodejs" size={100} />,
                  <Icons.typescript key="typescript" size={100} />,
                  <Icons.mui key="mui" size={100} />,
                  <Icons.git key="git" size={100} />,
                  <Icons.mysql key="mysql" size={100} />,
                  <Icons.tailwind key="tailwind" size={100} />,
                  <Icons.shadcn key="shadcn" size={100} theme={theme} />,
                  <Icons.magicUi key="magicUi" size={100} />,
                  <Icons.vite key="vite" size={100} />,
                  <Icons.nextjs key="nextjs" size={100} theme={theme} />,
                ]}
              />
            </BlurFade>
          </motion.div>

          <div className="flex flex-wrap gap-1 mt-4">
            {DATA.skills.map((skill, i) => (
              <motion.div
                key={skill}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={badgeVariants}
              >
                <Badge>{skill}</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="title">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex flex-col flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={i18n.language === 'en' ? `Hi, I'm ${DATA.name_en}` : `👋 ผม ${DATA.name_th}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={i18n.language === 'en' ? DATA.description_en : DATA.description_th}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name_en} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="mx-auto w-full max-w-3xl">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{t('section.about')}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              <Markdown>
                {i18n.language === 'en' ? DATA.summary_en : DATA.summary_th}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work-experience">
        <div className="flex min-h-0 max-w-3xl mx-auto flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t('section.work-experience')}</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={i18n.language === 'en' ? work.description_en : work.description_th}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 max-w-3xl mx-auto flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t('section.education')}</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <SkillsSection />
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            {
              i18n.language === 'en' ? (
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                      {t('section.projects')}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Check out my latest work
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      I&apos;ve worked on a variety of projects, from simple
                      window application, simple websites to complex web applications. Here are a few of my
                      favorites.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                      {t('section.projects')}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      ผลงานล่าสุด
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      ผมเคยทำงานใน Project หลากหลาย ตั้งแต่แอปพลิเคชันบน Windows ง่ายๆ เว็บไซต์ง่ายๆ ไปจนถึงแอปพลิเคชันเว็บที่ซับซ้อน นี่คือโปรเจ็กต์บางส่วน
                    </p>
                  </div>
                </div>
              )
            }
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={i18n.language === 'en' ? project.description_en : project.description_th}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            {
              i18n.language === 'en' ? (
                <div className="space-y-3">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    {t('section.contact')}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Want to contact? Just send me a dm{" "}
                    <div>
                      <Link
                        href={DATA.contact.social.LinkedIn.url}
                        className="text-blue-500 hover:underline"
                      >
                        with a direct question on LinkIn
                      </Link>{" "}
                    </div>
                    and I&apos;ll respond ASAP.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    {t('section.contact')}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    ติดต่อ
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    อยากติดต่อ? แค่ส่งข้อความส่วนตัวมา{" "}
                    <Link
                      href={DATA.contact.social.LinkedIn.url}
                      className="text-blue-500 hover:underline"
                    >
                      พร้อมคำถามโดยตรงบน LinkedIn
                    </Link>{" "}
                    และผมจะตอบกลับโดยเร็วที่สุด
                  </p>
                </div>
              )
            }
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
