import React from 'react';
import CardAbout from '../../components/CardAbout';
import { cardsData } from '../../data/cardsData';

function PageTwo() {
  return (
    <div className="page-2 px-40">
      {/* Headings */}
      <div className="about-head text-center py-20">
        <h5 className="text-2xl font-light mb-2">Main Feature</h5>
        <h3 className="text-5xl font-medium mb-2">Utilize The Functionality</h3>
      </div>

      {/* Cards Section */}
      <div className="about-card-section w-full min-h-[150px] bg-blue-950 py-10 flex flex-wrap gap-6 justify-center">
        {cardsData.map((card, index) => (
          <CardAbout
            key={index}
            icon={card.icon}
            heading={card.heading}
            para={card.para}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}

export default PageTwo;
