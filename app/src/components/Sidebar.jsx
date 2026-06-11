import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { ThemeButton } from './ThemeButton';

export default function Sidebar() {
  const { t } = useTranslation();
  const items = [
    { label: t('menu.general'), id: '#general' },
    { label: t('menu.about'), id: '#about' },
    { label: t('menu.projects'), id: '#projects' },
    { label: t('menu.skills'), id: '#skills' },
    { label: t('menu.contact'), id: '#contact' }
  ];
  
  return (
    <aside className="p-8 h-screen flex flex-col justify-between sticky top-0">
      <div>
        <div className="mb-12">
          <h1 onClick={() => document.getElementById('main-scroll')?.scrollTo({ top: 0, behavior: 'smooth' })} title="Scroll to top" className="font-display font-bold text-3xl tracking-tighter cursor-pointer transition-colors hover:text-outline w-fit">PORTFOLIO.</h1>
        </div>
        <nav className="flex flex-col gap-8">
          {items.map((item) => (
            <a key={item.label} href={item.id} className="font-label uppercase text-sm tracking-widest text-primary hover:text-outline hover:translate-x-1 duration-150 transition-transform">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <ThemeButton className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
        </div>
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
        <div className="font-label text-[10px] uppercase text-outline tracking-widest pt-4 border-t border-divider leading-relaxed flex flex-col gap-0.5">
          <span className="text-primary font-bold text-xs mb-1">DESIGN // INDEX</span>
          <span>SYS.STATE: OPTIMAL</span>
          <span>BUILD: 2026.05</span>
          <span>[v.1.0.0]</span>
        </div>
      </div>
    </aside>
  );
}
