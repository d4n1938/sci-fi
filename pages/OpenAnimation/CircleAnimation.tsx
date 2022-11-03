/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { useEffect, useState } from "react";
import Holo from "./Holo";

const CircleAnimation = () => {
  const [end, setEnd] = useState<boolean>(false);
  useEffect(() => {
    gsap.to("img", {
      rotate: 720,
      duration: 3,
      delay: 1,
      ease: "none",
    });
    gsap.to(".a", {
      opacity: 1,
      delay: 1,
      ease: "none",
    });
    gsap.to(".b", {
      opacity: 1,
      delay: 1.4,
      ease: "none",
    });
    gsap.to(".c", {
      opacity: 1,
      delay: 1.8,
      ease: "none",
    });
    gsap.to("img", {
      opacity: 0,
      delay: 2.5,
      onComplete: () => {
        setEnd(true);
      },
    });
  });
  return (
    <>
      <div>
        <img
          className="a"
          src="https://lh3.googleusercontent.com/pw/AL9nZEUnFR34m3vcET11M89GODi7-Oyj8nVih7j8KDHml6BtQCjwSmdDPTr5E1jT8DwF2m7XorN1VBv4aHJoYQg2ograIOltbGYCsSmkvwT_kUn1MMqv1Z8PcTNlkmbKL7Xi-EnvUlMnTW_cPjqwN3HQRx8w=s976-no?authuser=0"
          alt=""
        />
        <img
          className="b"
          src="https://lh3.googleusercontent.com/pw/AL9nZEVqBF5wNR6hqjjdTnjiegmjtH-4-HjByIMsZf4i_oqAUKebKY5VvOFpfemfsI1VVct38kDQ2pybBjoMH-XzJ9ymm4yJeuLCDyQxf1WmlIxrbCVvTAzDbhxzjk68VVvOfrzcmdcmmqBuaC64NQ0uZOHV=s976-no?authuser=0"
          alt=""
        />
        <img
          className="c"
          src="https://lh3.googleusercontent.com/pw/AL9nZEWz2t8bm5J6EocCmdWXPX_-_CD-J3grCNzkIPhYJLUY936Vo_ooO-15mtCr_MzKvmO7UkXKUdP3QkSMHSYRsB8tJNX9Jqc1owAQ0Exwx2WhVXgMODHzzKOLmFkCgxxcP9fUJtIcqumwj_giyF4IpH1Z=s976-no?authuser=0"
          alt=""
        />
      </div>

      {/* style--------------------------------------------------- */}
      <style jsx>{`
        div {
          display: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        img {
          position: fixed;
          width: 40%;
          top: 50%;
          left: 50%;
          opacity: 0;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};
export default CircleAnimation;
