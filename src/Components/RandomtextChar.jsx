import { AiTwotonePlusCircle } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function RandomtextChar() {
  gsap.registerPlugin(ScrollTrigger);


  const scrollparent = useRef(null);

  useGSAP(() => {
    const chars = gsap.utils.toArray(".chars");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollparent.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      },
    });


    tl.fromTo(
      chars,
      {
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-300, 300),
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        x: 0,
        y: 0,

        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.out",
    
        stagger: 0.3,
      }
    );

   
    tl.to(chars, {
      x: () => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(-300, 300),
      opacity: 0,
      filter: "blur(30px)",
      duration: 2,
      ease: "power2.in",
      stagger: 0.02,
    });
  }, []);



  return (
    <>
      <div
        ref={scrollparent}
        className="w-screen flex h-[100vh] items-center flex-col justify-center"
      >
        <div className="w-[60%] mt-5  text-center 2xl:leading-30 lg:leading-20 flex flex-wrap justify-center ">
          {[..."Find - new "].map((char, i) => (
            <span
              className="chars 2xl:text-[9rem] lg:text-[5rem] md:text-[4rem] uppercase bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] bg-clip-text text-transparent "
              key={i}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="w-[60%]  2xl:mt-10 lg:mt-2 text-center 2xl:leading-30 lg:leading-20 flex flex-wrap justify-center">
          {[..."creations - for "].map((char, i) => (
            <span
              className="chars 2xl:text-[9rem] lg:text-[5rem] md:text-[4rem] uppercase bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] bg-clip-text text-transparent "
              key={i}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="w-[60%] 2xl:mt-10 lg:mt-2 text-center 2xl:leading-30 lg:leading-20 flex flex-wrap justify-center">
          {[..."Your-brand "].map((char, i) => (
            <span
              className="chars 2xl:text-[9rem] lg:text-[5rem] md:text-[4rem] uppercase bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] bg-clip-text text-transparent "
              key={i}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default RandomtextChar;
