"use client";

import React, { useMemo, useEffect, useRef } from "react";
import ImageMarqueeFirst from "@/app/assets/image-marquee-first.jpg";
import ImageMarqueeSecond from "@/app/assets/image-marquee-second.png";
import Image from "next/image";

export function OverviewSectionMobile() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false);

  const images = useMemo(
    () =>
      [...Array(6), ...Array(6)].map((_, i) => {
        const isFirstImage = i % 2 === 0;
        return {
          src: isFirstImage ? ImageMarqueeFirst : ImageMarqueeSecond,
          className: isFirstImage ? "framer-c5t4yn" : "framer-1y7fqd4",
        };
      }),
    [],
  );

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let totalWidth = 0;
    scrollElement.childNodes.forEach((child) => {
      if (child instanceof HTMLElement) totalWidth += child.offsetWidth + 20;
    });

    let translateX = 0;
    const speed = 0.6;

    const animate = () => {
      if (!pausedRef.current) {
        translateX -= speed;
        if (Math.abs(translateX) >= totalWidth / 2) {
          translateX += totalWidth / 2;
        }
        scrollElement.style.transform = `translateX(${translateX}px)`;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [images]);

  return (
    <section className="framer-1vdgkl7" data-framer-name="Overview Section">
      <div className="framer-2t4pgv-container hidden-1qcvg63 hidden-p0mfc">
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
              gap: "20px",
              position: "relative",
              flexDirection: "row",
              willChange: "transform",
              transform: "translateX(0px)",
            }}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
          >
            {images.map((img, i) => (
              <li key={i} style={{ willChange: "transform" }}>
                <div className={img.className} style={{ flexShrink: 0 }}>
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
                      src={img.src}
                      alt="Image"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center center",
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
    </section>
  );
}
