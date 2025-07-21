import { useRef } from "react";
import TopCompo from "./Components/TopCompo";
import BottomComp from "./Components/BottomComp";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import TextScroller from "./Components/TextScroller";
import RandomtextChar from "./Components/RandomtextChar";
import SecoundAnimation from "./Components/SecoundAnimation";
import TextIconAnimation from "./Components/TextIconAnimation";
import ThirdAnimation from "./Components/ThirdAnimation";
import FourthAnimations from "./Components/FourthAnimations";
// ...other imports as needed

function App() {
  const mainparent = useRef(null);

  return (
    <div className="w-screen overflow-hidden">
      {/* Other sections/components */}
      <div className="bg-white relative z-50 w-screen h-[300vh]">
        <NavBar />
        <HeroSection mainparentref={mainparent} />
        <div className="h-[60vh] relative">
          <TextScroller x={-600} y={0} scrollbleparent={mainparent} />
          <TextScroller x={0} y={-600} scrollbleparent={mainparent} />
        </div>
        <RandomtextChar />
      </div>

      {/* MAIN SECTION REF PASSED */}
      <div
        ref={mainparent}
        className="parentmainid  h-[200vh] overflow-hidden relative z-1"
      >
        <TopCompo />
        <BottomComp scrollableParent={mainparent} />
      </div>

      <div>
        <SecoundAnimation />
      </div>

      <div>
        <TextIconAnimation />
          <ThirdAnimation />
      </div>
{/* 
      <div>
        <ThirdAnimation />
      </div> */}
    </div>
  );
}

export default App;
