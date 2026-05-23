import React from 'react';

export default function Button({ children, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`px-8 py-4 bg-primary text-on-primary font-label uppercase text-sm tracking-widest rounded-none hover:bg-surface hover:text-primary border border-divider transition-none ${className}`}
    >
      {children}
    </button>
  );
}
