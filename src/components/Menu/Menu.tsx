import React, { useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { visible, hidden } from "../../utils/animation";

export default function Menu({ menuTL }) {
  useGSAP(() => {
    menuTL
      .to("#switchLangBtnRef", hidden)
      .to("#header-menu", 0.2, { rotateZ: -10 }, 0)
      .to(
        document.body,
        {
          overflowY: "hidden",
          "--theme-text-color": "white",
          "--theme-color": "white",
          "--theme-oposite-color": "#1d32f5",
        },
        0
      )
      .to(
        "#menu",
        0.8,
        {
          "--clip-path-circle": "200%",
          ease: "power2.inOut",
          pointerEvents: "all",
        },
        0
      )
      .to("#menu-nav", { opacity: 1 }, 0.8)
      .to("#menu-circle1", { opacity: 1 }, 0.8)
      .to("#menu-circle2", { opacity: 1 }, 1.2);

    gsap.utils.toArray("#menu-nav ul li a").forEach((item, index) => {
      const circle = item.children[1].children[0];
      const svg = item.children[1].children[2];
      const text = item.children[0];
      item.addEventListener("mouseenter", () => {
        gsap.to(circle, 0.2, { x: 0, y: 0 });
        gsap.to(text, 0.2, { x: 10 });
        gsap.set(svg, { display: "block" });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(circle, 0.2, { x: "-100%", y: "100%" }),
          gsap.to(text, 0.2, { x: 0 });
        gsap.set(svg, { display: "none" });
      });
    });
  });

  return (
    <div id="menu" className={styles["menu"]}>
      <div id="menu-circle1" className={styles["menu-circle1"]}></div>
      <div id="menu-circle2" className={styles["menu-circle2"]}></div>
      <div className={`grid ${styles["menu-navigator"]}`}>
        <nav id="menu-nav">
          <ul>
            <li>
              <a href="">
                <span>Option</span>
                <div>
                  <span className={styles["menu-nav-circle"]}></span>
                  <span className={styles["menu-nav-number"]}>01</span>
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
              </a>
            </li>
            <li>
              <a href="">
                <span>Placeholder</span>
                <div>
                  <span className={styles["menu-nav-circle"]}></span>
                  <span className={styles["menu-nav-number"]}>02</span>
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
              </a>
            </li>
            <li>
              <a href="">
                <span>Option</span>
                <div>
                  <span className={styles["menu-nav-circle"]}></span>
                  <span className={styles["menu-nav-number"]}>03</span>
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
              </a>
            </li>
            <li>
              <a href="">
                <span>Placeholder</span>
                <div>
                  <span className={styles["menu-nav-circle"]}></span>
                  <span className={styles["menu-nav-number"]}>04</span>
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
              </a>
            </li>
            <li>
              <a href="">
                <span>Option</span>
                <div>
                  <span className={styles["menu-nav-circle"]}></span>
                  <span className={styles["menu-nav-number"]}>05</span>
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
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
