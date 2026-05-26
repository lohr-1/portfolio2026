import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import RevealBlock from './components/RevealBlock';
import StairPreloader from './components/StairPreloader';
import { projectsData } from './data/projectsData';
import ProjectModal from './components/ProjectModal';
import ScrollVelocity from './components/ScrollVelocity';
import {
  ArrowDown,
  PenTool,
  GitBranch,
  Globe,
  LayoutPanelLeft,
  Layout as LayoutIcon,
  Check,
  ArrowDownToLine,
  Palette,
  Compass,
  Users,
  FileText,
  ClipboardCheck
} from 'lucide-react';

const tools = [
  { name: 'Figma', icon: <LayoutPanelLeft className="w-8 h-8" /> },
  { name: 'Adobe CC', icon: <Palette className="w-8 h-8" /> },
  { name: 'Framer', icon: <LayoutIcon className="w-8 h-8" /> },
  { name: 'FigJam', icon: <Users className="w-8 h-8" /> },
  { name: 'Maze', icon: <ClipboardCheck className="w-8 h-8" /> },
  { name: 'Notion', icon: <FileText className="w-8 h-8" /> },
];

const skills = [
  { name: 'Information Arch.', icon: <GitBranch className="w-8 h-8" /> },
  { name: 'Journeys & Flows', icon: <Compass className="w-8 h-8" /> },
  { name: 'Design Systems', icon: <LayoutPanelLeft className="w-8 h-8" /> },
  { name: 'Wireframing', icon: <PenTool className="w-8 h-8" /> },
  { name: 'B2B SaaS Strategy', icon: <Globe className="w-8 h-8" /> },
  { name: 'Usability Testing', icon: <ClipboardCheck className="w-8 h-8" /> },
  { name: 'Visual Design', icon: <Palette className="w-8 h-8" /> },
  { name: 'Product Doc.', icon: <FileText className="w-8 h-8" /> },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const main = document.getElementById('main-scroll');
    const handleScroll = () => {
      setIsScrolled(main?.scrollTop > 50);
    };
    main?.addEventListener('scroll', handleScroll);
    return () => main?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Layout>

        {/* 1. GENERAL (Hero) */}
        <section id="general" className="relative min-h-screen border-b border-divider flex flex-col justify-between overflow-hidden">

          {/* Editorial Structural Markers */}
        <div className="absolute top-8 right-8 flex flex-col items-end gap-1 font-label text-[10px] text-outline uppercase tracking-widest pointer-events-none select-none z-0">
          <span>[SYS] PORTFOLIO // {new Date().getFullYear()}</span>
          <span>{t('hero.status')}</span>
        </div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 origin-right font-label text-[10px] text-outline uppercase tracking-widest pointer-events-none select-none z-0 hidden lg:flex" style={{ writingMode: 'vertical-rl' }}>
          {t('hero.overview')}
        </div>

        {/* Main Hero Area */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-3 items-stretch w-full">
          <StairPreloader delay={0.1} direction="ltr" className="lg:col-span-2 p-8 md:p-16 flex flex-col justify-center">
            <RevealBlock className="pt-8 lg:pt-0">
              <h2 className="font-display text-6xl sm:text-7xl md:text-[9.5rem] font-bold tracking-tighter leading-[0.8] uppercase text-primary">
                FELIPE<br />LOHR.
              </h2>
              <span className="font-label uppercase tracking-widest text-xs font-bold text-primary mt-6 block px-1 py-1 border border-divider bg-surface w-fit">
                {t('hero.role')}
              </span>
            </RevealBlock>
          </StairPreloader>

          <StairPreloader delay={0.2} direction="ltr" className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-divider p-8 md:p-16 flex flex-col justify-center">
            <RevealBlock delay={0.2} className="max-w-md">
              <span className="font-label uppercase tracking-widest text-xs text-outline block mb-4">{t('hero.coreFocus')}</span>
              <p className="font-body text-lg md:text-xl text-primary leading-relaxed">
                {t('hero.coreFocusDesc')}
              </p>
            </RevealBlock>
          </StairPreloader>
        </div>

        {/* Stats & Actions Scaffold Grid */}
        <div className="relative z-10 w-full border-t border-divider grid grid-cols-1 lg:grid-cols-3 bg-background">
          <StairPreloader
            delay={0.3}
            direction="ttb"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group p-8 border-b lg:border-b-0 lg:border-r border-divider flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer select-none"
          >
            <RevealBlock delay={0.3} className="flex flex-col gap-8 h-full justify-between">
              <div className="font-label text-xs uppercase tracking-widest text-outline group-hover:text-on-primary/60 transition-colors">{t('hero.workTab')}</div>
              <div>
                <div className="font-display text-3xl font-bold tracking-tight mb-2 uppercase">{t('hero.workTitle')}</div>
                <div className="font-body text-sm text-outline group-hover:text-on-primary/80 transition-colors">{t('hero.workDesc')}</div>
              </div>
            </RevealBlock>
          </StairPreloader>

          <StairPreloader
            delay={0.45}
            direction="ttb"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group p-8 border-b lg:border-b-0 border-divider flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer select-none"
          >
            <RevealBlock delay={0.4} className="flex flex-col gap-8 h-full justify-between">
              <div className="font-label text-xs uppercase tracking-widest text-outline group-hover:text-on-primary/60 transition-colors">{t('hero.expTab')}</div>
              <div>
                <div className="font-display text-3xl font-bold tracking-tight mb-2 uppercase">{t('hero.expTitle')}</div>
                <div className="font-body text-sm text-outline group-hover:text-on-primary/80 transition-colors">{t('hero.expDesc')}</div>
              </div>
            </RevealBlock>
          </StairPreloader>

          <StairPreloader
            delay={0.6}
            direction="ttb"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="group p-8 lg:border-l border-divider flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer select-none"
          >
            <RevealBlock delay={0.5} className="flex flex-col gap-8 h-full justify-between">
              <div className="font-label text-xs uppercase tracking-widest text-outline group-hover:text-on-primary/60 transition-colors">{t('hero.skillsTab')}</div>
              <div>
                <div className="font-display text-3xl font-bold tracking-tight mb-2 uppercase">{t('hero.skillsTitle')}</div>
                <div className="font-body text-sm text-outline group-hover:text-on-primary/80 transition-colors">{t('hero.skillsDesc')}</div>
              </div>
            </RevealBlock>
          </StairPreloader>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 right-8 font-label text-[10px] uppercase tracking-widest text-outline flex items-center gap-2 pointer-events-none select-none hidden lg:flex z-20">
          {t('hero.scroll')} <ArrowDown className="w-3 h-3 animate-bounce" />
        </div>
      </section>

      {/* 2. ABOUT ME */}
      <section id="about" className="min-h-screen border-b border-divider flex flex-col">
        <div className="sticky top-0 z-20 bg-background border-b border-divider flex items-center justify-between p-8 md:p-16 pb-8">
          <RevealBlock>
            <h3 className="font-display text-2xl font-bold tracking-tight uppercase">{t('about.sectionTitle')}</h3>
          </RevealBlock>
          <span className="font-label text-[10px] text-outline uppercase tracking-widest hidden md:block select-none pointer-events-none">{t('about.bioData')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-1 p-8 md:p-16 pt-16 md:pt-16">
          <RevealBlock delay={0.1} className="flex flex-col justify-center">
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
              {t('about.title')}
            </h2>
            <div className="font-body text-primary text-lg space-y-6 leading-relaxed max-w-xl">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </RevealBlock>

          {/* Expertise Focus */}
          <RevealBlock delay={0.2} className="hidden sm:flex flex-col justify-center border-l-0 lg:border-l border-divider pl-0 lg:pl-16 mt-16 lg:mt-0">
            <h4 className="font-display text-xl font-bold uppercase tracking-wider mb-6">{t('about.expertiseTitle')}</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t('about.expertise', { returnObjects: true }).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-primary text-on-primary p-0.5 mt-1">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="font-body text-primary text-base">{item}</span>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section id="projects" className="min-h-screen border-b border-divider flex flex-col">
        <div className="sticky top-0 z-20 bg-background border-b border-divider flex items-center justify-between p-8 md:p-16 pb-8">
          <RevealBlock>
            <h3 className="font-display text-2xl font-bold tracking-tight uppercase">{t('projects.sectionTitle')}</h3>
          </RevealBlock>
          <span className="font-label text-[10px] text-outline uppercase tracking-widest hidden md:block select-none pointer-events-none">{t('projects.caseStudies')}</span>
        </div>

        <div className="flex flex-col">
          {projectsData.map((project, idx) => (
            <RevealBlock key={project.id} delay={0.1 * (idx + 1)}>
              <Card
                title={project.title}
                stat={project.stat}
                description={project.description}
                image={project.image}
                link={project.link}
                onClick={() => setActiveProject(project)}
              />
            </RevealBlock>
          ))}
        </div>
      </section>

      {/* 4. SKILLS & TOOLS */}
      <section id="skills" className="min-h-screen border-b border-divider flex flex-col">
        <div className="sticky top-0 z-20 bg-background border-b border-divider flex items-center justify-between p-8 md:p-16 pb-8">
          <RevealBlock>
            <h3 className="font-display text-2xl font-bold tracking-tight uppercase">{t('skills.sectionTitle')}</h3>
          </RevealBlock>
          <span className="font-label text-[10px] text-outline uppercase tracking-widest hidden md:block select-none pointer-events-none">{t('skills.techStack')}</span>
        </div>

        <div className="flex flex-col">
          {/* Skills Block */}
          <div>
            <RevealBlock className="p-8 border-b border-divider bg-surface-container-low font-label text-xs tracking-widest uppercase">
              {t('skills.designSkills')}
            </RevealBlock>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <RevealBlock key={skill.name} delay={index * 0.05} className="col-span-1 border-b border-divider border-r [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 aspect-square sm:aspect-auto sm:h-64 flex flex-col items-center justify-center p-8 gap-4 hover:bg-primary hover:text-on-primary transition-colors duration-150 animate-fade">
                  {skill.icon}
                  <span className="font-label text-xs uppercase tracking-widest text-center">{skill.name}</span>
                </RevealBlock>
              ))}
            </div>
          </div>

          {/* Tools Block */}
          <div>
            <RevealBlock className="p-8 border-b border-divider bg-surface-container-low font-label text-xs tracking-widest uppercase">
              {t('skills.designTools')}
            </RevealBlock>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {tools.map((tool, index) => (
                <RevealBlock key={tool.name} delay={index * 0.05} className="col-span-1 border-b border-divider border-r [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 aspect-square sm:aspect-auto sm:h-64 flex flex-col items-center justify-center p-8 gap-4 hover:bg-primary hover:text-on-primary transition-colors duration-150">
                  {tool.icon}
                  <span className="font-label text-xs uppercase tracking-widest text-center">{tool.name}</span>
                </RevealBlock>
              ))}
              <div className="col-span-1 border-b border-divider border-r sm:h-64 hidden lg:block animate-fade"></div>
              <div className="col-span-1 border-b border-divider sm:h-64 hidden lg:block animate-fade"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <section id="contact" className="min-h-screen border-b border-divider pt-16 md:pt-32">
        <RevealBlock className="flex flex-col justify-between h-full min-h-[calc(100vh-theme(spacing.16))] md:min-h-[calc(100vh-theme(spacing.32))]">
          <div className="flex flex-col md:flex-row gap-16 p-8 md:p-16 flex-1">
            {/* Left Column */}
            <div className="flex-1 border-r-0 md:border-r border-divider md:pr-16 flex flex-col justify-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-12 max-w-md leading-tight">
                {t('contact.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 max-w-lg">
                {t('contact.qualities', { returnObjects: true }).map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-primary rounded-none text-on-primary p-1 flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="font-body text-primary text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col justify-center">
              <a href="mailto:felipelohr2@gmail.com" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary border-b-[4px] border-dotted border-divider hover:bg-primary hover:text-on-primary transition-colors inline-block pb-2 mb-16 self-start">
                felipelohr2@gmail.com
              </a>

              <div className="flex flex-col gap-6">
                <a href="/resume.pdf" target="_blank" className="flex items-center gap-4 group w-fit">
                  <ArrowDownToLine className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                  <span className="font-body text-lg border-b border-transparent group-hover:border-divider transition-colors">{t('contact.downloadResume')}</span>
                </a>
                <a href="https://www.linkedin.com/in/felipe-lohr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                  <Globe className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                  <span className="font-body text-lg border-b border-transparent group-hover:border-divider transition-colors">LinkedIn</span>
                </a>
                <a href="https://github.com/lohr-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                  <GitBranch className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                  <span className="font-body text-lg border-b border-transparent group-hover:border-divider transition-colors">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Area from Print */}
          <div className="border-t border-divider p-8 md:p-16 flex flex-col gap-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-body text-outline text-sm">
              <div className="flex flex-wrap gap-8">
                <a href="#projects" className="hover:text-primary transition-colors border-b border-transparent hover:border-divider">{t('contact.work')}</a>
                <a href="/resume.pdf" target="_blank" className="hover:text-primary transition-colors border-b border-transparent hover:border-divider flex items-center gap-2">
                  <ArrowDownToLine className="w-3 h-3" /> {t('contact.downloadResume')}
                </a>
              </div>
              <div>© {new Date().getFullYear()} Felipe Lohr</div>
            </div>
          </div>
        </RevealBlock>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </Layout>
    </ThemeProvider>
  );
}
