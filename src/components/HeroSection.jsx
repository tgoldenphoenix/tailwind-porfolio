import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
  return (
    // Do I need px-4
    <section id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <img className="h-40 w-40 rounded-full border-[0.35rem] border-white object-cover shadow-xl mb-8" src="/profile-pic.jpg" alt="" />

      <div className="container max-w-4xl mx-auto text-center z-10">
        {/* space-y-6 add spaces between child elements */}
        <div className="space-y-6">
          {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> An Hao</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Pham</span>
          </h1> */}
          <h1 class="text-4xl md:text-5xl font-medium !leading-[1.5] light-hero-header">
            Hi there!
            <span class="font-bold underline"> I'm An Hao,</span>
            <br/>
            <span class="font-bold">a Full-Stack Web Developer</span>. 
          </h1>
          <p className="text-lg md:text-2xl">Welcome to my site ✋</p>
          {/* <p 
            className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"
          >Hi there! I'm An Hao, a Software Engineer. Welcome to my site ✋</p> */}

          <div  className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* This absolute div is not a flex item */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  )
}