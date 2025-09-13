"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PlayIcon from '@/app/assets/play-icon.svg'
import ImageIonaStarse from '@/app/assets/image-iona-startse.png'

export function VideoSection() {
  const [previewVideo, setPreviewVideo] = useState(false);

  return (
    <div className="ssr-variant hidden-gmy0uk">
      <section className="framer-wrslx1" data-framer-name="Video Section">
        {/* Background */}
        <div
          style={{
            position: "absolute",
            borderRadius: "inherit",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          data-framer-background-image-wrapper="true"
        >
          <Image
            decoding="async"
            loading="lazy"
            width="4800"
            height="2100"
            sizes="100vw"
            src={ImageIonaStarse}
            alt="Image"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectPosition: "center",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Overlay */}
        <div className="framer-1tq8vf7" data-framer-name="Overlay" />

        {/* Content Container */}
        <div
          className="framer-6ytr7r"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-tvgs3r" data-framer-name="Content" />
        </div>

        {/* Play Button */}
        <div className="framer-a0vlds" data-framer-name="Content">
          <div
            className="framer-1cbwipx"
            data-framer-name="Play Button"
            id="1cbwipx"
            tabIndex={0}
            style={{
              position: "relative",
              width: "120px",
              height: "120px",
              margin: "0 auto",
            }}
          >
            {/* Pulse Indicator */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgb(21,21,22)",
                zIndex: 0,
              }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatDelay: 0.7,
                ease: "easeOut",
              }}
            />

            <div
              className="framer-1mzssyt"
              onClick={() => setPreviewVideo(true)}
              data-framer-name="Outer Circle"
              style={{
                opacity: 1,
                borderRadius: "50%",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  borderRadius: "inherit",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                data-framer-background-image-wrapper="true"
              >
                <Image
                  decoding="async"
                  loading="lazy"
                  width="120"
                  height="120"
                  src={PlayIcon}
                  alt="play icon"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="ssr-variant hidden-dmz5yz">
            <div
              className="framer-1wea98g"
              style={{
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                transform: "none",
                marginTop: "40px",
                textAlign: "center",
              }}
              data-framer-component-type="RichTextContainer"
            >
              <h2
                className="framer-text"
                style={{
                  ["--font-selector"]: "R0Y7UG9wcGlucy01MDA=",
                  ["--framer-font-family"]:
                    '"Poppins", "Poppins Placeholder", sans-serif',
                  ["--framer-font-size"]: "40px",
                  ["--framer-font-weight"]: "500",
                  ["--framer-letter-spacing"]: "-0.03em",
                  ["--framer-line-height"]: "64px",
                  ["--framer-text-alignment"]: "center",
                  ["--framer-text-color"]: "rgb(255, 255, 255)",
                } as React.CSSProperties}
              >
                Se você não vai até o Vale do Silício, <br />
                Iona leva ele até você
              </h2>
            </div>
          </div>
        </div>
      </section>

      {previewVideo && (
        <>
          <div
            className="framer-QrmFE framer-KGwWx framer-2PkMf framer-1dnoi3h"
            data-framer-portal-id="1cbwipx"
            tabIndex={0}
            style={{ opacity: 1, willChange: "transform" }}
          ></div>

          <div
            className="framer-QrmFE framer-KGwWx framer-2PkMf framer-naxji4"
            data-framer-name="Video Wrapper"
            data-framer-portal-id="1cbwipx"
          >
            <div className="framer-y7tm7z-container">
              <article
                role="presentation"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0px",
                  transform: "unset",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <link rel="preconnect" href="https://www.youtube.com" />
                <link rel="preconnect" href="https://www.google.com" />
                <iframe
                  title="Youtube Video"
                  allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  src="https://www.youtube.com/embed/7SvI40zVRAQ?feature=share&amp;iv_load_policy=3&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=1"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    border: '0',
                  }}
                />
              </article>
            </div>

            <div className="framer-1t4336-container">
              <div
                onClick={() => setPreviewVideo(false)}
                style={{ display: "contents" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  color="var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))"
                  style={{
                    userSelect: "none",
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    fill: "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                    color:
                      "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                    flexShrink: 0,
                  }}
                >
                  <g
                    color="var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))"
                    height="bold"
                  >
                    <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
