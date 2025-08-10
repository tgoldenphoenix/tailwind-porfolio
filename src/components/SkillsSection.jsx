import { useState } from "react"
import { cn } from "@/lib/utils"

const skills2 = [
  // Frontend
  { name: "devicon-html5-plain-wordmark colored", title: "HTML5" },
  { name: "devicon-css3-plain-wordmark colored", title: "CSS3" },
  { name: "devicon-javascript-plain colored", title: "JavaScript" },
  { name: "devicon-typescript-plain colored", title: "TypeScript" },
  { name: "devicon-react-original colored", title: "ReactJS" },
  { name: "devicon-nodejs-plain-wordmark colored", title: "NodeJS" },
  { name: "devicon-postgresql-plain colored", title: "PostgreSQL" },
  { name: "devicon-materialui-plain colored", title: "Material UI" },
  { name: "devicon-tailwindcss-original colored", title: "TailwindCSS" },
  { name: "devicon-github-original", title: "Git" },
  { name: "devicon-java-plain-wordmark colored", title: "Java" },
  { name: "devicon-bootstrap-plain colored", title: "Bootstrap" },
]

export const SkillsSection = () => {

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="font-medium text-2xl mb-5">Programming Languages & Tools:</div>

        <ul className="text-[3rem] list-none"> 
          {skills2.map((skill, index) => (  
            <li className="relative inline-block mr-[1rem]" key={index}>
              <i className={"skill-badge hover:text-red "+skill.name} title={skill.title}></i>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}