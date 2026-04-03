import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Sidebar() {
  const items = [
    { label: 'General', id: '#general' },
    { label: 'About Me', id: '#about' },
    { label: 'Projects', id: '#projects' },
    { label: 'Skills & Tools', id: '#skills' },
    { label: 'Contact', id: '#contact' }
  ];
  
  return (
    <aside className="p-8 h-screen flex flex-col justify-between sticky top-0">
      <div>
        <h1 onClick={() => document.getElementById('main-scroll')?.scrollTo({ top: 0, behavior: 'smooth' })} title="Scroll to top" className="font-display font-bold text-3xl tracking-tighter mb-12 cursor-pointer transition-colors hover:text-outline w-fit">PORTFOLIO.</h1>
        <nav className="flex flex-col gap-8">
          {items.map((item) => (
            <a key={item.label} href={item.id} className="font-label uppercase text-sm tracking-widest text-primary hover:text-outline hover:translate-x-1 duration-150 transition-transform">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-4 mb-8">
          <a href="https://www.linkedin.com/in/felipe-lohr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-label uppercase text-sm tracking-widest text-primary hover:text-outline hover:translate-x-1 transition-all w-fit duration-150">
            LINKEDIN <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="https://github.com/lohr-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-label uppercase text-sm tracking-widest text-primary hover:text-outline hover:translate-x-1 transition-all w-fit duration-150">
            GITHUB <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="font-label text-xs uppercase text-primary pt-4 border-t border-primary leading-relaxed">
          DEVELOPER<br/>
          INDEX // v.1.0.0
        </div>
      </div>
    </aside>
  );
}
