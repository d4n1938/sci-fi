/* eslint-disable @next/next/no-img-element */
import Holo from "./OpenAnimation/Holo";
import Navigation from "./Navigation/Navigation";
import OpenAnimation from "./OpenAnimation/OpenAnimation";
import Image from "next/image";
import { setCookie } from "cookies-next";
import { hasCookie } from "cookies-next";
import { getCookie } from "cookies-next";
export default function Home() {
  return (
    <main>
      {/* <Navigation></Navigation> */}
      {(() => {
        if (!hasCookie("key")) {
          console.log(getCookie("key"));

          return <OpenAnimation></OpenAnimation>;
        } else {
          return <Holo></Holo>;
        }
      })()}

      <section>aaaa</section>
      <section>bbbb</section>
      <section>cccc</section>
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
