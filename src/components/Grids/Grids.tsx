import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Grids() {
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
          "--theme-text-color": "black",
        },
        0
      );
    let tl2 = gsap
      .timeline({
        paused: false,
        scrollTrigger: {
          trigger: container.current,
          scrub: 0.5,
          start: "top top",
          end: "bottom center",
        },
      })
      .to(
        container.current,
        {
          "--translate-value": 1,
        },
        0
      );
    gsap.utils
      .toArray("#grid-list  li div:first-child img")
      .forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, 0.4, { scale: 1.2 });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, 0.4, { scale: 1 });
        });
      });
  });

  return (
    <div ref={container} className={styles["container"]}>
      <div ref={textRef} className={styles["main-text"]}>
        <img src="../../../public/media/AnimatedWebsite.svg" alt="" />
      </div>
      <div className={styles["grid-container"]}>
        <div className={"grid"}>
          <h2>SECTION</h2>
        </div>
        <ul id="grid-list" className={"grid"}>
          <li>
            <div className={styles["grid-view"]}>
              <img src="/media/pic1.jpg" alt="" />
            </div>
            <div className={styles["grid-titles"]}>
              <span>CAPTION 2023</span>
              <span></span>
              <span>Write anything</span>
            </div>
          </li>
          <li>
            <div className={styles["grid-view"]}>
              <img src="/media/pic1.jpg" alt="" />
            </div>
            <div className={styles["grid-titles"]}>
              <span>CAPTION 2023</span>
              <span></span>
              <span>Write anything</span>
            </div>
          </li>
          <li>
            <div className={styles["grid-view"]}>
              <img src="/media/pic1.jpg" alt="" />
            </div>
            <div className={styles["grid-titles"]}>
              <span>CAPTION 2023</span>
              <span></span>
              <span>Write anything</span>
            </div>
          </li>
          <li>
            <div className={styles["grid-view"]}>
              <img src="/media/pic1.jpg" alt="" />
            </div>
            <div className={styles["grid-titles"]}>
              <span>CAPTION 2023</span>
              <span></span>
              <span>Write anything</span>
            </div>
          </li>
          <li>
            <div className={styles["grid-view"]}>
              <img src="/media/pic1.jpg" alt="" />
            </div>
            <div className={styles["grid-titles"]}>
              <span>CAPTION 2023</span>
              <span></span>
              <span>Write anything</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
