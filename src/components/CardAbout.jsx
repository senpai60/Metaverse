// src/components/CardAbout.jsx
import React from 'react';

function CardAbout({ icon, heading, para, link }) {
  return (
    <div className=" h-60 rounded-b-lg bg-[#090511] p-6 flex flex-col gap-3
    hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 
            transition-all duration-500">
      {/* Icon - THIS IS THE CORRECTED LINE */}
      <div>
        <img src={icon} alt={`${heading} icon`} className="w-12 h-12" />
      </div>

      {/* Heading */}
      <h3 className="font-medium text-lg text-white">{heading}</h3>

      {/* Paragraph */}
      <p className="text-xs text-zinc-200">{para}</p>

      {/* Link */}
      <a
        href={link}
        className="text-xs text-indigo-400 hover:text-indigo-200 transition-colors mt-auto"
      >
        Read More
      </a>
    </div>
  );
}

export default CardAbout;