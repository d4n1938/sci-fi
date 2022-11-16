/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { useEffect } from "react";
import Vivus from "vivus";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { setCookie } from "cookies-next";

const Holo = () => {
  //Vivus animation
  useEffect(() => {
    if (!getCookie("key")) {
      var logo1 = new Vivus("Layer-1", {
        type: "delayed",
        duration: 150,
        animTimingFunction: Vivus.EASE,
        start: "autostart",
      });
      var logo2 = new Vivus(
        "Layer-2",
        {
          type: "delayed",
          duration: 150,
          animTimingFunction: Vivus.EASE,
          start: "autostart",
        },
        function () {
          gsap.to("path", {
            stroke: "white",
            duration: 0.3,
          });
        }
      );
      var logo3 = new Vivus(
        "Layer-3",
        {
          type: "delayed",
          duration: 150,
          animTimingFunction: Vivus.EASE,
          start: "autostart",
        },
        function () {
          gsap.to("path", {
            stroke: "white",
            duration: 0.3,
          });
        }
      );
      setCookie("key", "value");
    }
  });

  return (
    <>
      {/* left up */}
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
      {/* right down */}
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
      </svg>{" "}
      {/* arrow */}
      <Link href="/">
        <svg
          className="arrow"
          stroke-miterlimit="10"
          version="1.1"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs />
          <g id="Layer-3">
            <g opacity="1">
              <g opacity="1">
                <path
                  d="M503.346 817.694L309.972 816.256L309.972 488.752L152.952 488.752L503.346 131.22"
                  fill-opacity="0"
                  fill-rule="nonzero"
                  opacity="1"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="14.2396"
                />
                <path
                  d="M503.346 961.027L309.972 961.027"
                  fill="#000000"
                  fill-opacity="0"
                  fill-rule="nonzero"
                  opacity="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="14.2396"
                />
                <path
                  d="M309.972 893.078L503.346 893.078"
                  fill="#000000"
                  fill-opacity="0"
                  fill-rule="nonzero"
                  opacity="1"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="14.2396"
                />
              </g>
            </g>
            <g opacity="1">
              <path
                d="M503.346 817.694L696.719 816.256L696.719 488.752L853.739 488.752L503.346 131.22"
                fill="#000000"
                fill-opacity="0"
                fill-rule="nonzero"
                opacity="1"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="14.2396"
              />
              <path
                d="M503.346 961.027L696.719 961.027"
                fill="#000000"
                fill-opacity="0"
                fill-rule="nonzero"
                opacity="1"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="14.2396"
              />
              <path
                d="M696.719 893.078L503.346 893.078"
                fill="#000000"
                fill-opacity="0"
                fill-rule="nonzero"
                opacity="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="14.2396"
              />
            </g>
          </g>
        </svg>
      </Link>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../../styles/functions.scss";
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
          path {
            stroke: $textGreen;
          }
        }
        .right {
          position: fixed;
          bottom: 0;
          right: 0;
          margin: 40px;
          width: 20vw;
          path {
            stroke: $textGreen;
          }
        }
        .image {
          width: 80px;
          height: 80px;
          display: block;
          position: fixed;
          bottom: 50px;
          left: 50px;
        }
        .arrow {
          stroke-width: 2px;
          fill: "#000000";
          fill-opacity: "0";
          fill-rule: "nonzero";
          opacity: "0.998096";
          stroke-linecap: "butt";
          stroke-linejoin: "round";
          stroke-width: "27.2849";
          width: 100px;
          display: block;
          position: fixed;
          bottom: 50px;
          left: 50px;
          path {
            stroke: #fff;
          }
        }
      `}</style>
    </>
  );
};
export default Holo;
