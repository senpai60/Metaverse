import React from 'react';

function CardAbout({ icon, heading, para, link }) {
  return (
    <div className="w-64 h-60 rounded-b-lg bg-teal-950 p-6 flex flex-col gap-3">
      {/* Icon */}
      <div>{icon}</div>

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
