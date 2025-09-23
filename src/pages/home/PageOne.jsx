import React from "react";
import NavigationBar from "../../components/NavigationBar";
import ButtonDefault from "../../components/ButtonDefault";

function PageOne() {
  return (
    <>
      <NavigationBar />
      <div
        className="
        bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(/Images/mainbg.jpg)] bg-cover bg-center 
        PageOne w-full h-screen px-40 relative"
      >
        <div className="hero-box w-3/4 h-2/3 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center">
          <h1 className="capitalize text-6xl font-Poppins font-semibold tracking-tight text-shadow-lg text-zinc-50">
            Make your stunning <br />
            new metaverse
          </h1>
          <p class="text-lg text-zinc-300 mt-4 max-w-xl">
            Explore immersive worlds, connect with friends, and create
            experiences like never before. Step into the future of the internet
            with your own metaverse.
          </p>
          <div className="hero-btns flex gap-4 mt-5">
            <ButtonDefault>Open App</ButtonDefault>
            <ButtonDefault>Buy MWP Token</ButtonDefault>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageOne;
