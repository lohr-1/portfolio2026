import React from 'react';

export default function Card({ title, stat, description, image, align = 'left' }) {
  return (
    <div className="border border-primary bg-surface flex flex-col sm:flex-row items-stretch -mt-[1px] relative z-10 hover:z-20 transition-none">
      {image && (
        <div className="w-full sm:w-1/3 border-b sm:border-r border-primary filter grayscale overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover aspect-square sm:aspect-auto" />
        </div>
      )}
      <div className={`p-8 flex flex-col justify-center flex-1 ${align === 'right' ? 'text-right' : 'text-left'}`}>
        <h3 className="font-display text-4xl tracking-tighter font-bold mb-4">{title}</h3>
        {stat && <p className="font-display text-xl text-secondary mb-4">{stat}</p>}
        <p className="font-body text-primary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
