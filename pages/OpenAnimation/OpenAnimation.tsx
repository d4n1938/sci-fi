import gsap from "gsap";
import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import CircleAnimation from "./CircleAnimation";
import Holo from "./Holo";
const OpenAnimation = () => {
  const [end, setEnd] = useState<boolean>(false);
  // const date: Date = new Date();
  // const time = String(date);
  // var end: boolean = false;

  useEffectOnce(() => {
    var writeTl = gsap.timeline({});

    writeTl
      .to(".writeLine:nth-child(1)", {
        width: "25rem",
        duration: 0.3,
        ease: "none",
        onComplete: () => {
          gsap.timeline({ repeat: 3 }).to(".writeLine:nth-child(1)", {
            duration: 0.5,
            borderColor: "rgba(0, 255, 51, 0)",
          });
        },
      })
      .to(".writeLine:nth-child(2)", {
        width: "95rem",
        duration: 0.8,
        ease: "none",
        delay: 1.8,
      })
      .to(".writeLine:nth-child(3)", {
        width: 360,
        duration: 0.4,
        ease: "none",
        onComplete: () => {
          gsap.timeline({ repeat: 3 }).to(".writeLine:nth-child(3)", {
            duration: 0.5,
            borderColor: "rgba(0, 255, 51, 0)",
          });
        },
      })
      .to(".writeLine:nth-child(4)", {
        width: 360,
        duration: 0,
        ease: "none",
        delay: 2.2,
      })
      .to(".writeLine:nth-child(5)", {
        width: 360,
        duration: 0,
        ease: "none",
        delay: 0.8,
      })
      .to(".writeLine:nth-child(6)", {
        width: 360,
        duration: 0,
        ease: "none",
        delay: 0.4,
      })
      .to(".writeLine:nth-child(7)", {
        width: 360,
        duration: 0,
        ease: "none",
        delay: 0.4,
      })
      .to(".writeLine:nth-child(8)", {
        width: 360,
        duration: 0,
        ease: "none",
        delay: 0.2,
      })
      .to(".writeLine:nth-child(9)", {
        width: 750,
        duration: 0.6,
        ease: "none",
        delay: 0.6,
        onComplete: () => {
          gsap.timeline({ repeat: 3 }).to(".writeLine:nth-child(9)", {
            duration: 0.5,
            borderColor: "rgba(0, 255, 51, 0)",
          });
        },
      })
      .to(".writeLine:nth-child(10)", {
        width: 750,
        duration: 0.6,
        ease: "none",
        delay: 2.2,
      })
      .to(".wrapper", {
        delay: 1,
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setEnd(true);
        },
      })
      .to("section", {
        opacity: 0,
        delay: 3,
      });
  });
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="writeLine">System booting</div>
          {/* <div className="writeLine">{time}</div> */}
          <div className="writeLine">time</div>
          <div className="writeLine">Initializing . . .</div>
          <div className="writeLine">Level -----1</div>
          <div className="writeLine">Level -----2</div>
          <div className="writeLine">Level -----3</div>
          <div className="writeLine">Level -----4</div>
          <div className="writeLine">Level -----5</div>
          <div className="writeLine">Booting sequence all succeed</div>
          <div className="writeLine">Welcome</div>
        </div>
      </section>
      <div className="circle">
        {(() => {
          if (end == true) {
            return <Holo></Holo>;
          }
        })()}
      </div>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../../styles/functions.scss";
        @import url("https://fonts.googleapis.com/css2?family=Goldman&display=swap");
        section {
          position: fixed;
          top: 0;
          left: 0;
          @include flex-center(100vw, 100vh);
          background-color: $mainGray;

          .wrapper {
            user-select: none;
            position: relative;
            margin: 40px;
            width: 100%;
            height: 100%;
            .writeLine {
              top: 0;
              left: 20px;
              font-size: 3rem;
              color: $textGreen;
              white-space: nowrap;
              font-family: "Maven Pro", sans-serif;
              font-family: "Goldman", cursive;
              border-right: 10px solid rgba(0, 255, 51, 0);
              overflow: hidden;
              width: 0;
            }
          }
        }
        .circle {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};
export default OpenAnimation;
