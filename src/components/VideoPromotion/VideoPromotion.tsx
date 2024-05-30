import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function VideoPromotion({ timeline }) {
  const container = useRef();
  const customCursor = useRef();

  // useEffect(() => {
  //   window.addEventListener("mousemove", (event) => {
  //     gsap.to(container.current, { "--position-x": `${event.clientX}px` });
  //     gsap.to(container.current, { "--position-y": `${event.clientY}px` });
  //   });
  //   window.addEventListener("wheel", (event) => {
  //     gsap.to(container.current, {
  //       "--position-y": `-=${event.wheelDeltaY}px`,
  //     });
  //   });
  //   window.addEventListener("scroll", (event) => {
  //     if (container.current.style.getPropertyValue("--scale-value") > 0.85) {
  //       gsap.to(container.current, 0.5, { "--cursor-scale": 1 });
  //     } else {
  //       gsap.to(container.current, 0.5, { "--cursor-scale": 0 });
  //     }
  //   });
  // }, []);

  useGSAP(() => {
    let tl = gsap
      .timeline({
        paused: false,
        scrollTrigger: {
          trigger: container.current,
          scrub: 0.5,
          start: "top bottom",
          end: "center 70%",
        },
      })
      .to(container.current, { "--translate-value": 0 });

    let tl2 = gsap
      .timeline({
        paused: false,
        scrollTrigger: {
          trigger: container.current,
          scrub: 0.5,
          start: "center 70%",
          end: "bottom bottom",
        },
      })
      .to(container.current, { "--scale-value": 1, "--border-radius": 0 });

    timeline.current.to(container.current, { "--translate-value": 1 }, 3.2);

    gsap.to(`.${styles["custom-cursor"]} div`, 10, {
      repeat: -1,
      x: "-100%",
      ease: "none",
    });
  });

  return (
    <div ref={container} className={styles["container"]}>
      <div className={styles["show-reel"]}>
        <div className={styles["reel"]}>
          <div className={styles["video"]}>
            <div ref={customCursor} className={styles["custom-cursor"]}>
              <div>
                <span>Play Video</span>
                <span>Play Video</span>
                <span>Play Video</span>
                <span>Play Video</span>
                <span>Play Video</span>
                <span>Play Video</span>
                <span>Play Video</span>
                <span>Play Video</span>
                <span>Play Video</span>
              </div>
            </div>
            <video
              autoPlay
              playsInline
              loop
              muted
              src="/media/mainVideo2.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
