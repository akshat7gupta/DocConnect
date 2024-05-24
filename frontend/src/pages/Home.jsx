import React, { useContext } from "react";
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import Messageform from "../components/Messageform";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"} imageUrl={"/hero.png"} />
        <Profile />
      <Departments />
      <Messageform />
    </>
  );
};
export default Home