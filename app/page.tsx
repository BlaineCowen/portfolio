"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  // Example projects - replace with your own
  const projects = [
    {
      title: "Texas UIL Results Dashboard",
      description:
        "A dashboard that displays the results of the Texas Music UIL (University Interscholastic League) since 2005. It is a web application that allows users to view the results of the UIL and to filter the results by school, district, and subject. It also uses a fuzzy search to display scores and advanced statistics on a by-song basis.",
      imageUrl: "/uil-screenshot.png",
      demoUrl: "https://uil-csr.streamlit.app/",
      githubUrl: "https://github.com/yourusername/project1",
      tags: ["Python", "SQL", "Flask", "HTML", "CSS", "Selenium"],
    },
    {
      title: "Project 2",
      description:
        "Description of your second project. What problems did it solve? What did you learn?",
      imageUrl: "/placeholder.jpg",
      demoUrl: "https://demo2.example.com",
      githubUrl: "https://github.com/yourusername/project2",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    // Add more projects as needed
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-neutral-100/50 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />

        <div className="container relative z-10 flex items-center justify-center min-h-[100vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[100rem] text-center py-20 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="overflow-hidden"
            >
              <h1 className="text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[10rem] font-bold tracking-tight leading-[0.8] -mb-4">
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
              <p className="mt-12 text-3xl sm:text-4xl md:text-5xl text-neutral-600 font-light">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-20 flex flex-wrap justify-center gap-8"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-900 transition-all duration-300 text-2xl h-16 px-10"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 text-2xl h-16 px-10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
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

      {/* Skills Section */}
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind",
              "MongoDB",
              "PostgreSQL",
              "AWS",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 transition-colors text-center shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
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
              I&apos;m always open to new opportunities and collaborations
            </p>
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-neutral-800 transition-all duration-300"
            >
              <a href="mailto:your.email@example.com">Send me an email</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
