import { AiTwotonePlusCircle } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TextScroller({ scrollbleparent, x, y }) {
  gsap.registerPlugin(ScrollTrigger);
  const scrollchild = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      scrollchild.current,
      {
        x: x,
      },
      {
        x: y,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
          trigger: scrollbleparent.current,
          start: "top  top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      }
    );
  }, [scrollbleparent]);

  return (
    <div className="w-screen mt-2 p-6 uppercase font-semibold items-center overflow-hidden  text-[#A16247] flex">
      <div className="flex" ref={scrollchild}>
        <div className="text-4xl text-nowrap">
          Your Design. Your Story. Our AI brilliance
        </div>
        <AiTwotonePlusCircle className="text-4xl ml-4 mr-4" />
        <div className="text-4xl text-nowrap">Caratcanvas</div>
        <AiTwotonePlusCircle className="text-4xl ml-4 mr-4" />
        <div className="text-4xl text-nowrap">
          Your Design. Your Story. Our AI brilliance
        </div>
        <AiTwotonePlusCircle className="text-4xl ml-4 mr-4" />
         <div className="text-4xl text-nowrap">
          Your Design. Your Story. Our AI brilliance
        </div>
        <AiTwotonePlusCircle className="text-4xl ml-4 mr-4" />
      </div>
    </div>
  );
}

export default TextScroller;
