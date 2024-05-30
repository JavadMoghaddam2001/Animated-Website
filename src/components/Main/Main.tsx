import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import { visible, hidden } from "../../utils/animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Main({ timeline }) {
  const container = useRef();

  useGSAP(() => {
    let tl = gsap
      .timeline({
        paused: false,
        scrollTrigger: {
          trigger: container.current,
          scrub: 0.5,
          start: "30% 30%",
        },
      })
      .to("#header-navbar", hidden, 0)
      .to("#switchLangBtnRef", hidden, 0);

    timeline.current

      .to(
        `.${styles["word-wrapper-inner"]}`,
        0,
        {
          y: 0,
          rotate: 0,
        },
        2.4
      )
      .to(
        `.${styles["main-text-contianer"]}`,

        {
          opacity: 1,
        },
        2.4
      );
  });

  return (
    <div ref={container} className={styles["container"]}>
      <h1>
        <span className={styles["word-wrapper"]}>
          <span className={styles["word-wrapper-inner"]}>This</span>
        </span>
        <span className={styles["word-wrapper"]}>
          <span className={styles["word-wrapper-inner"]}>Is The</span>
        </span>
        <span className={styles["word-wrapper"]}>
          <span className={styles["word-wrapper-inner"]}></span>
        </span>
        <span className={styles["word-wrapper"]}>
          <span className={styles["word-wrapper-inner"]}>Animated</span>
        </span>
      </h1>
      <div className={`grid ${styles["main-text-contianer"]}`}>
        <div className={styles["main-text"]}>
          <p>
            This is just a placeholder to have a text right here{" "}
            <strong> is just a placeholder</strong>.
          </p>
        </div>
        <div className={styles["button"]}>
          <div className={styles["button-circle"]}></div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-3a34d854=""
          >
            <path
              d="M8 10L12 14L16 10"
              stroke="currentColor "
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-v-3a34d854=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
