import { useState, useRef, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import VideoPromotion from "./components/VideoPromotion/VideoPromotion";
import Events from "./components/EventsPromotion/Events";
import Grids from "./components/Grids/Grids";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const timeline = useRef(gsap.timeline({ defaults: { ease: "power3.out" } }));

  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return (
    <main>
      <Header timeline={timeline} />
      <Main timeline={timeline} />
      <VideoPromotion timeline={timeline} />
      <Events />
      <Grids />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
