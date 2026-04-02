import React from 'react';

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
        <h1 className="font-display font-bold text-3xl tracking-tighter mb-12">PORTFOLIO.</h1>
        <nav className="flex flex-col gap-8">
          {items.map((item) => (
            <a key={item.label} href={item.id} className="font-label uppercase text-sm tracking-widest text-primary hover:text-outline hover:translate-x-1 duration-150 transition-transform">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="font-label text-xs uppercase text-primary pt-4 border-t border-primary leading-relaxed">
        DEVELOPER<br/>
        INDEX // v.1.0.0
      </div>
    </aside>
  );
}
