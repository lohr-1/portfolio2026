import React from 'react';

export default function RevealBlock({ children, delay = 0, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}
