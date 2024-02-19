import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/About";
import CHICAGOIL from "./components/CHICAGOIL";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SmartObject from "./components/SmartObject";
import Sponsar from "./components/Sponsar";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [Loader, setLorder] = useState(false);
  useEffect(() => {
    setLorder(true);
    setTimeout(() => {
      setLorder(false);
    }, 3500);
  }, []);
  return (
    <>
      {" "}
      {Loader ? (
        <Preloader />
      ) : (
        <>
          <HeroSection />
          <CHICAGOIL />
          <SmartObject />
          <Sponsar />
          <About /> <Footer />
          <BackToTop />
        </>
      )}{" "}
    </>
  );
}

export default App;
