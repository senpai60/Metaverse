import React, { useState } from "react";
import PageHeadings from "../../components/PageHeadings";
import ButtonSelected from "../../components/ButtonSelected";
import CardDyanamic from "../../components/CardDyanamic";

const projects = {
  "Launched App": {
    heading: "Made A New App Where You Will Get Part Taste Of Metaverse World",
    para: "We created a cutting-edge mobile app that introduces users to a simplified version of the metaverse. It combines interactive spaces, social features, and immersive experiences in an easy-to-use design.",
    list: [
      "Immersive 3D spaces",
      "Social connectivity",
      "Beginner-friendly experience",
    ],
    image: "/Images/app-launch.jpg",
  },

  "Metaverse Marketplace": {
    heading: "Building a Next-Gen Metaverse Marketplace",
    para: "A digital marketplace designed to allow users to buy, sell, and trade virtual assets securely. It integrates blockchain technology and provides a seamless experience for creators and collectors alike.",
    list: [
      "Secure blockchain transactions",
      "Creator-focused tools",
      "Cross-platform support",
    ],
    image: "/Images/meta-verse.jpg",
  },

  "Innovative Approach": {
    heading: "An Innovative Approach Towards Digital Interaction",
    para: "Our strategy redefines how people connect in virtual spaces by blending AI-driven personalization with scalable environments. It focuses on accessibility and creativity for all kinds of users.",
    list: [
      "AI-driven personalization",
      "Scalable digital worlds",
      "Inclusive for all users",
    ],
    image: "/Images/innovative-approach.jpg",
  },
};

function PageThree() {
  const [selected, setSelected] = useState("Launched App");
  return (
    <div
      className="page-2 px-40 bg-zinc-950 
    "
    >
      {/* Headings */}
      <PageHeadings
        PageHeadings
        para="The Intersection Of Real And Metaverse"
        heading={"How it works"}
      />
      {/* Button Dyanamic */}
      <div className="three-btn-section mb-20 w-full min-h-20 gap-20 flex justify-center items-center">
        {Object.keys(projects).map((key) => (
          <ButtonSelected
            key={key}
            btnName={key}
            isActive={selected === key} // check active
            onClick={() => setSelected(key)}
          />
        ))}
      </div>

      <CardDyanamic project={projects[selected]} />
    </div>
  );
}

export default PageThree;
