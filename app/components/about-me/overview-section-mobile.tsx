"use client";

import ImageMarqueeFirst from "@/app/assets/image-marquee-first.jpg";
import ImageMarqueeSecond from "@/app/assets/image-marquee-second.png";
import Image from "next/image";

export function OverviewSectionMobile() {
  return (
    <>
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

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
                gap: "20px",
                position: "relative",
                flexDirection: "row",
                willChange: "transform",
                transform: "translateX(0px)",
              }}
            >
              {[...Array(6), ...Array(6)].map((_, i) => {
                const isFirstImage = i % 2 === 0;
                const imgSrc = isFirstImage
                  ? ImageMarqueeFirst
                  : ImageMarqueeSecond;
                const className = isFirstImage
                  ? "framer-c5t4yn"
                  : "framer-1y7fqd4";

                return (
                  <li
                    key={i}
                    aria-hidden={i > 1}
                    style={{ willChange: "transform" }}
                  >
                    <div className={className} style={{ flexShrink: 0 }}>
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
                          src={imgSrc}
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
                );
              })}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
