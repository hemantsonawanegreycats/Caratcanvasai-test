import img1 from "../assets/slide-image-1.jpg";
import img2 from "../assets/slide-image-2.jpg";
import img3 from "../assets/slide-image-3.jpg";
import img4 from "../assets/slide-image-4.jpg";
import img5 from "../assets/slide-image-5.jpg";

import { AiTwotonePlusCircle } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MovingElement() {
  const imagesdiv = [img1, img2, img3, img4, img5];
  gsap.registerPlugin(ScrollTrigger);

  const scrollerparentdiv = useRef(null);

  const movingelement = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      movingelement.current,
      {
        y: 0,
      },
      {
        y: 1600,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
          trigger: scrollerparentdiv.current,
          start: "top  top",
          end: "bottom top",
          scrub:true,
          pin: true,
        },
      }
    );
  }, [scrollerparentdiv]);
  return (
    <>
      <div className="w-screen h-[100vh] bg-amber-950 relative flex">
        <img
          className=" w-90 h-120 ml-6 rounded-3xl absolute left-[40rem] top-[-100rem] "
          ref={movingelement}
          src={imagesdiv[2]}
          alt=""
          srcset=""
        />{" "}
        <div className="flex">
          {imagesdiv.map((image, i) => {
            return (
              <div className=" w-90 h-120 ml-6 rounded-3xl  overflow-hidden">
                {" "}
                <img
                  key={i}
                  className={`w-full h-full object-cover `}
                  src={image}
                  alt=""
                  srcset=""
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MovingElement;
