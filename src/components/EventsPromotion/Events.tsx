import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const container = useRef();
  const circleRef = useRef();

  useGSAP(() => {
    let tl1 = gsap
      .timeline({
        paused: false,
        scrollTrigger: {
          trigger: container.current,
          scrub: 0.5,
          start: "top 10%",
          end: "top 10%",
        },
      })
      .to(
        document.body,
        {
          "--theme-text-color": "white",
        },
        0
      );
    let tl2 = gsap
      .timeline({
        paused: false,
        scrollTrigger: {
          trigger: container.current,
          scrub: 0.5,
          start: "top 50%",
          end: "bottom top",
        },
      })
      .to(
        container.current,
        {
          "--translate-value": 0.5,
        },
        0
      );

    gsap.utils.toArray("#list-menu  div:last-child").forEach((item, index) => {
      const circle = item.children[0];
      const svg = item.children[1];
      item.addEventListener("mouseenter", () => {
        gsap.to(circle, 0.2, { x: 0, y: 0 });
        gsap.set(svg, { color: "#1d32f5" });

        circleRef.current.style.backgroundImage = `url("../../../public/media/pic${
          index + 1
        }.jpg`;
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(circle, 0.2, { x: "-100%", y: "100%" }),
          gsap.set(svg, { color: "white" });
      });
    });
  });

  return (
    <div ref={container} className={styles["container"]}>
      <div ref={circleRef} className={styles["circle"]}></div>
      <div className={styles["grid-container"]}>
        <div className={"grid"}>
          <h2>SECTION</h2>
        </div>
        <ul id="list-menu" className={"grid"}>
          <li>
            <div className={styles["titles"]}>
              <span>Text</span>
              <br />
              <span>text</span>
            </div>
            <div className={styles["button"]}>
              <span className={styles["menu-nav-circle"]}></span>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </li>
          <li>
            <div className={styles["titles"]}>
              <span>Text</span>
              <br />
              <span>text</span>
            </div>
            <div className={styles["button"]}>
              {" "}
              <span className={styles["menu-nav-circle"]}></span>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </li>
          <li>
            <div className={styles["titles"]}>
              <span>Text</span>
              <br />
              <span>text</span>
            </div>
            <div className={styles["button"]}>
              {" "}
              <span className={styles["menu-nav-circle"]}></span>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
