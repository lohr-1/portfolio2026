import React, { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight, GitBranch } from 'lucide-react';
import MockDesignSimulator from './MockDesignSimulator';

export default function ProjectModal({ project, onClose }) {
  const [activeSection, setActiveSection] = useState('visao-geral');
  const [isClosing, setIsClosing] = useState(false);
  const scrollContainerRef = useRef(null);
  
  // Section refs for scroll spy and click-to-scroll
  const sections = [
    { id: 'visao-geral', label: 'visão geral' },
    { id: 'problema', label: 'problema' },
    { id: 'processo', label: 'processo' },
    { id: 'solucao', label: 'solução' },
    { id: 'resultado', label: 'Resultado' }
  ];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    const mainScroll = document.getElementById('main-scroll');
    if (mainScroll) {
      mainScroll.style.overflow = 'hidden';
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (mainScroll) {
        mainScroll.style.overflow = 'auto';
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Click to scroll to a specific section inside the container
  const handleScrollTo = (id) => {
    const element = document.getElementById(`modal-sec-${id}`);
    const container = scrollContainerRef.current;
    if (element && container) {
      const topPos = element.offsetTop - container.offsetTop;
      container.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Scrollspy logic
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    const scrollHeight = container.scrollHeight;
    
    // If we've scrolled to the absolute bottom, activate the last section
    if (Math.ceil(containerTop + containerHeight) >= scrollHeight - 10) {
      setActiveSection(sections[sections.length - 1].id);
      return;
    }

    let currentActive = 'visao-geral';

    for (const section of sections) {
      const element = document.getElementById(`modal-sec-${section.id}`);
      if (element) {
        const offsetTop = element.offsetTop - container.offsetTop;
        // Trigger active state when the section title hits the top 40% of the screen
        if (containerTop >= offsetTop - (containerHeight * 0.4)) {
          currentActive = section.id;
        }
      }
    }
    
    setActiveSection(currentActive);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
      <style>{`
        @keyframes offcanvasSlideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes offcanvasSlideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
        .animate-slide-in {
          animation: offcanvasSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-out {
          animation: offcanvasSlideOut 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      {/* Backdrop click listener */}
      <div className="absolute inset-0 cursor-default" onClick={handleClose}></div>

      {/* Offcanvas Box */}
      <div className={`relative w-full sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[1000px] bg-surface border-l border-divider flex flex-col z-10 overflow-hidden h-screen text-primary ${
        isClosing ? 'animate-slide-out' : 'animate-slide-in'
      }`}>
        
        {/* Top Header Row with System Info & Close Button */}
        <div className="flex justify-between items-center border-b border-divider px-6 py-4 bg-surface z-20">
          <div className="font-label text-[10px] text-outline uppercase tracking-widest select-none">
            [CASE_STUDY] // {project.title}
          </div>
          <button 
            onClick={handleClose}
            className="flex items-center gap-1.5 font-label text-xs uppercase tracking-widest text-primary hover:text-outline border border-divider hover:border-outline px-3 py-1.5 bg-background hover:bg-surface-container-highest transition-all duration-150 rounded-none cursor-pointer"
          >
            fechar <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Dynamic GIF/Video Simulation Header Banner */}
        <div className="w-full h-48 sm:h-64 border-b border-divider bg-surface-container-highest flex-shrink-0 relative overflow-hidden">
          <MockDesignSimulator projectId={project.id} />
          
          {/* Simulation status tags overlaid on corner */}
          <div className="absolute bottom-2 right-2 pointer-events-none select-none font-label text-[8px] text-outline bg-background/80 border border-divider/60 px-1.5 py-0.5 uppercase tracking-wider">
            [MONITOR ACTIVE // 60 FPS]
          </div>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 flex-1 overflow-hidden min-h-0 bg-background">
          
          {/* Left Navigation Sidebar */}
          <aside className="col-span-1 border-b md:border-b-0 md:border-r border-divider p-6 bg-surface flex flex-row md:flex-col md:gap-4 overflow-x-auto md:overflow-x-visible justify-between md:justify-start gap-6 select-none flex-shrink-0 whitespace-nowrap scrollbar-none">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleScrollTo(sec.id)}
                  className={`font-label uppercase text-[11px] md:text-xs tracking-widest text-left duration-150 transition-all cursor-pointer block border-b-2 md:border-b-0 md:border-l-2 py-1 px-2 md:py-0.5 md:pl-3 w-full ${
                    isActive 
                      ? 'text-primary border-primary font-bold' 
                      : 'text-outline border-transparent hover:text-primary hover:border-divider'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}

            {/* Links at the bottom of the sidebar */}
            {project.link && (
              <div className="hidden md:flex flex-col gap-2 mt-auto pt-6 border-t border-divider w-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-label uppercase text-[10px] tracking-wider text-primary hover:text-outline transition-colors"
                >
                  repositório <GitBranch className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </aside>

          {/* Right Scrollable Content Pane */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="col-span-3 p-6 md:p-10 overflow-y-auto h-full scroll-smooth bg-background flex flex-col gap-12"
          >
            {/* 1. Visão Geral */}
            <section id="modal-sec-visao-geral" className="scroll-mt-6 border-b border-divider pb-8">
              <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-3">// 01. VISÃO GERAL</span>
              <h4 className="font-display text-2xl font-bold tracking-tight mb-4 uppercase text-primary">Sobre o Projeto</h4>
              <p className="font-body text-primary text-sm leading-relaxed whitespace-pre-line">
                {project.visaoGeral}
              </p>
            </section>

            {/* 2. Problema */}
            <section id="modal-sec-problema" className="scroll-mt-6 border-b border-divider pb-8">
              <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-3">// 02. PROBLEMA</span>
              <h4 className="font-display text-2xl font-bold tracking-tight mb-4 uppercase text-primary">O Desafio Operacional</h4>
              <p className="font-body text-primary text-sm leading-relaxed">
                {project.problema}
              </p>
            </section>

            {/* 3. Processo */}
            <section id="modal-sec-processo" className="scroll-mt-6 border-b border-divider pb-8">
              <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-3">// 03. PROCESSO</span>
              <h4 className="font-display text-2xl font-bold tracking-tight mb-4 uppercase text-primary">Desenvolvimento & Metodologia</h4>
              <p className="font-body text-primary text-sm leading-relaxed mb-6">
                {project.processo.intro}
              </p>

              {/* Three Column Grid of Skeletons (Mockup pattern) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {project.processo.steps.map((step, idx) => (
                  <div key={idx} className="border border-divider bg-surface p-4 flex flex-col justify-between h-48">
                    {/* Wireframe Placeholder Visual */}
                    <div className="border border-dashed border-divider bg-background h-24 flex flex-col items-center justify-center p-2 relative select-none">
                      {/* Technical Blueprint lines */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                      
                      {idx === 0 && (
                        <div className="w-full flex flex-col gap-1.5 z-10 opacity-70">
                          <div className="h-2 w-12 bg-outline"></div>
                          <div className="h-5 border border-divider flex items-center justify-around">
                            <div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
                          </div>
                        </div>
                      )}
                      
                      {idx === 1 && (
                        <div className="w-full flex items-center justify-center gap-2 z-10 opacity-70">
                          <div className="w-6 h-6 border border-divider flex items-center justify-center text-[8px]">A</div>
                          <div className="w-4 h-[1px] bg-divider border-t border-dashed border-divider"></div>
                          <div className="w-6 h-6 border border-divider flex items-center justify-center text-[8px] bg-primary text-on-primary">B</div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div className="w-full flex flex-col gap-1 z-10 opacity-70">
                          <div className="h-2 w-3/4 bg-outline"></div>
                          <div className="h-1 w-1/2 bg-divider"></div>
                          <div className="h-1.5 w-full bg-divider"></div>
                        </div>
                      )}

                      <span className="font-label text-[8px] text-outline mt-auto z-10 uppercase tracking-widest">
                        [fig_wireframe_{idx + 1}.dwg]
                      </span>
                    </div>

                    <div className="mt-3">
                      <div className="font-label text-[10px] font-bold uppercase tracking-wider mb-1 text-primary">{step.label}</div>
                      <p className="font-body text-[10.5px] text-outline leading-normal">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Solução */}
            <section id="modal-sec-solucao" className="scroll-mt-6 border-b border-divider pb-8">
              <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-3">// 04. SOLUÇÃO</span>
              <h4 className="font-display text-2xl font-bold tracking-tight mb-4 uppercase text-primary">Solução Proposta</h4>
              <p className="font-body text-primary text-sm leading-relaxed">
                {project.solucao}
              </p>
            </section>

            {/* 5. Resultado */}
            <section id="modal-sec-resultado" className="scroll-mt-6 pb-4">
              <span className="font-label text-[10px] text-outline uppercase tracking-widest block mb-3">// 05. RESULTADO</span>
              <h4 className="font-display text-2xl font-bold tracking-tight mb-4 uppercase text-primary">Resultados Alcançados</h4>
              <p className="font-body text-primary text-sm leading-relaxed">
                {project.resultado}
              </p>
              
              {/* Internal repo links on small screens */}
              {project.link && (
                <div className="flex md:hidden mt-8 pt-6 border-t border-divider justify-start">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-label uppercase text-[10px] tracking-wider text-primary border border-divider hover:border-outline px-4 py-2 bg-surface hover:bg-surface-container-highest transition-all duration-150"
                  >
                    visualizar repositório <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </section>
          </div>

        </div>

      </div>
    </div>
  );
}
