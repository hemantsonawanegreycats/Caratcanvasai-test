import { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgone from "../assets/slide-image-1.jpg";
import imgtwo from "../assets/slide-image-2.jpg";
import imgthree from "../assets/slide-image-3.jpg";
import imgfour from "../assets/slide-image-4.jpg";
import imgfive from "../assets/slide-image-5.jpg";

import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";

gsap.registerPlugin(ScrollTrigger);

function ThirdAnimation() {
  const parendiv = useRef(null);
  const headingText = useRef(null);
  const imagesWrapper = useRef(null);
  const empparentdiv = useRef(null);
  const containerRef = useRef(null);

  const teamsimage = [team1, team2, team3, team4];

  useGSAP(() => {
    const employees = containerRef.current.querySelectorAll(".employee");
    const employnames = gsap.utils.toArray(".employnames");

    employees.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        employees.forEach((target) => {
          if (target === el) {
            gsap.to(target, { flex: 2, ease: "power2.out", duration: 0.4 });
          } else {
            gsap.to(target, { flex: 0.7, ease: "power2.out", duration: 0.4 });
          }
        });
      });

      el.addEventListener("mouseleave", () => {
        employees.forEach((target) => {
          gsap.to(target, { flex: 1, ease: "power2.out", duration: 0.4 });
        });
      });
    });

    employees.forEach((el, index) => {
      el.addEventListener("mouseenter", () => {
        employnames.forEach((nameEl, nameIndex) => {
          if (index === nameIndex) {
            // Rotate hovered one to 45 degrees
            gsap.to(nameEl, {
              x: -80,
              rotate: 0,
              ease: "power2.out",
              duration: 0.4,
            });
          } else {
            // Keep others at 90 degrees
            gsap.to(nameEl, {
              x: 0,
              rotate: -90,
              ease: "power2.out",
              duration: 0.4,
            });
          }
        });
      });

      el.addEventListener("mouseleave", () => {
        // On mouse leave, reset all to 90 degrees
        gsap.to(employnames[index], {
          rotate: 90,
          x: 0,
          ease: "power2.out",
          duration: 0.4,
        });
      });
    });
  });

  useGSAP(() => {
    // Animate heading text
    gsap.fromTo(
      gsap.utils.toArray(".line"),
      { y: 0 ,autoAlpha:1},
      {
        y: -800,
        autoAlpha:0,
        ease: "power2.out",
        duration: 0.7,
        stagger: 0.02,
        scrollTrigger: {
          trigger: parendiv.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          markers: true,
        },
      }
    );

    // Animate images one by one upward with fade out
    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: parendiv.current,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: false,
    markers: true,
  },
});

const images = gsap.utils.toArray(".thirdanimationimg");

images.forEach((img, index) => {
  const delay = index * 0.2; // stagger

  // Step 1: Move upward to center (e.g., y: -600)
  tl.fromTo(
    img,
    { y: 0, autoAlpha: 1 },
    {
      y: -600,
      ease: "power2.out",
      duration: 0.5,
    },
    delay
  );

  // Step 2: Slight pause/smooth settle in center
  tl.to(
    img,
    {
      y: -600,
      ease: "none",
      duration: 0.3,
    },
    delay + 0.7
  );

  // Step 3: Continue upward smoothly
  tl.to(
    img,
    {
      y: -1500,
      ease: "power2.in",
      duration: 0.7,
    },
    delay + 0.9
  );
});


    const employetext = gsap.utils.toArray(".employetext");

    gsap.fromTo(
      employetext,
      {
        y: 200,
      },

      {
        y: -150,
        ease: "power2.out",
        delay: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: empparentdiv.current,
          start: "center top",
          end: "bottom bottom",
        },
      }
    );
  }, []);

  return (
    <div
      ref={parendiv}
      className="w-screen h-[200vh] bg-white flex flex-col items-center justify-start overflow-hidden"
    >
      <div className="relative w-screen h-screen bg-white overflow-hidden">
        <h1
          ref={headingText}
          className="text-[5vw] w-[30vw] flex flex-col gap-0 text-center absolute left-[35vw] top-[30%] leading-[1]"
        >
          <span className="line bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] bg-clip-text text-transparent">
            Find Inspiration
          </span>
          <span className="line bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] bg-clip-text text-transparent">
            Wherever You Are
          </span>
        </h1>

        <div
          className="flex w-screen justify-around mt-40 absolute bottom-[-20%]"
          ref={imagesWrapper}
        >
          {[imgone, imgtwo, imgthree, imgfour, imgfive].map((img, i) => (
            <div
              key={i}
              className="thirdanimationimg  rounded-2xl w-80 h-[40vh] bg-white bg-cover "
              style={{
                backgroundImage: `url(${img})`,
                left: `${10 + i * 15}vw`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div ref={empparentdiv} className="w-screen h-screen flex p-10 bg-white">
        <div className="flex w-1/3 text-black flex-col  bg-white">
          <span className="employetext text-8xl mt-[18rem] ml-[5rem] leading-25 bg-gradient-to-br from-[#D4A276] via-[#A16247] to-[#5A2E1F] bg-clip-text text-transparent">
            Meet Our Experts
          </span>
          <span className="employetext ml-[5rem] w-[70%] text-lg mt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing tis neque? Ullam
            quam atque eos rerum ad error commodi mollitia modi quo ea.
          </span>
        </div>
        <div
          ref={containerRef}
          className="flex w-2/3 bg-white justify-between pr-8 pb-6 pt-6 pl-8 gap-4"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="employee relative  rounded-3xl border-1 border-gray-200 flex-1  transition-all duration-300 ease-in-out"
            >
              <div className="absolute bottom-10 left-4  font-semibold text-white uppercase flex flex-col ">
                <div className="employnames ml-20 -rotate-90 text-5xl">
                  {" "}
                  <span>david</span>
                  <span className="ml-3">Miller</span>
                </div>
              </div>
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={teamsimage[i]}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThirdAnimation;
