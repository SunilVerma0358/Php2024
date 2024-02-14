import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/About";
import CHICAGOIL from "./components/CHICAGOIL";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SmartObject from "./components/SmartObject";
import Sponsar from "./components/Sponsar";

function App() {
  return (
    <>
      <HeroSection />
      <CHICAGOIL />
      <SmartObject />
      <Sponsar />
      <About /> <Footer />
    </>
  );
}

export default App;
