import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FaReact } from "react-icons/fa";

function FourthAnimations() {
  // const texticon1 = useRef(null);
  // const texticon2 = useRef(null);
  // const texticon3 = useRef(null);
  const mainscrolldiv = useRef(null);
  const boxparent = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

 useGSAP(() => {
  const boxs = gsap.utils.toArray(".box");

  const boxtl = gsap.timeline({
    scrollTrigger: {
      trigger: boxparent.current,
      start: "top top",
      end: "+=4000", // more scroll distance = animation stays longer
      pin: true,
      markers: true,
      scrub: true,
    },
  });

  boxs.forEach((bx, i) => {
    boxtl.fromTo(
      bx,
      {
        y: 0,
        scale: 1,
      },
      {
        y: -500,
        scale: 0,
        ease: "power3.inOut",
        duration: 1,
      },
      0 // all start together (or use `i * 0.1` for slight offset)
    );
  });
});
  return (
    <>
      <div
        ref={mainscrolldiv}
        className="w-screen h-[300vh] relative bg-green-50 flex flex-col justify-center"
      >
        <div
          ref={boxparent}
          className=" relative w-screen bg-white h-screen"
        >
          <div className="box absolute z-10 w-[30vh] left-100 bottom-0 bg-amber-800 h-[30vh]"></div>
          <div className="box absolute z-10 w-[30vh] left-200 bottom-0 bg-amber-800 h-[30vh]"></div>
          <div className="box absolute z-10 w-[30vh] left-300 bottom-0 bg-amber-800 h-[30vh]"></div>
        </div>

        {/* <div className="relative  w-screen h-screen flex justify-center bg-white items-center">
          <div className="w-[50vw]  flex flex-col text-center ">
            <div>
              <span className="capitalize text-7xl leading-28">
                Jewels Don’t
              </span>
              <span className="capitalize text-7xl leading-28 ml-24">Just</span>
            </div>
            <div>
              <span className="capitalize text-7xl leading-28">Happen</span>
              <span className="capitalize text-7xl leading-28 ml-24">
                They’re Dreamed,
              </span>
            </div>
            <div>
              <span className="capitalize text-7xl leading-28">
                {" "}
                Then Designed{" "}
              </span>
              <span className="capitalize text-7xl leading-28 ml-24">
                by AI
              </span>
            </div>
          </div>
        </div> */}

        
      </div>
    </>
  );
}

export default FourthAnimations;
