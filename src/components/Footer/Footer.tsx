import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);
export default function Footer() {
  const lenis = new Lenis();
  const container = useRef();
  useGSAP(() => {});

  return (
    <div ref={container} className={styles["container"]}>
      <div className={styles["grid-container"]}>
        <div className={styles["button-container"]}>
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
        <ul id="grid-list" className={"grid"}>
          <div className={styles["footer-text"]}>
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
            <div className={styles["texts"]}>
              Hope <br /> Enjoy!
            </div>
          </div>
          <div className={styles["links"]}>
            <div className={styles["link"]}>
              <div>List text</div>
              <div>List text</div>
              <div>List text</div>
            </div>
            <div className={styles["link"]}>
              <div>List text</div>
              <div>List text</div>
              <div>List text</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
