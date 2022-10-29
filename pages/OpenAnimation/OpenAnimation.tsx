import { useEffectOnce } from "usehooks-ts";

const OpenAnimation = () => {
  useEffectOnce(() => {});
  return (
    <>
      <section>
        <p className="line-1 anim-typewriter">
          Animation typewriter style using css steps()
        </p>
        <div id="typedtext"></div>
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
            color: white;
          }
        }
      `}</style>
    </>
  );
};
export default OpenAnimation;
