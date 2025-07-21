import { useEffect, useRef } from "react";
import imgone from "../assets/slide-image-1.jpg";
import imgtwo from "../assets/slide-image-2.jpg";
import imgthree from "../assets/slide-image-3.jpg";
import imgfour from "../assets/slide-image-4.jpg";
import imgfive from "../assets/slide-image-5.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function BottomComp({ scrollableParent }) {
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

  useEffect(() => {
    // Exit if parent DOM node isn't ready
    if (!scrollableParent.current) return;

    // Get image nodes within the container, scoped selection!
    const images = gsap.utils.toArray(".images", containerRef.current);

    // Setup GSAP matchMedia for breakpoints
    const mm = gsap.matchMedia();

    mm.add(
      {
        twoXL: "(min-width: 1440px)",
        lg: "(min-width: 1024px)",
      },
      (context) => {
        const { twoXL, lg } = context.conditions;

        let tl;

        if (twoXL && scrollableParent.current) {
          gsap.fromTo(
            images,
            { x: 0 },
            {
              x: -1000,
              ease: "power2.inOut",
              delay: 1,
              duration: 0.9,
              scrollTrigger: {
                trigger: scrollerparendiv.current,
                start: "top top",
                end: "bottom bottom",
                markers: true,
              },
            }
          );
          gsap.fromTo(
            containerRef.current.querySelectorAll(".hiddenimage"),
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              delay: 0.6,
              scrollTrigger: {
                trigger: scrollerparendiv.current,
                start: "center 70%",
                end: "bottom bottom",
              },
            }
          );

          tl = gsap.timeline({
            scrollTrigger: {
              trigger: scrollableParent.current,
              start: "top top",
              end: "bottom bottom",
              pin: false,
              scrub: false,
              markers: true,
            },
          });
          tl.fromTo(
            singleimage.current,
            { y: 700, rotate: 12 },
            { y: 1850, rotate: 0, ease: "power2.inOut", duration: 1 }
          ).to(singleimage.current, {
            y: 1850,
            autoAlpha: 0,
            duration: 0.2,
          });
        } else if (lg && scrollableParent.current) {
          gsap.fromTo(
            images,
            { x: 0 },
            {
              x: -1000,
              ease: "power2.inOut",
              delay: 1,
              duration: 0.9,
              scrollTrigger: {
                trigger: scrollerparendiv.current,
                start: "top top",
                end: "bottom bottom",
                markers: true,
              },
            }
          );
          gsap.fromTo(
            containerRef.current.querySelectorAll(".hiddenimage"),
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              delay: 0.,
              scrollTrigger: {
                trigger: scrollerparendiv.current,
                start: "top top",
                end: "bottom bottom",
              },
            }
          );

          tl = gsap.timeline({
            scrollTrigger: {
              trigger: scrollableParent.current,
              start: "top top", // GSAP offset syntax
              end: "bottom bottom",

              scrub: false,
              markers: true,
            },
          });
          tl.fromTo(
            singleimage.current,
            { y: 650, rotate: 12 },
            { y: 1469, rotate: 0, ease: "power2.inOut", duration: 1 }
          ).to(singleimage.current, {
            y: 1469,
            autoAlpha: 0,
            duration: 0.6,
          });
        }

        // Clean up!
        return () => {
          if (tl) tl.kill();
        };
      }
    );

    // Clean up matchMedia listeners, etc
    return () => mm.kill();
  }, [scrollableParent]);

  return (
    <div
      ref={scrollerparendiv}
      className="w-screen h-screen flex items-center  text-white "
    >
      <img
        ref={singleimage}
        className="2xl:w-[20rem] lg:w-[12rem] m-3 absolute rotate-12 top-[-73vh] lg:top-[-72vh] lg:left-[43vw] 2xl:left-[36.4vw] rounded-3xl"
        src={imgthree}
        alt="image"
      />

      <div ref={containerRef} className="w-full  flex pl-2 overflow-x-hidden">
        {imagesarray.map((imagelink, i) => (
          <img
            key={i}
            className={`images 2xl:w-[20rem] lg:w-[12rem] m-3 rounded-3xl ${
              i === 2 ? "hiddenimage" : ""
            }`}
            src={imagelink}
            alt="image"
          />
        ))}
      </div>
    </div>
  );
}

export default BottomComp;
