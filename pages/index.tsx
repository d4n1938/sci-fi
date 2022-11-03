/* eslint-disable @next/next/no-img-element */
import Holo from "./OpenAnimation/Holo";
import Navigation from "./Navigation/Navigation";
import OpenAnimation from "./OpenAnimation/OpenAnimation";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Navigation></Navigation>
      {/* <OpenAnimation></OpenAnimation> */}
      <Holo></Holo>

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
      `}</style>
    </main>
  );
}
