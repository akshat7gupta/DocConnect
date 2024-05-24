import React from "react";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
       <Profile imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;