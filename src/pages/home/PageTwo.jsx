import React from 'react';
import CardAbout from '../../components/CardAbout';
import { cardsData } from '../../../data/cardsData.js';
import PageHeadings from '../../components/PageHeadings.jsx';

function PageTwo() {
  return (
    <div className="page-2 px-40 bg-gradient-to-b from-black via-[#140b27] to-[bg-gradient-to-b from-black via-[#05141D] to-black] 
    ">
      {/* Headings */}
      <PageHeadings para="Utilize The Functionality" heading={'Main Feature'} />

      {/* Cards Section */}
      <div className="about-card-section w-full min-h-[150px] py-10 grid grid-cols-3 gap-6 justify-center">
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
