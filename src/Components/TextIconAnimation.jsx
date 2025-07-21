import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

function TextIconAnimation({Compo}) {
  const mainscrollerdiv = useRef(null);
  const animationparentdiv = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // const animationparentdiv = gsap.utils.toArray(".animationparentdiv");
    const boxDiv = gsap.utils.toArray(".box");

    const mm = gsap.matchMedia();

    mm.add(
      {
        twoXL: "(min-width: 1440px)",
        lg: "(min-width: 1024px)",
      },
      (context) => {
        const { twoXL, lg } = context.conditions;

        if (twoXL) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: mainscrollerdiv.current,
              start: "top top",
              end: `bottom bottom`,
              scrub: 1,
              anticipatePin: 1,
              pin: true,
              markers: true,
            },
          });

          boxDiv.forEach((box, i) => {
            tl.fromTo(box, { y: 0 }, { y: -400, ease: "power3.Out" });
          });

          tl.to(boxDiv, {
            scale: 0.5,
            ease: "power2.out",
          });

          tl.to(
            [
              box1.current,
              box2.current,
              box3.current,
              box4.current,
              box5.current,
            ],
            {
              x: (i) => {
                if (i === 0) {
                  return 300;
                } else if (i === 1) {
                  return 150;
                } else if (i === 3) {
                  return -150;
                } else if (i === 4) {
                  return -300;
                }
              },
              ease: "power2.out",
            }
          );

          const lineone = gsap.utils.toArray(".lineone");
          const linetwo = document.querySelector(".linetwo");
          const linethree = gsap.utils.toArray(".linethree");
          const linefour = gsap.utils.toArray(".linefour");

          // linefour

          tl.to(box1.current, { y: -550, ease: "power2.out" })
            .to(box1.current, {
              x: 840,
              ease: "power2.out",
            })
            .to(lineone, {
              opacity: 1,
              duration: 1,
              stagger: 1,
            });

          tl.to(box2.current, { x: -290, y: -420, ease: "power2.out" });
          tl.to(box3.current, { y: -290, x: -250, ease: "power2.out" });

          [box4.current, box5.current].forEach((b, i) => {
            if (i === 0) tl.to(b, { y: -160, x: -60, ease: "power2.out" });
            if (i === 1) tl.to(b, { y: -160, x: -510, ease: "power2.out" });
          });

          tl.to(linetwo, { opacity: 1, duration: 2, stagger: 1 });

          tl.to(linethree, { opacity: 1, duration: 2, stagger: 1 }, "+=0.5").to(
            linefour,
            {
              opacity: 1,
              duration: 2,
              stagger: 1,
            },
            "+=0.5"
          );
        } else if (lg) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: mainscrollerdiv.current,
              start: "top top",
              end: `bottom bottom`,
              scrub: 1,
              anticipatePin: 1,
              pin: true,
              markers: true,
            },
          });

          boxDiv.forEach((box, i) => {
            tl.fromTo(box, { y: 0 }, { y: -300, ease: "power3.Out" });
          });

          tl.to(boxDiv, {
            scale: 0.6,
            ease: "power2.out",
          });

          tl.to(
            [
              box1.current,
              box2.current,
              box3.current,
              box4.current,
              box5.current,
            ],
            {
              x: (i) => {
                if (i === 0) {
                  return 130;
                } else if (i === 1) {
                  return 70;
                } else if (i === 3) {
                  return -70;
                } else if (i === 4) {
                  return -130;
                }
              },
              ease: "power2.out",
            }
          );

          const lineone = gsap.utils.toArray(".lineone");
          const linetwo = document.querySelector(".linetwo");
          const linethree = gsap.utils.toArray(".linethree");
          const linefour = gsap.utils.toArray(".linefour");

          // linefour

          tl.to(box1.current, { y: -470, ease: "power2.out" })
            .to(box1.current, {
              x: 470,
              ease: "power2.out",
            })
            .to(lineone, {
              opacity: 1,
              duration: 1,
              stagger: 1,
            });

          tl.to(box2.current, { x: -150, y: -380, ease: "power2.out" });
          tl.to(box3.current, { y: -290, x: -150, ease: "power2.out" });

          [box4.current, box5.current].forEach((b, i) => {
            if (i === 0) tl.to(b, { y: -190, x: -38, ease: "power2.out" });
            if (i === 1) tl.to(b, { y: -190, x: -310, ease: "power2.out" });
          });

          tl.to(linetwo, { opacity: 1, duration: 2, stagger: 1 });

          tl.to(linethree, { opacity: 1, duration: 2, stagger: 1 }, "+=0.5").to(
            linefour,
            {
              opacity: 1,
              duration: 2,
              stagger: 1,
            },
            "+=0.5"
          );
        }
      }
    );
  });

  return (
    <>
      <div ref={mainscrollerdiv} className="w-screen h-[300vh] bg-white">
        <div className="w-screen h-screen ">
          <div
            ref={animationparentdiv}
            className="animationparentdiv flex items-end relative h-full ml-auto mr-auto bg-white justify-center  gap-2"
          >
            <div
              ref={box1}
              className="box  rounded-4xl 2xl:w-[15vw] lg:w-[16vw] 2xl:h-[25vh] lg:h-[20vh] bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] "
            ></div>
            <div
              ref={box2}
              className=" box  rounded-4xl 2xl:w-[15vw] lg:w-[16vw] 2xl:h-[25vh] lg:h-[20vh] bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] "
            ></div>
            <div
              ref={box3}
              className=" box  rounded-4xl 2xl:w-[15vw] lg:w-[16vw] 2xl:h-[25vh] lg:h-[20vh] bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] "
            ></div>
            <div
              ref={box4}
              className=" box  rounded-4xl 2xl:w-[15vw] lg:w-[16vw] 2xl:h-[25vh] lg:h-[20vh] bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] "
            ></div>
            <div
              ref={box5}
              className=" box  rounded-4xl 2xl:w-[15vw] lg:w-[16vw] 2xl:h-[25vh] lg:h-[20vh] bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] "
            ></div>

            <div className=" absolute font-semibold capitalize 2xl:gap-44 lg:gap-30 2xl:text-7xl lg:text-4xl 2xl:top-[25vh] lg:top-[22vh] flex bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] text-transparent bg-clip-text">
              <span className="lineone opacity-0">
                {" "}
                Jewels don’t just happen
              </span>
              <span className="lineone opacity-0">overnight.</span>
            </div>

            <div className="absolute mt-7 font-semibold capitalize 2xl:gap-44 lg:gap-30 2xl:text-7xl lg:text-4xl 2xl:top-[35vh] lg:top-[30vh] flex bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] text-transparent bg-clip-text">
              <span className="2xl:ml-30 lg:ml-10 linetwo opacity-0">
                {" "}
                They’re born from bold dreams &
              </span>
            </div>

            <div className="absolute mt-7 font-semibold capitalize  2xl:gap-44 lg:gap-30 2xl:text-7xl lg:text-4xl 2xl:top-[49vh] lg:top-[43vh] 2xl:left-69 lg:left-32  flex bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] text-transparent bg-clip-text">
              <span className="linethree opacity-0 ">inspiration</span>
              <span className="linethree opacity-0 ">
                Sketched with passion,
              </span>
            </div>

            <div className="absolute mt-7 font-semibold capitalize 2xl:gap-74 lg:gap-50 2xl:text-7xl lg:text-4xl 2xl:left-60 lg:left-32 2xl:top-[62vh] lg:top-[56vh] flex bg-gradient-to-b from-[#dba276] via-[#9d5d3c] to-[#5a2b1d] text-transparent bg-clip-text">
              <span className=" linefour opacity-0">shaped with precision</span>
              <span className="linefour opacity-0 ">power of AI.</span>
            </div>
          </div>
     
          
        </div>
      </div>
    </>
  );
}

export default TextIconAnimation;
