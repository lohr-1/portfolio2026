import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import IntroBeams from './components/IntroBeams';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import RevealBlock from './components/RevealBlock';
import { ArrowDown, PenTool, Code, Terminal, GitBranch, Server, Smartphone, Globe, Cloud, LayoutPanelLeft, Layout as LayoutIcon, Check, ArrowDownToLine } from 'lucide-react';
import ScrollVelocity from './components/ScrollVelocity';

const tools = [
  { name: 'Figma', icon: <PenTool className="w-8 h-8" /> },
  { name: 'Creative Cloud', icon: <LayoutPanelLeft className="w-8 h-8" /> }, 
  { name: 'Postman', icon: <Globe className="w-8 h-8" /> },
  { name: 'Framer', icon: <LayoutIcon className="w-8 h-8" /> }, 
  { name: 'Git & GitHub', icon: <GitBranch className="w-8 h-8" /> },
  { name: 'Linux', icon: <Terminal className="w-8 h-8" /> },
];

const skills = [
  { name: 'GCP Cert.', icon: <Cloud className="w-8 h-8" /> },
  { name: 'JavaScript', icon: <Code className="w-8 h-8" /> },
  { name: 'TypeScript', icon: <Code className="w-8 h-8" /> },
  { name: 'React', icon: <Code className="w-8 h-8" /> },
  { name: 'Flutter', icon: <Smartphone className="w-8 h-8" /> },
  { name: 'Python', icon: <Code className="w-8 h-8" /> },
  { name: 'Flask', icon: <Server className="w-8 h-8" /> },
  { name: 'Node.js', icon: <Server className="w-8 h-8" /> },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [textExiting, setTextExiting] = useState(false);

  useEffect(() => {
    const main = document.getElementById('main-scroll');
    const handleScroll = () => {
      setIsScrolled(main?.scrollTop > 50);
    };
    main?.addEventListener('scroll', handleScroll);
    return () => main?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            key="intro"
            className="fixed inset-0 z-[100] bg-transparent flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute z-10 flex flex-col items-center justify-center font-display text-white pointer-events-none mix-blend-difference"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={textExiting 
                ? { opacity: 0, y: 120, scale: 0.95 } 
                : { opacity: 1, y: 0, scale: 1 }
              }
              transition={textExiting 
                ? { duration: 0.8, ease: [0.65, 0, 0.35, 1] } 
                : { duration: 1 }
              }
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">FELIPE LOHR.</h1>
              <p className="font-body text-sm md:text-lg tracking-widest uppercase">System Initialization</p>
            </motion.div>
            
            <IntroBeams 
              onComplete={() => setShowIntro(false)} 
              onExitStart={() => setTextExiting(true)}
              durationBeforeExit={2000} 
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Layout>
        {/* 1. GENERAL (Hero) */}
      <section id="general" className="relative min-h-screen border-b border-primary p-8 md:p-16 flex flex-col md:flex-row gap-8 justify-between items-start pt-24 md:pt-16">
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <ArrowDown className="w-10 h-10 animate-bounce text-primary" strokeWidth={2.5} />
        </div>
        <RevealBlock className="max-w-3xl pt-16 md:pt-32">
          <h2 className="font-display text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-8">
            SOFTWARE<br/>ENGINEER.
          </h2>
          <p className="font-body text-xl text-secondary max-w-lg leading-relaxed">
            I build uncompromising digital structures. My approach focuses on deep functionality and brutalist efficiency.
          </p>
        </RevealBlock>
        
        {/* Asymmetrical Block */}
        <RevealBlock delay={0.2} className="bg-primary p-8 text-on-primary border border-primary w-full md:w-80 flex flex-col justify-between shrink-0 self-start mt-8 md:mt-32">
          <div className="font-label uppercase tracking-widest text-xs mb-16">System Status</div>
          <div>
            <div className="font-display text-4xl font-bold tracking-tighter mb-2">AVAILABLE</div>
            <div className="font-body text-sm text-outline">Open for new nodes.</div>
          </div>
        </RevealBlock>
      </section>

      {/* 2. ABOUT ME */}
      <section id="about" className="min-h-screen border-b border-primary flex flex-col">
        <div className="sticky top-0 z-20 bg-background border-b border-primary">
          <RevealBlock className="p-8 md:p-16 pb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight uppercase">01 // About Me</h3>
          </RevealBlock>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-1 p-8 md:p-16 pt-16 md:pt-16">
          <RevealBlock delay={0.1} className="flex flex-col justify-center">
             <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
               A LOGICAL APPROACH TO COMPLEX ARCHITECTURES.
             </h2>
             <div className="font-body text-primary text-lg space-y-6 leading-relaxed max-w-xl">
               <p>
                 I am a UX/UI Designer and Software Developer dedicated to crafting digital products that bridge visual clarity, functional logic, and a deep focus on user experience. Moving seamlessly between interface design, prototyping, flow architecture, and engineering, I approach every project with a holistic perspective—from initial concept to final execution.
               </p>
               <p>
                 I am particularly passionate about building solutions that go beyond visual excellence to achieve total coherence across product strategy, usability, and technical feasibility. This intersection of design precision and structured development defines my analytical process and shapes every decision I make.
               </p>
               <p>
                 In my portfolio, you will find projects that reflect this intentionality: purposeful interfaces, meticulous attention to detail, and a commitment to refining complex requirements into simple, functional, and consistent experiences.
               </p>
             </div>
          </RevealBlock>
          
          <RevealBlock delay={0.2} className="h-full min-h-[400px] border border-primary relative overflow-hidden filter grayscale">
            <img 
               src="https://picsum.photos/seed/portrait/800/800" 
               alt="Personal Portrait" 
               className="object-cover w-full h-full absolute inset-0"
            />
          </RevealBlock>
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section id="projects" className="min-h-screen border-b border-primary flex flex-col">
        <div className="sticky top-0 z-20 bg-background border-b border-primary">
          <RevealBlock className="p-8 md:p-16 pb-8">
            <h3 className="font-display text-2xl font-bold tracking-tight uppercase">02 // Selected Projects</h3>
          </RevealBlock>
        </div>
        
        <div className="flex flex-col">
          <RevealBlock delay={0.1}>
            <Card 
              title="The Dog API Platform" 
              stat="Full Stack · Systems" 
              description="Fragmented and poorly documented domain data often stalls development in niche categories. I built a centralized platform that normalizes and delivers high-performance canine data, providing a robust foundation for pet-sector digital products." 
              image="https://picsum.photos/seed/dogapi/800/400" 
              link="https://github.com/lohr-1/thedogapi"
            />
          </RevealBlock>
          <RevealBlock delay={0.2}>
            <Card 
              title="Inventory Automation" 
              stat="In Progress · Logistics" 
              description="Manual inventory tracking in SMBs is prone to data drift and costly stock-outs. This system automates the auditing cycle, providing real-time visibility and predictive alerts to optimize supply chains and eliminate entry errors." 
              image="https://picsum.photos/seed/stock/800/400" 
            />
          </RevealBlock>
          <RevealBlock delay={0.3}>
            <Card 
              title="LMS Synchronizer" 
              stat="In Progress · API Integration" 
              description="Educators face severe administrative burnout due to data duplication across fragmented tools. I am developing a middleware that bidirectionally syncs task states with the Moodle API, unifying the academic workflow." 
              image="https://picsum.photos/seed/task/800/400" 
            />
          </RevealBlock>
          <RevealBlock delay={0.4}>
            <Card 
              title="Campus Nexus" 
              stat="In Progress · Core Infrastructure" 
              description="Fragmented legacy systems at universities often result in communication silos and delayed admin cycles. This project is a bespoke central hub designed to unify campus routines and provide a single source of truth for institutional data." 
              image="https://picsum.photos/seed/uni/800/400" 
            />
          </RevealBlock>
        </div>
      </section>

      {/* 4. SKILLS & TOOLS */}
      <section id="skills" className="min-h-screen border-b border-primary flex flex-col">
        <div className="sticky top-0 z-20 bg-background border-b border-primary">
          <RevealBlock className="p-8 md:p-16">
             <h3 className="font-display text-2xl font-bold tracking-tight uppercase">03 // Skills & Tools</h3>
          </RevealBlock>
        </div>
        
        <div className="flex flex-col">
           {/* Skills Block */}
           <div>
              <RevealBlock className="p-8 border-b border-primary bg-surface-container-low font-label text-xs tracking-widest uppercase">
                Languages & Frameworks
              </RevealBlock>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-primary border-b border-primary">
                 {skills.map((skill, index) => (
                    <RevealBlock key={skill.name} delay={index * 0.05} className="bg-background col-span-1 aspect-square sm:aspect-auto sm:h-64 flex flex-col items-center justify-center p-8 gap-4 hover:bg-primary hover:text-on-primary transition-colors duration-150">
                       {skill.icon}
                       <span className="font-label text-xs uppercase tracking-widest text-center">{skill.name}</span>
                    </RevealBlock>
                 ))}
              </div>
           </div>
           
           {/* Tools Block */}
           <div>
              <RevealBlock className="p-8 border-b border-primary bg-surface-container-low font-label text-xs tracking-widest uppercase">
                Software & Platforms
              </RevealBlock>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-primary border-b border-primary">
                 {tools.map((tool, index) => (
                    <RevealBlock key={tool.name} delay={index * 0.05} className="bg-background col-span-1 aspect-square sm:aspect-auto sm:h-64 flex flex-col items-center justify-center p-8 gap-4 hover:bg-primary hover:text-on-primary transition-colors duration-150">
                       {tool.icon}
                       <span className="font-label text-xs uppercase tracking-widest text-center">{tool.name}</span>
                    </RevealBlock>
                 ))}
                 <div className="bg-background col-span-1 sm:h-64 hidden lg:block"></div>
                 <div className="bg-background col-span-1 sm:h-64 hidden lg:block"></div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      {/* 5. CONTACT */}
      <section id="contact" className="min-h-screen border-b border-primary pt-16 md:pt-32">
        <RevealBlock className="flex flex-col justify-between h-full min-h-[calc(100vh-theme(spacing.16))] md:min-h-[calc(100vh-theme(spacing.32))]">
          <div className="flex flex-col md:flex-row gap-16 p-8 md:p-16 flex-1">
            {/* Left Column */}
            <div className="flex-1 min-w-0 border-r-0 md:border-r border-primary md:pr-16 flex flex-col justify-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-12 max-w-md leading-tight">
                I'm always open to discussing new exciting opportunities.
              </h2>
              <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <ScrollVelocity
                  velocity={40}
                  texts={[
                    <div className="flex gap-8 mr-8">
                      {[
                        "Solid trust", "Team player", "Result focused"
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="bg-primary rounded-none text-on-primary p-2 flex-shrink-0">
                            <Check className="w-6 h-6" strokeWidth={3} />
                          </div>
                          <span className="font-body text-primary text-3xl font-bold whitespace-nowrap">{text}</span>
                        </div>
                      ))}
                    </div>,
                    <div className="flex gap-8 mr-8 mt-6">
                      {[
                        "Independent", "Efficient", "100% remote"
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="bg-primary rounded-none text-on-primary p-2 flex-shrink-0">
                            <Check className="w-6 h-6" strokeWidth={3} />
                          </div>
                          <span className="font-body text-primary text-3xl font-bold whitespace-nowrap">{text}</span>
                        </div>
                      ))}
                    </div>
                  ]}
                />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex-1 flex flex-col justify-center">
              <a href="mailto:felipelohr2@gmail.com" className="font-display text-[6.5vw] sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary border-b-[3px] border-dotted border-primary hover:bg-primary hover:text-on-primary transition-colors inline-block pb-2 mb-16 self-start whitespace-nowrap">
                felipelohr2@gmail.com
              </a>
              
              <div className="flex flex-col gap-6">
                <a href="/resume.pdf" target="_blank" className="flex items-center gap-4 group w-fit">
                  <ArrowDownToLine className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  <span className="font-body text-lg border-b border-transparent group-hover:border-primary transition-colors">Download resume</span>
                </a>
                <a href="https://www.linkedin.com/in/felipe-lohr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                  <Globe className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  <span className="font-body text-lg border-b border-transparent group-hover:border-primary transition-colors">LinkedIn</span>
                </a>
                <a href="https://github.com/lohr-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                  <GitBranch className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  <span className="font-body text-lg border-b border-transparent group-hover:border-primary transition-colors">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Area from Print */}
          <div className="border-t border-primary p-8 md:p-16 flex flex-col gap-12">
            <div className="flex flex-row justify-between items-center w-full font-body text-secondary text-xs sm:text-sm">
              <div className="flex items-center gap-4 sm:gap-8">
                <a href="#projects" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary">Work</a>
                <a href="/resume.pdf" target="_blank" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary flex items-center gap-2">
                  <ArrowDownToLine className="w-3 h-3" /> <span className="hidden sm:inline">Download </span>Resume
                </a>
              </div>
              <div className="text-right">© {new Date().getFullYear()}<span className="hidden sm:inline"> Felipe Lohr</span></div>
            </div>
          </div>
        </RevealBlock>
      </section>
    </Layout>
    </>
  );
}
