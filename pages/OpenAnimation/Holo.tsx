/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Vivus from "vivus";

const Holo = () => {
  useEffect(() => {
    var logo1 = new Vivus(
      "Layer-1",
      {
        type: "delayed",
        duration: 150,
        animTimingFunction: Vivus.EASE,
        start: "autostart",
      }
      // function (obj) {
      //   logo.reset().play();
      // }
    );
    var logo2 = new Vivus(
      "Layer-2",
      {
        type: "delayed",
        duration: 150,
        animTimingFunction: Vivus.EASE,
        start: "autostart",
      }
      // function (obj) {
      //   logo.reset().play();
      // }
    );
  });

  return (
    <>
      <svg
        stroke-miterlimit="10"
        version="1.1"
        viewBox="0 0 3370.82 2384.24"
        width="100%"
        className="left"
      >
        <defs />
        <g id="Layer-1">
          <path
            d="M2467.85 1870.92L2815.6 733.051C2827.15 695.239 2858.08 640.87 2884.68 611.613L3256.86 202.215C3283.45 172.959 3296.19 180.057 3285.32 218.07L2720.6 2191.11C2709.72 2229.12 2668.85 2259.81 2629.31 2259.66L203.171 2250.35C163.633 2250.19 160.158 2235.55 195.41 2217.65L689.123 1966.87C724.375 1948.97 785.005 1934.55 824.543 1934.66L2375.34 1939.18C2414.88 1939.29 2456.3 1908.73 2467.85 1870.92Z"
            fill="#000000"
            fill-opacity="0"
            fill-rule="nonzero"
            opacity="0.998096"
            stroke="#ffffff"
            stroke-linecap="butt"
            stroke-linejoin="round"
            stroke-width="27.2849"
          />
        </g>
      </svg>{" "}
      <svg
        stroke-miterlimit="10"
        version="1.1"
        viewBox="0 0 3370.82 2384.24"
        width="100%"
        className="right"
      >
        <defs />
        <g id="Layer-2">
          <path
            d="M2467.85 1870.92L2815.6 733.051C2827.15 695.239 2858.08 640.87 2884.68 611.613L3256.86 202.215C3283.45 172.959 3296.19 180.057 3285.32 218.07L2720.6 2191.11C2709.72 2229.12 2668.85 2259.81 2629.31 2259.66L203.171 2250.35C163.633 2250.19 160.158 2235.55 195.41 2217.65L689.123 1966.87C724.375 1948.97 785.005 1934.55 824.543 1934.66L2375.34 1939.18C2414.88 1939.29 2456.3 1908.73 2467.85 1870.92Z"
            fill="#000000"
            fill-opacity="0"
            fill-rule="nonzero"
            opacity="0.998096"
            stroke="#ffffff"
            stroke-linecap="butt"
            stroke-linejoin="round"
            stroke-width="27.2849"
          />
        </g>
      </svg>
      <img
        className="image"
        src="https://lh3.googleusercontent.com/pw/AL9nZEV8XXQ-N6qP2C6arb8rE4hxTJ-8EjqpW7vOu_HXp26eJCcOJ48dh_W4rzIQVZVp8PJkkkKmzEvaveqB0QBDrgN7_dy4i-w_GN_7Bqe1Ev3HBkANm521oywKC_NMoetGCZT5MPsMJUljoQtENPslkg_Z=s976-no?authuser=0"
        alt=""
      />
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        div {
          color: red;
          background-color: aqua;
          width: 1000px;
          height: 500px;
          position: relative;
        }

        .left {
          position: fixed;
          top: 0;
          left: 0;
          width: 20vw;
          margin: 40px;
          transform: rotate(180deg);
        }
        .right {
          position: fixed;
          bottom: 0;
          right: 0;
          margin: 40px;
          width: 20vw;
        }
        .image {
          width: 80px;
          height: 80px;
          display: block;
          position: fixed;
          bottom: 50px;
          left: 50px;
        }
      `}</style>
    </>
  );
};
export default Holo;
