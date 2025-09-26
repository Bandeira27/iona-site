"use client";

import React, { useEffect, useRef } from "react";
import ImageMarqueeFirst from "@/app/assets/image-marquee-first.jpg";
import ImageMarqueeSecond from "@/app/assets/image-marquee-second.png";
import ImageMarqueeThree from "@/app/assets/image-marquee-three.jpg";
import Image from "next/image";

export default function OverviewSection() {
  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    let translateX = 0;
    const speed = 1;

    const animate = () => {
      translateX -= speed;
      track.style.transform = `translateX(${translateX}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="framer-1vdgkl7" data-framer-name="Overview Section">
      <div className="framer-vpmg27-container hidden-p0mfc hidden-xme965">
        <section
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            placeItems: "center",
            margin: 0,
            padding: "10px",
            listStyleType: "none",
            opacity: 1,
            overflow: "hidden",
          }}
        >
          <ul
            ref={scrollRef}
            className="marquee-track"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              placeItems: "center",
              margin: 0,
              padding: 0,
              listStyleType: "none",
              gap: "40px",
              position: "relative",
              flexDirection: "row",
              willChange: "transform",
              transform: "translateX(0px)",
            }}
          >
            {[...Array(12), ...Array(12)].map((_, i) => (
              <li
                key={i}
                aria-hidden={i > 2}
                style={{ willChange: "transform" }}
              >
                <div
                  className={`framer-${
                    i % 3 === 0 ? "1t97jvt" : i % 3 === 1 ? "flcglx" : "s60kps"
                  }`}
                  style={{ flexShrink: 0 }}
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      inset: 0,
                    }}
                  >
                    <Image
                      decoding="async"
                      src={
                        i % 3 === 0
                          ? ImageMarqueeFirst
                          : i % 3 === 1
                            ? ImageMarqueeSecond
                            : ImageMarqueeThree
                      }
                      alt="Image"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition:
                          i % 3 === 2 ? "70% center" : "center center",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div
        className="framer-1tqs29a hidden-p0mfc hidden-xme965"
        data-framer-name="Container"
        style={{ willChange: "transform", opacity: 1, transform: "none" }}
      >
        <div className="framer-112gjwb" data-framer-name="Content"></div>
      </div>
    </section>
  );
}
