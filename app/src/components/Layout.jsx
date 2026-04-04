import React from 'react';
import Sidebar from './Sidebar';
import ClickSpark from './ClickSpark';
import StaggeredMenu from './StaggeredMenu';

export default function Layout({ children }) {
  const menuItems = [
    { label: 'General', link: '#general' },
    { label: 'About Me', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills & Tools', link: '#skills' },
    { label: 'Contact', link: '#contact' }
  ];
  
  const socialItems = [
    { label: 'LINKEDIN ↗', link: 'https://www.linkedin.com/in/felipe-lohr/' },
    { label: 'GITHUB ↗', link: 'https://github.com/lohr-1' }
  ];

  return (
    <ClickSpark sparkColor="#000" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="flex h-screen w-full bg-background overflow-hidden font-body text-primary">
        <div className="w-64 border-r border-primary flex flex-col bg-surface shrink-0 hidden md:flex">
          <Sidebar />
        </div>
        <div className="md:hidden">
          <StaggeredMenu 
            items={menuItems}
            socialItems={socialItems}
            menuButtonColor="#000"
            openMenuButtonColor="#000"
            colors={['#e6e6e6', '#d9d9d9', '#cccccc']}
          />
        </div>
        <main id="main-scroll" className="flex-1 overflow-y-auto w-full relative scroll-smooth pt-20 md:pt-0">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary"></div>
          {children}
        </main>
      </div>
    </ClickSpark>
  );
}
