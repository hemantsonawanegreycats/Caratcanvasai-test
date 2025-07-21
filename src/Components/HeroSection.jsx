import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgone from "../assets/slide-image-1.jpg";
import imgtwo from "../assets/slide-image-2.jpg";
import imgthree from "../assets/slide-image-3.jpg";
import imgfour from "../assets/slide-image-4.jpg";
import imgfive from "../assets/slide-image-5.jpg";

function HeroSection({ mainparentref }) {
  gsap.registerPlugin(ScrollTrigger);
  const box = useRef(null);
  const parendiv = useRef(null);

  function arrangeCenterOut(arr) {
    const result = [];
    let insertLeft = true;

    result.push(arr[0]); // First element goes to center

    for (let i = 1; i < arr.length; i++) {
      if (insertLeft) {
        result.unshift(arr[i]); // insert at start (left)
      } else {
        result.push(arr[i]); // insert at end (right)
      }
      insertLeft = !insertLeft;
    }

    return result;
  }

  useGSAP(() => {
    const letter = gsap.utils.toArray(".letter");
    const lettertwo = gsap.utils.toArray(".lettertwo");
    const scrolldowntext = gsap.utils.toArray(".scrolldowntext");
    const scrolldowntextsub = gsap.utils.toArray(".scrolldowntextsub");
    const heroimages = arrangeCenterOut(gsap.utils.toArray(".heroimages"));

    gsap.fromTo(
      heroimages,
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        delay: 2.5,
        duration: 0.8,
        opacity: 1,
        ease: "sine",
        stagger: 0.5,
      }
    );

    gsap.fromTo(
      scrolldowntextsub,
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        delay: 3,
        duration: 0.8,
        opacity: 1,
        ease: "sine",
        stagger: 1.5,
      }
    );

    gsap.fromTo(
      scrolldowntext,
      {
        y: 100,
        opacity: 0.2,
      },
      {
        y: 0,
        duration: 2.5,
        opacity: 1,
        ease: "sine",
        stagger: 2.5,
      }
    );

    gsap.fromTo(
      box.current,
      {
        y: 1200,
      },
      {
        y: 0,
        duration: 1.6,
        delay: 2,
        opacity: 1,
        ease: "power3.out",
        scrollTriggerL: {
          trigger: mainparentref.current,
          pin: true,
          start: "top top",
          end: "bottm top",
        },
      }
    );

    gsap.fromTo(
      letter,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.9,
        opacity: 1,
        ease: "sine",
        scrub: 2,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      lettertwo,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        ease: "sine",
        stagger: 0.2,
      }
    );
  }, [mainparentref]);

  return (
    <div
      ref={parendiv}
      className="w-screen h-[86vh] relative overflow-hidden flex justify-center"
    >
      <div
        ref={box}
        className="absolute overflow-hidden top-10 z-20 w-[90%] h-[95vh] p-6  flex flex-col  items-center bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] text-white rounded-3xl"
      >
        <div className="flex flex-col justify-start items-center mt-8">
          <span className="scrolldowntext text-center 2xl:text-8xl lg:text-6xl pb-4 bg-gradient-to-r from-[#ffc7b0]  to-white bg-clip-text text-transparent ">
            Your Design. Your Story.
          </span>
          <span className="scrolldowntext text-center 2xl:text-8xl lg:text-6xl  bg-gradient-to-r from-[#ffc7b0]  to-white bg-clip-text text-transparent ">
            Our AI brilliance
          </span>
        </div>

        <div className="flex items-end mt-60">
          <div
            style={{ backgroundImage: `url(${imgone})` }}
            className={`heroimages rounded-2xl w-65 h-50 ml-4 bg-white bg-cover bg-top`}
          ></div>
          <div
            style={{ backgroundImage: `url(${imgtwo})` }}
            className="heroimages rounded-2xl w-65 h-60 ml-4 bg-white bg-cover bg-top"
          ></div>
          <div
            style={{ backgroundImage: `url(${imgthree})` }}
            className="heroimages rounded-2xl w-65 h-70 ml-4 bg-white bg-cover bg-top"
          ></div>
          <div
            style={{ backgroundImage: `url(${imgfour})` }}
            className="heroimages rounded-2xl w-65 h-60 ml-4 bg-white bg-cover bg-top"
          ></div>
          <div
            style={{ backgroundImage: `url(${imgfive})` }}
            className="heroimages rounded-2xl w-65 h-50 ml-4 bg-white bg-cover bg-top"
          ></div>
        </div>
      </div>



      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex w-[30%] justify-around">
          {["W", "E", "L", "C", "O", "M", "E", "T", "O"].map((char, i) => (
            <span
              key={i}
              className="lettertwo text-2xl font-r bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] bg-clip-text text-transparent"
            >
              {char}
            </span>
          ))}
        </div>
        <div className="flex">
          {["C", "A", "R", "A", "T", "C", "A", "N", "V", "S"].map((char, i) => (
            <span
              key={i}
              className="letter text-6xl font-r bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] bg-clip-text text-transparent text-[8vw]"
            >
              {char}
            </span>
          ))}
        </div>
        <div className="text-amber-50 text-center flex flex-col z-20 absolute 2xl:top-78 lg:top-66">
          <span className="scrolldowntextsub tracking-wider">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable{" "}
          </span>
          <span className="scrolldowntextsub tracking-wider mt-1">
            {" "}
            content of a page when looking at its layout.
          </span>
        </div>

        <span className="scrolldowntextsub 2xl:w-[10%] lg:w-[14%] font-semibold 2xl:text-xl lg:text-lg flex items-center justify-center rounded-full absolute 2xl:top-98 lg:top-88 text-[#5f3c2a] h-14 z-20 bg-gradient-to-br from-[#ffffff] via-[#fff0ea] to-[#a15d46]">
          Explore Now
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
