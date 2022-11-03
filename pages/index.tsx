/* eslint-disable @next/next/no-img-element */
import Holo from "./OpenAnimation/Holo";
import Navigation from "./Navigation/Navigation";
import OpenAnimation from "./OpenAnimation/OpenAnimation";
export default function Home() {
  return (
    <main>
      <Navigation></Navigation>
      {/* <OpenAnimation></OpenAnimation> */}
      <section>
        <img
          className="image"
          src="https://lh3.googleusercontent.com/pw/AL9nZEV8XXQ-N6qP2C6arb8rE4hxTJ-8EjqpW7vOu_HXp26eJCcOJ48dh_W4rzIQVZVp8PJkkkKmzEvaveqB0QBDrgN7_dy4i-w_GN_7Bqe1Ev3HBkANm521oywKC_NMoetGCZT5MPsMJUljoQtENPslkg_Z=s976-no?authuser=0"
          alt=""
        />
      </section>
      <section>aaaa</section>
      <section>aaaa</section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";
        section {
          @include flex-center("", 100vh);
          color: aliceblue;
          font-size: 3rem;
        }
        .image {
          width: 200px;
          height: 200px;
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          background-color: aqua;
        }
      `}</style>
    </main>
  );
}
