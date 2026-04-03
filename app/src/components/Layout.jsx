import React from 'react';
import Sidebar from './Sidebar';
import ClickSpark from './ClickSpark';

export default function Layout({ children }) {
  return (
    <ClickSpark sparkColor="#000" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="flex h-screen w-full bg-background overflow-hidden font-body text-primary">
        <div className="w-64 border-r border-primary flex flex-col bg-surface shrink-0 hidden md:flex">
          <Sidebar />
        </div>
        <main id="main-scroll" className="flex-1 overflow-y-auto w-full relative scroll-smooth">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary"></div>
          {children}
        </main>
      </div>
    </ClickSpark>
  );
}
