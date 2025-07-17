import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SecoundAnimation() {
  const firstbox = useRef(null);
  const blurbg = useRef(null);
  const scalablebox = useRef(null);
  const secoundBox = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      blurbg.current,
      {
        y: 800,
        duration: 1,
        borderTopLeftRadius: "65rem",
        borderTopRightRadius: "65rem",
        borderBottomRightRadius: "0rem",
        borderBottomLeftRadius: "0rem",
      },
      {
        y: 0,
        duration: 1,
        borderTopLeftRadius: "0rem",
        borderTopRightRadius: "0rem",
        borderBottomRightRadius: "0rem",
        borderBottomLeftRadius: "0rem",
        scrollTrigger: {
          trigger: firstbox.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
        },
      }
    );

    gsap.fromTo(
      scalablebox.current,
      {
        scale: 1,
        transformOrigin: "center center", // 🔧 ensures scale grows from center
      },
      {
        duration: 1,
        scale: 8, // or 4 depending on how large you want
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: firstbox.current,
          start: "center center", // ✅ starts after half scroll
          end: "bottom center",
          scrub: true,
          pin: true, // or true if you want to hold section
          markers: true,
        },
      }
    );
  }, [firstbox, secoundBox]);

  return (
    <>
      <div
        ref={secoundBox}
        className="w-screen overflow-hidden h-[150vh] bg-orange-100"
      >
        <div
          ref={firstbox}
          className="w-screen h-[100vh]  relative bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] text-white rounded-3xl overflow-hidden"
        >
          {/* Blurred Background Layer */}
          <div
            ref={blurbg}
            className="w-[100%] h-[100%]  absolute inset-0 bg-cover bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] text-white rounded-3xl blur-2xl z-0"
          ></div>

          {/* Foreground Content */}
          <div className="relative z-10 text-9xl text-white flex justify-center items-center h-screen">
            <div className="mr-40">WE</div>
            <div
              ref={scalablebox}
              className="absolute w-[16rem] rounded-3xl left-[42.5vw] h-xl text-white bg-white"
            >
              a
            </div>
            <div className="ml-40">ARE</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecoundAnimation;
