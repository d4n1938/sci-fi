import { useEffect } from "react";
import Vivus from "vivus";

const Holo = () => {
  useEffect(() => {
    var logo = new Vivus(
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
      <svg stroke-miterlimit="10" viewBox="0 0 3370.82 2384.24">
        <defs />
        <g id="Layer-2">
          <path
            d="M2467.85 1870.92L2815.6 733.051C2827.15 695.239 2858.08 640.87 2884.68 611.613L3256.86 202.215C3283.45 172.959 3296.19 180.057 3285.32 218.07L2720.6 2191.11C2709.72 2229.12 2668.85 2259.81 2629.31 2259.66L203.171 2250.35C163.633 2250.19 160.158 2235.55 195.41 2217.65L689.123 1966.87C724.375 1948.97 785.005 1934.55 824.543 1934.66L2375.34 1939.18C2414.88 1939.29 2456.3 1908.73 2467.85 1870.92Z"
            fill="#000000"
            fill-opacity="0"
            fill-rule="nonzero"
            opacity="1"
            stroke="#ffffff"
            stroke-linecap="butt"
            stroke-linejoin="round"
            stroke-width="27.2849"
          />
        </g>
      </svg>

      {/* style--------------------------------------------------- */}
      <style jsx>{`
        svg {
          transform: scale(0.5);
        }
      `}</style>
    </>
  );
};
export default Holo;
