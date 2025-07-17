import { useRef } from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import TextScroller from "./Components/TextScroller";
import RandomtextChar from "./Components/RandomtextChar";
import MovingElement from "./Components/MovingElement";
import SecoundAnimation from "./Components/SecoundAnimation";
import TopCompo from "./Components/TopCompo";
import BottomComp from "./Components/BottomComp";
import ThirdAnimation from "./Components/ThirdAnimation";
import FourthAnimations from "./Components/FourthAnimations";

function App() {
  const main = useRef(null);
  const scrollSection = useRef(null);
  const mainparent = useRef(null);

  return (
    <>
      <div>
        <div ref={main} className="bg-white relative z-50 w-screen h-[300vh] ">
          <NavBar />
          <HeroSection mainparentref={main} />

          <div ref={scrollSection} className="h-[60vh]  relative ">
            <TextScroller x={-600} y={0} scrollbleparent={scrollSection} />
            <TextScroller x={0} y={-600} scrollbleparent={scrollSection} />
          </div>
          <RandomtextChar />
        </div>

        <div ref={mainparent} className=" relative z-1">
          <TopCompo />
          <BottomComp scrollableParent={mainparent} />
        </div>
        <div>
          <SecoundAnimation />
        </div>
        
        <ThirdAnimation />
      </div>
    </>
  );
}

export default App;
