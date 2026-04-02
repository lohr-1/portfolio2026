import React from 'react';
import Layout from './components/Layout';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import RevealBlock from './components/RevealBlock';
import { PenTool, Code, Terminal, GitBranch, Server, Smartphone, Globe, Cloud, LayoutPanelLeft, Layout as LayoutIcon } from 'lucide-react';

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
  return (
    <Layout>
      {/* 1. GENERAL (Hero) */}
      <section id="general" className="min-h-screen border-b border-primary p-8 md:p-16 flex flex-col md:flex-row gap-8 justify-between items-start pt-24 md:pt-16">
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
      <section id="about" className="min-h-screen border-b border-primary p-8 md:p-16 flex flex-col">
        <RevealBlock>
          <div className="border-b border-primary pb-8 mb-16">
             <h3 className="font-display text-2xl font-bold tracking-tight uppercase">01 // About Me</h3>
          </div>
        </RevealBlock>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-1">
          <RevealBlock delay={0.1} className="flex flex-col justify-center">
             <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
               A LOGICAL APPROACH TO COMPLEX ARCHITECTURES.
             </h2>
             <div className="font-body text-primary text-lg space-y-6 leading-relaxed max-w-xl">
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at erat ut dolor dictum vehicula sed in turpis. Aenean aliquet interdum dolor, et laoreet elit sagittis sed. 
               </p>
               <p>
                 Suspendisse vel efficitur dui, ac hendrerit est. Sed fringilla nisi at justo congue, sodales mattis erat venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
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
      <section id="projects" className="min-h-screen border-b border-primary flex flex-col pb-16">
        <RevealBlock className="p-8 md:p-16 pb-8 border-b border-primary">
          <h3 className="font-display text-2xl font-bold tracking-tight uppercase">02 // Selected Projects</h3>
        </RevealBlock>
        
        <div className="flex flex-col">
          <RevealBlock delay={0.1}>
            <Card 
              title="The Dog API" 
              stat="Full Stack" 
              description="[MOCKUP TEXT] A complete full-stack web application designed to consume dog-related data, featuring detailed breed information and dynamic image rendering." 
              image="https://picsum.photos/seed/dogapi/800/400" 
              link="https://github.com/lohr-1/thedogapi"
            />
          </RevealBlock>
          <RevealBlock delay={0.2}>
            <Card 
              title="Gestão de Estoque" 
              stat="In Progress · Management" 
              description="[MOCKUP TEXT] Sistema robusto aplicado para a gestão e controle de estoque, focando em usabilidade e performance para logística empresarial." 
              image="https://picsum.photos/seed/stock/800/400" 
            />
          </RevealBlock>
          <RevealBlock delay={0.3}>
            <Card 
              title="Task Manager & Moodle" 
              stat="In Progress · Education API" 
              description="[MOCKUP TEXT] Task manager dedicado a professores universitários, com integração nativa e bidirecional com a API do Moodle." 
              image="https://picsum.photos/seed/task/800/400" 
            />
          </RevealBlock>
          <RevealBlock delay={0.4}>
            <Card 
              title="Universidade Sistema" 
              stat="In Progress · Core System" 
              description="[MOCKUP TEXT] Aplicação de gestão centralizada construída sob medida para a própria administração das rotinas da universidade." 
              image="https://picsum.photos/seed/uni/800/400" 
            />
          </RevealBlock>
        </div>
      </section>

      {/* 4. SKILLS & TOOLS */}
      <section id="skills" className="min-h-screen border-b border-primary flex flex-col">
        <RevealBlock className="p-8 md:p-16 border-b border-primary">
           <h3 className="font-display text-2xl font-bold tracking-tight uppercase">03 // Skills & Tools</h3>
        </RevealBlock>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 -mt-[1px]">
           {/* Skills Side */}
           <div className="border-r border-b lg:border-b-0 border-primary">
              <RevealBlock className="p-8 border-b border-primary bg-surface-container-low font-label text-xs tracking-widest uppercase">
                Languages & Frameworks
              </RevealBlock>
              <div className="grid grid-cols-2">
                 {skills.map((skill, index) => (
                    <RevealBlock key={skill.name} delay={index * 0.05} className="col-span-1 border-b border-primary sm:border-r aspect-square sm:aspect-auto sm:h-64 flex flex-col items-center justify-center p-8 gap-4 hover:bg-primary hover:text-on-primary transition-colors duration-150">
                       {skill.icon}
                       <span className="font-label text-xs uppercase tracking-widest text-center">{skill.name}</span>
                    </RevealBlock>
                 ))}
              </div>
           </div>
           
           {/* Tools Side */}
           <div>
              <RevealBlock className="p-8 border-b border-primary bg-surface-container-low font-label text-xs tracking-widest uppercase">
                Software & Platforms
              </RevealBlock>
              <div className="grid grid-cols-2">
                 {tools.map((tool, index) => (
                    <RevealBlock key={tool.name} delay={index * 0.05} className="col-span-1 border-b border-primary sm:border-r aspect-square sm:aspect-auto sm:h-64 flex flex-col items-center justify-center p-8 gap-4 hover:bg-primary hover:text-on-primary transition-colors duration-150">
                       {tool.icon}
                       <span className="font-label text-xs uppercase tracking-widest text-center">{tool.name}</span>
                    </RevealBlock>
                 ))}
                 <div className="col-span-2 border-b border-primary sm:border-r h-0 sm:h-64 hidden sm:block"></div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <section id="contact" className="min-h-screen p-8 md:p-16 flex justify-center items-center">
        <RevealBlock className="w-full max-w-2xl border border-primary bg-surface-container-low p-8 md:p-16">
           <h2 className="font-display text-5xl font-bold tracking-tighter mb-4">ESTABLISH<br/>CONNECTION.</h2>
           <p className="font-body text-secondary mb-12">Submit your coordinates. A transmission will be sent.</p>
           
           <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
             <Input label="Identity (Name)" placeholder="John Doe" />
             <Input label="Frequency (Email)" type="email" placeholder="john@domain.com" />
             <div className="flex flex-col relative w-full mb-6">
                <label className="font-label uppercase text-xs mb-2 text-primary">Transmission (Message)</label>
                <textarea 
                  rows="4"
                  placeholder="Your signal here..."
                  className="w-full bg-transparent border-b border-primary py-2 font-body text-primary focus:outline-none focus:bg-surface-container-highest transition-none placeholder:text-outline resize-none"
                />
             </div>
             <Button className="self-start mt-4">Send Protocol</Button>
           </form>
        </RevealBlock>
      </section>

    </Layout>
  );
}
