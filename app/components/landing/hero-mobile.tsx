"use client";

import Image from "next/image";
import ImageIonaBadge from "@/app/assets/image-iona-badge.png";
import ImageIonaTextBadge from "@/app/assets/image-iona-text-badge.svg";
import ImageAsteriskBadge from "@/app/assets/image-asterisk-badge.svg";
import IonaCoreBanner from "@/app//assets/iona-core-banner.png";
import { useEffect, useRef, useState } from "react";

export function HeroSectionMobile() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="framer-qzjj2l" data-framer-name="Hero Section">
      <div
        ref={ref}
        className="framer-z4bw6g"
        data-framer-name="Container"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          willChange: "transform",
        }}
      >
        <div className="framer-og55ik" data-framer-name="Content">
          <div className="framer-z57mcf">
            <div className="ssr-variant hidden-72rtr7 hidden-gmy0uk">
              <div
                className="framer-t4val1"
                data-framer-component-type="RichTextContainer"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none",
                }}
              >
                <h1
                  className="framer-text"
                  style={
                    {
                      "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                      "--framer-font-family":
                        '"Poppins", "Poppins Placeholder", sans-serif',
                      "--framer-font-size": "54px",
                      "--framer-font-weight": 300,
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(0, 0, 0))",
                      "--framer-text-transform": "uppercase",
                    } as React.CSSProperties
                  }
                >
                  iona Szkurnik
                </h1>
              </div>
            </div>

            <div className="ssr-variant hidden-72rtr7 hidden-gmy0uk">
              <div
                className="framer-1n11fyp"
                data-framer-component-type="RichTextContainer"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none",
                }}
              >
                <h3
                  className="framer-text"
                  style={
                    {
                      "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                      "--framer-font-family":
                        '"DM Sans", "DM Sans Placeholder", sans-serif',
                      "--framer-font-size": "24px",
                      "--framer-letter-spacing": "-0.02em",
                      "--framer-line-height": "115%",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(0, 0, 0))",
                    } as React.CSSProperties
                  }
                >
                  Do Vale do Silício para a decisão estratégica no Brasil
                  corporativo.
                </h3>
              </div>
            </div>
          </div>

          <div className="framer-1mjwohw" data-framer-name="Badge and Text">
            <div className="framer-1uec7pv" data-framer-name="Badge Wrapper">
              <div className="ssr-variant hidden-gmy0uk">
                <div className="framer-azfy8r" data-framer-name="Badge Text">
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
                      width={400}
                      height={400}
                      src={ImageIonaBadge}
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

                  <div
                    className="framer-1pjgyza"
                    data-framer-name="Text"
                    style={{
                      willChange: "transform",
                      opacity: 1,
                      transform: "rotate(22.392deg)",
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
                        width={426}
                        height={430}
                        src={ImageIonaTextBadge}
                        className="animate-spin"
                        alt="Badge"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center",
                          objectFit: "contain",
                          animationDuration: "18000ms",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="framer-12rmoex"
                    data-framer-name="Icon"
                    style={{ transform: "translate(-50%, -50%)" }}
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
                        width={28}
                        height={28}
                        src={ImageAsteriskBadge}
                        alt="Icon"
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
              </div>
            </div>
          </div>

          <div
            className="framer-14ck4lk"
            style={{
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
              transform: "none",
            }}
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-34zyjt"
              data-styles-preset="jIY0P7P2R"
            >
              Formada por Stanford e moldada no Vale do Silício, atuo com
              lideranças que sabem que a IA já chegou. Mas que ainda precisam
              entender como transformá-la em resultado e cultura.
            </p>
          </div>

          <div
            className="framer-mtrtz7"
            data-framer-name="White shark toadfish cutthroat trout dusky grouper rocket danio bass queen parrotfish North American."
            style={{
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
              transform: "none",
            }}
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-34zyjt"
              data-styles-preset="jIY0P7P2R"
              style={
                {
                  "--framer-text-alignment": "left",
                  "--framer-text-color":
                    "var(--token-cc72b569-df95-4e7e-8fbb-1b3bdc7da143, rgb(0, 0, 0))",
                } as React.CSSProperties
              }
            >
              Transformações sustentáveis começam na cultura. É aí que a IA
              precisa entrar: como pilar estratégico do negócio.
            </p>
          </div>
        </div>
      </div>

      <div className="ssr-variant hidden-gmy0uk">
        <div className="framer-1l5ci7b">
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
              width={6400}
              height={3184}
              src={IonaCoreBanner}
              alt="Image"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center top",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
