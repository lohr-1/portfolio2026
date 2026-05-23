import React from 'react';

export default function Input({ label, type = 'text', placeholder }) {
  return (
    <div className="flex flex-col relative w-full">
      <label className="font-label uppercase text-xs mb-2 text-primary">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-divider py-2 font-body text-primary focus:outline-none focus:bg-surface-container-highest transition-none placeholder:text-outline"
      />
    </div>
  );
}
