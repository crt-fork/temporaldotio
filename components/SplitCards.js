import React from 'react';
import SplitCard from '@/components/base/SplitCard';
import { caretColor } from 'tailwindcss/defaultTheme';
export default function SplitCards({ cards = [], className}) {
  return (
    <div className={`md:flex ${className}`}>

      {cards.map((card, i) => (
        <div
          key={`splitCards-split-${i}`}
          className="py-20 lg:py-64 xl:py-96 px-10 md:w-6/12 bg-cover" style={{backgroundImage: "url(" + card.background + ")"}}>
          <SplitCard
            icon={card.icon}
            color={(i % 2) ? 'dark' : 'light'}
            headline={card.headline}
            copy={card.subhead}/>
        </div>
      ))}
    </div>
  );
}

