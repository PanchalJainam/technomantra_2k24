import React from "react";
// import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";
import About from "../About/About";
// import Footer from "../../Footer/Footer";
import Event from "../EventDetail/Event";
import Gallary from "../Gallary/Gallary";
import Sponser from "../Sponser/Sponser";
import FooterNew from "../../Footer/FooterNew";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <About />
      <Event />
      <br />
      <br />
      <Sponser />
      <Gallary />
      {/* <Footer /> */}
      <FooterNew />
    </div>
  );
};

export default Home;
