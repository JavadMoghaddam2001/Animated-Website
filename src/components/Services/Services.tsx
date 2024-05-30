import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Services() {
  const container = useRef();
  const textRef = useRef();
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
          start: "top bottom",
          end: "bottom -150%",
        },
      })
      .to(
        container.current,
        {
          "--translate-value": 0,
          "--scale-value": 1.2,
        },
        0
      );
  });

  return (
    <div ref={container} className={styles["container"]}>
      <div className={styles["circle-img"]}>
        <img src="/media/pic1.jpg" alt="" />
      </div>
      <div className={styles["grid-container"]}>
        <div className={"grid"}>
          <h2>SECTION</h2>
        </div>
        <ul id="grid-list" className={"grid"}>
          <li>
            <span>Header</span>
          </li>
          <li>
            <span>option</span>
          </li>
          <li>
            <span>option</span>
          </li>
          <li>
            <span>option</span>
          </li>
          <li>
            <span>option</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
