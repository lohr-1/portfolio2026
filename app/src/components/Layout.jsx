import React from 'react';
import Sidebar from './Sidebar';
import ClickSpark from './ClickSpark';
import StaggeredMenu from './StaggeredMenu';
import { useTheme } from 'next-themes';
import StairPreloader from './StairPreloader';
import { useTranslation } from 'react-i18next';

export default function Layout({ children }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  const menuBtnColor = isDark ? '#ECEBE7' : '#000000';
  const menuColors = isDark 
    ? ['#252523', '#1e1e1c', '#161615'] 
    : ['#e6e6e6', '#d9d9d9', '#cccccc'];

  const { t } = useTranslation();

  const menuItems = [
    { label: t('menu.general'), link: '#general' },
    { label: t('menu.about'), link: '#about' },
    { label: t('menu.projects'), link: '#projects' },
    { label: t('menu.skills'), link: '#skills' },
    { label: t('menu.contact'), link: '#contact' }
  ];
  
  const socialItems = [
    { label: 'LINKEDIN ↗\uFE0E', link: 'https://www.linkedin.com/in/felipe-lohr/' },
    { label: 'GITHUB ↗\uFE0E', link: 'https://github.com/lohr-1' }
  ];

  return (
    <ClickSpark sparkColor="#000" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="flex h-screen w-full bg-background overflow-hidden font-body text-primary">
        <StairPreloader
          delay={0}
          direction="ltr"
          className="w-64 border-r border-divider flex-col bg-surface shrink-0 hidden md:flex"
        >
          <Sidebar />
        </StairPreloader>
        <div className="md:hidden">
          <StaggeredMenu 
            items={menuItems}
            socialItems={socialItems}
            menuButtonColor={menuBtnColor}
            openMenuButtonColor={menuBtnColor}
            colors={menuColors}
          />
        </div>
        <main id="main-scroll" className="flex-1 overflow-y-auto overflow-x-hidden w-full relative scroll-smooth pt-20 md:pt-0">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary"></div>
          {children}
        </main>
      </div>
    </ClickSpark>
  );
}
