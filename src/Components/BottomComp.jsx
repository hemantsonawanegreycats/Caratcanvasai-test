import { useRef } from "react";
import imgone from "../assets/slide-image-1.jpg";
import imgtwo from "../assets/slide-image-2.jpg";
import imgthree from "../assets/slide-image-3.jpg";
import imgfour from "../assets/slide-image-4.jpg";
import imgfive from "../assets/slide-image-5.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function BottomComp({ scrollableParent }) {
  gsap.registerPlugin(useGSAP);

  const scrollerparendiv = useRef(null);
  const singleimage = useRef(null);
  const containerRef = useRef(null);

  const imagesarray = [
    imgone,
    imgtwo,
    imgthree,
    imgfour,
    imgfive,
    imgone,
    imgtwo,
    imgthree,
    imgfour,
    imgfive,
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const images = gsap.utils.toArray(".images");
    const q = gsap.utils.selector(containerRef);
    gsap.fromTo(
      images,
      { x: 0 },
      {
        x: -1000,
        ease: "power2.inOut",
        delay: 1.4,
        duration: 0.9,
        scrollTrigger: {
          trigger: scrollerparendiv.current,
          start: "center 55%",
          end: "bottom bottom",
          pin: true,
          markers: true,
        },
      }
    );
    gsap.fromTo(
      q(".hiddenimage"),
      { autoAlpha: 0 }, // means opacity: 0, visibility: hidden
      {
        autoAlpha: 1,
        delay: 1.5,
        duration: 1,
        scrollTrigger: {
          trigger: scrollableParent.current,
          start: "center center",
          end: "bottom bottom",
          pin: true,
        },
      } // opacity: 1, visibility: visible
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollableParent.current,
        start: "center center",
        end: "bottom bottom",
        pin: true,
        scrub: false, // 🔥 MUST be false to allow timed animation
        markers: true,
      },
    });

    tl.fromTo(
      singleimage.current,
      { y: 0, rotate: 18 },
      { y: 910, rotate: 0, ease: "power2.inOut", delay: 0.6, duration: 0.7 }
    ).to(singleimage.current, {
      y: 910,
      autoAlpha: 0,
      delay: 0.2,
      duration: 0.2, // optional: how quickly it fades out
    });
  }, [scrollableParent]);

  return (
    <>
      <div
        ref={scrollerparendiv}
        className="bg-white w-screen h-screen  flex items-center "
      >
        <img
          ref={singleimage}
          className="w-[20rem] m-3 absolute rotate-12 top-[-73vh] left-[36.4vw]  rounded-3xl"
          src={imgthree}
          alt="image"
          srcset=""
        />

        <div ref={containerRef} className="w-full  flex pl-2 overflow-x-hidden">
          {imagesarray.map((imagelink, i) => {
            return (
              <img
                key={i}
                className={`images w-[20rem]  m-3 rounded-3xl  ${
                  i == 2 ? "hiddenimage" : ""
                }`}
                src={imagelink}
                alt="image"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BottomComp;
