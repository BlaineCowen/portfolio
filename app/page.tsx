"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Example projects - replace with your own
  const projects = [
    {
      title: "Texas UIL Results Dashboard",
      description:
        "A dashboard that displays the results of the Texas Music UIL (University Interscholastic League) since 2005. It is a web application that allows users to view the results of the UIL and to filter the results by school, district, and subject. It also uses a fuzzy search to display scores and advanced statistics on a by-song basis.",
      imageUrl:
        "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/uil-screenshot-5DYmgDccXxd2YOAvj84uyVBPDJNJbg.png",
      demoUrl: "https://uil-csr.streamlit.app/",
      githubUrl: "https://github.com/BlaineCowen/UIL_History",
      tags: ["Python", "SQL", "Flask", "HTML", "CSS", "Selenium"],
    },
    {
      title: "ABC Sightreading",
      description:
        "A generative approach to creating customizable music sightreading exercises",
      imageUrl:
        "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/sight-reading-1IbjSXgREhwMaoJLNSV1MXZBVZWdqY.png",
      demoUrl: "https://abc-sightreading.vercel.app/",
      githubUrl: "https://github.com/BlaineCowen/AbcSightreading",
      tags: ["Astro", "Node.js", "Svelte", "Tailwind"],
    },
    // Add more projects as needed
    {
      title: "Oscar Action",
      description:
        "A friendly 'betting' game for the Oscars using real-time odds and data from various api's`",
      imageUrl:
        "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/oscaraction-XiEfyCBYNuDLUWXQJRMvq704FMqS6C.png",
      demoUrl: "https://oscaraction.com",
      githubUrl: "https://github.com/BlaineCowen/oscar-bet",
      tags: [
        "Next.js",
        "Tailwind",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      title: "Super Bowl Squares",
      description: "An online tool for playing Super Bowl Squares",
      imageUrl:
        "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/sb-squares-coccvbKssqfP5AQEVwKANK8dddS7Fp.png",
      demoUrl: "https://sb-squares.vercel.app/",
      githubUrl: "https://github.com/BlaineCowen/sb-squares",
      tags: ["Astro", "Node.js", "Svelte", "Tailwind"],
    },
    {
      title: "Easy Attendance",
      description:
        "An easy-to-use attendance system for large groups with report-tracking and comprehensive analytics",
      imageUrl:
        "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/easy-attendance-kufjTAtqiKbzqSCVvMA724aGlZFHkS.png",
      demoUrl: "https://rehearsal-check-in-inky.vercel.app/",
      githubUrl: "https://github.com/BlaineCowen/rehearsal-check-in",
      tags: [
        "Next.js",
        "Tailwind",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "React Query",
      ],
    },
    {
      title: "Aurdle",
      description: "A Wordle-like game for ear-training",
      imageUrl:
        "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/aurdle-mcRyNzntJbjku8NjHnb2SGNJx8Q0L4.png",
      demoUrl: "https://aurdle.vercel.app/",
      githubUrl: "https://github.com/BlaineCowen/aurdle",
      tags: [
        "Next.js",
        "Tailwind",
        "React",
        "Vercel",
        "Tone.js",
        "Shadcn/UI",
        "Framer Motion",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white" ref={ref}>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full bg-neutral-100/50 bg-grid-pattern"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />

        <div className="container relative z-10 flex items-center justify-center min-h-[100vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[100rem] text-center py-32 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="overflow-visible py-8"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1] mb-0">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500 whitespace-nowrap">
                  Blaine Cowen
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600 font-light">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-900 transition-all duration-300 text-lg h-12 px-6"
              >
                <a
                  onClick={(e) => handleScroll(e, "projects")}
                  href="#projects"
                >
                  View Projects
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 text-lg h-12 px-6"
              >
                <a onClick={(e) => handleScroll(e, "contact")} href="#contact">
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 cursor-pointer"
          onClick={() => {
            const element = document.getElementById("projects");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-neutral-600">Here are some of my recent works</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & Technologies
            </h2>
            <p className="text-neutral-600">Technologies I work with</p>
          </motion.div>

          <div className="mt-16 space-y-12">
            {[
              {
                category: "Frontend Development",
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML5/CSS3",
                  "JavaScript (ES6+)",
                  "Framer Motion",
                  "Redux/Zustand",
                ],
              },
              {
                category: "Backend Development",
                skills: [
                  "Node.js",
                  "Python",
                  "FastAPI",
                  "Express.js",
                  "RESTful APIs",
                  "GraphQL",
                  "WebSockets",
                  "Microservices",
                ],
              },
              {
                category: "Database & Cloud",
                skills: [
                  "PostgreSQL",
                  "MongoDB",
                  "AWS",
                  "Docker",
                  "Redis",
                  "Firebase",
                  "Vercel",
                  "Serverless",
                ],
              },
              {
                category: "Tools & Practices",
                skills: [
                  "Git",
                  "CI/CD",
                  "Jest/Testing",
                  "Agile/Scrum",
                  "System Design",
                  "Performance Optimization",
                  "SEO",
                  "Accessibility",
                ],
              },
            ].map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-neutral-800">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgb(245 245 245)",
                      }}
                      transition={{ duration: 0.2 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 transition-all text-center shadow-sm cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Education & Certifications
            </h2>
            <p className="text-neutral-600">
              Academic background and professional development
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition-all shadow-sm space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Bachelor of Music Education
                </h3>
                <p className="text-neutral-600">
                  University of Texas at San Antonio
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <p className="text-neutral-500 text-sm">
                  Strong foundation in analytical thinking, pattern recognition,
                  and complex system understanding. Skills that directly
                  translate to software development and problem-solving.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition-all shadow-sm space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Harvard CS50</h3>
                <p className="text-neutral-600">Harvard University</p>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <p className="text-neutral-500 text-sm">
                  Intensive computer science curriculum covering data
                  structures, algorithms, web development, and software
                  engineering principles. Developed strong programming
                  fundamentals and problem-solving skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition-all shadow-sm space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  IBM Agile Certification
                </h3>
                <p className="text-neutral-600">IBM</p>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <p className="text-neutral-500 text-sm">
                  Professional certification in agile methodologies,
                  demonstrating expertise in modern software development
                  practices and team collaboration.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-neutral-600">
              I&apos;m always open to new opportunities and collaborations. Feel
              free to reach out!
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-neutral-800 transition-all duration-300 w-full max-w-md group"
              >
                <a
                  href="mailto:Blaine.Cowen@gmail.com"
                  className="flex items-center justify-center gap-2"
                >
                  <span>Send me an email</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <p className="text-neutral-500">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:Blaine.Cowen@gmail.com"
                  className="hover:text-neutral-800 transition-colors underline underline-offset-4"
                >
                  Blaine.Cowen@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
