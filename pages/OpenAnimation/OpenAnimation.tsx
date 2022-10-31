import { delay } from "framer-motion";
import gsap from "gsap";
import { useEffectOnce } from "usehooks-ts";

const OpenAnimation = () => {
  const date: Date = new Date();
  const time = String(date);
  console.log(time);
  useEffectOnce(() => {
    // var tl = gsap.timeline({ repeat: -1 });
    // tl.to(".writeLine:nth-child(1)", {
    //   duration: 0.7,
    //   borderColor: "rgba(0, 255, 51, 0)",
    // });
    var writeTl = gsap.timeline({});

    writeTl
      .to(".writeLine:nth-child(1)", {
        width: "28rem",
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
        width: "99rem",
        duration: 0.8,
        ease: "none",
        delay: 1.8,
      });
  });
  return (
    <>
      <section>
        {/* <p className="line-1 anim-typewriter">
          Animation typewriter style using css steps()
        </p>
        <div id="typedtext"></div> */}
        <div className="wrapper">
          <div className="writeLine">System booting</div>
          <div className="writeLine">{time}</div>
        </div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../../styles/functions.scss";
        section {
          position: fixed;
          top: 0;
          left: 0;
          @include flex-center(100vw, 100vh);
          background-color: $mainGray;

          .wrapper {
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
              border-right: 10px solid rgba(0, 255, 51, 0);
              overflow: hidden;
              width: 0;
            }
          }
        }
      `}</style>
    </>
  );
};
export default OpenAnimation;
