import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Trello",
    description: "MERN stack Work Management web application.",
    image: "/projects/light.png",
    tags: ["React", "Material UI", "Nodejs Express", "MongoDB Atlas"],
    demoUrl: "https://trello-web-sage-psi.vercel.app/",
    githubUrl: "https://github.com/tgoldenphoenix/trello-clone-web",
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {" "}
          Latest <span className="text-primary"> Side Projects </span>
        </h2>

        {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p> */}

        {/* <div className="container">
          <div className="flex-wrap">
            <div>
              <a href="https://www.google.com/" className="block relative max-w-[530px]" target="_blank" rel="noreferrer">
                <div className="flex flex-col caption absolute">
                  <div className="caption-content">
                    <div>Pod Foods</div>
                    <p>Software and data-enabled distribution and logistics platform!</p>
                  </div>
                </div>
                <img src="/projects/light.png" alt="" className="max-w-[100%]"/>
              </a>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col items-center justify-center gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="md:w-[42rem] group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 md:h-78 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl &&
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    }
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}