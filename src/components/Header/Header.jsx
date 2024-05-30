import React, { useRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Menu from "../Menu/Menu";
import { visible, hidden } from "../../utils/animation";
export default function Header({ timeline }) {
  const menuTL = useRef(gsap.timeline({ paused: true }));
  const menuTLflag = useRef(false);
  const switchLangBtnRef = useRef();
  const switchLangListef = useRef();
  const menuRef = useRef();
  const container = useRef();
  const bgRef = useRef();

  const openSwitchLangHandler = () => {
    switchLangListef.current.style.display =
      switchLangListef.current.style.display === "block" ? "none" : "block";
    // switchLangBtnRef.current.classList.add(styles["active"]);
  };
  const menuHandler = () => {
    menuTLflag.current ? menuTL.current.reverse() : menuTL.current.play();
    menuTLflag.current = !menuTLflag.current;
  };

  useGSAP(() => {
    timeline.current
      .from(menuRef.current, 1.6, { scale: 50 }, 0)
      .to(
        menuRef.current,
        0.8,
        {
          x: 0,
          y: 0,
          rotateZ: 10,
        },
        1.6
      )
      .to(bgRef.current, 1, { opacity: 0 }, 2.4)
      .set(bgRef.current, { visibility: "hidden" }, 3)
      .to("#header-menu-text", visible, 3.4)
      .to("#header-title", visible, 3.4)
      .to("#header-navbar", visible, 3.4)
      .to("#switchLangBtnRef", visible, 3.4);
  });

  return (
    <>
      <header
        data-lenis-prevent
        ref={container}
        className={styles["container"]}
      >
        <div className={`grid ${styles["inner-header"]}`}>
          <div id="header-title" className={styles["header-title"]}>
            <h1>
              AnimatedWebsite<span>.</span>
            </h1>
          </div>
          <nav id="header-navbar" className={styles["header-navbar"]}>
            <ul>
              <li>LIST1</li>
              <li>LIST2</li>
              <li>LIST3</li>
            </ul>
          </nav>
          <div className={styles["header-switch-language"]}>
            <button
              id="switchLangBtnRef"
              onClick={openSwitchLangHandler}
              ref={switchLangBtnRef}
            >
              <div>En</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-v-78dc4441=""
                class=""
              >
                <path
                  d="M8 10L12 14L16 10"
                  stroke="currentColor "
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-78dc4441=""
                ></path>
              </svg>
            </button>
            <ul ref={switchLangListef}>
              <li>En</li>
              <li>Pe</li>
            </ul>
          </div>
          <div
            onClick={menuHandler}
            ref={menuRef}
            className={styles["header-menu"]}
            id="header-menu"
          >
            <div className={styles["header-menu-circle"]}></div>
            <div id="header-menu-text" className={styles["header-menu-text"]}>
              MENU
            </div>
          </div>
        </div>
        <Menu menuTL={menuTL.current} />
      </header>
      <div ref={bgRef} className={styles["menu-bg"]}></div>
    </>
  );
}
