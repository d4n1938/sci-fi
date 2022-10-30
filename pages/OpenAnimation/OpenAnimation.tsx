import gsap from "gsap";
import { useEffectOnce } from "usehooks-ts";

const OpenAnimation = () => {
  useEffectOnce(() => {
    var tl = gsap.timeline({ repeat: -1 });
    tl.to(".writeLine:nth-child(1)", {
      duration: 0.7,
      borderColor: "rgba(0, 255, 51, 0)",
    });
    gsap.to(".writeLine:nth-child(1)", {
      width: 1000,
      duration: 0.8,
      ease: "none",
    });
    gsap.to(".writeLine:nth-child(2)", {
      width: 1000,
      duration: 0.8,
      ease: "none",
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
          <div className="writeLine">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>{" "}
          <div className="writeLine">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
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
          div {
            font-size: 3rem;
            color: $textGreen;
          }
          .wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            .writeLine {
              top: 0;
              left: 20px;
              border-right: 10px solid rgba(0, 255, 51, 1);
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
