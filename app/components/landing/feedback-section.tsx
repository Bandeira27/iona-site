"use client";

import { useState } from "react";
import { ScrollReveal } from "../scroll-reveal";
import JuniaGontijo from "../../assets/junia-gontijo.jpg";
import JulianaHadad from "../../assets/juliana-hadad.png";
import IonaFeedbackSectionFirst from "../../assets/iona-feedback-section-first.png";
import IonaFeedbackSectionSecond from "../../assets/iona-feedback-section-second.png";
import PlayIcon from "../../assets/play-icon.svg";
import Image from "next/image";
import { YoutubeEmbed } from "../video-play/youtube-embed";

export function FeedbackSection() {
  const [moved, setMoved] = useState(false);

  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <ScrollReveal>
        <>
          <section
            className="framer-166w29b"
            data-framer-name="Feedback Section"
          >
            <div
              className="framer-1389coo"
              data-framer-name="Container"
              style={{
                willChange: "transform",
                opacity: 1,
                transform: "none",
              }}
            >
              <div className="framer-14mb6d0" data-framer-name="Content">
                <div className="framer-1ol1l9c-container">
                  <div
                    className="framer-8T6Og framer-89jeko framer-v-89jeko !gap-0"
                    data-framer-name="Testimonial Tab 01/01"
                    style={{
                      width: "100%",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  >
                    <div
                      className="framer-66xb59"
                      data-framer-name="Title and Profile"
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <div
                        className="framer-17pohgy"
                        data-framer-name="Title Wrapper"
                        style={{
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      >
                        <div
                          className="framer-1hbzyct"
                          data-framer-component-type="RichTextContainer"
                          style={
                            {
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: 0,
                              "--extracted-1of0zx5":
                                "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                              transformOrigin: "50% 50% 0px",
                            } as React.CSSProperties
                          }
                        >
                          <h2
                            className="framer-text"
                            style={
                              {
                                "--font-selector": "R0Y7UG9wcGlucy01MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "48px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.03em",
                                "--framer-line-height": "58px",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-1of0zx5, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22)))",
                              } as React.CSSProperties
                            }
                          >
                            Depoimentos
                          </h2>
                        </div>
                      </div>
                      <div
                        className="framer-1f9kzlc"
                        style={{
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      >
                        <div
                          className="framer-1uw551f"
                          data-framer-name="Profile Wrapper"
                          style={{
                            transform: "none",
                            transformOrigin: "50% 50% 0px",
                          }}
                        >
                          <div
                            className="framer-1riwdv6-container"
                            style={{
                              transform: "none",
                              transformOrigin: "50% 50% 0px",
                            }}
                          >
                            <div
                              className="framer-jRKFu framer-19ic7g0 framer-v-19ic7g0"
                              data-framer-name="Profile Card 01 Active"
                              data-highlight="true"
                              tabIndex={0}
                              style={{
                                transform: "none",
                                transformOrigin: "50% 50% 0px",
                              }}
                            >
                              <div
                                className="framer-4cxykz"
                                onClick={() => setMoved(false)}
                                data-border="true"
                                data-framer-name="Image"
                                style={
                                  {
                                    "--border-bottom-width": !moved
                                      ? "2px"
                                      : "0px",
                                    "--border-color":
                                      "var(--token-cc72b569-df95-4e7e-8fbb-1b3bdc7da143, rgb(106, 114, 111))",
                                    "--border-left-width": !moved
                                      ? "2px"
                                      : "0px",
                                    "--border-right-width": !moved
                                      ? "2px"
                                      : "0px",
                                    "--border-style": "solid",
                                    "--border-top-width": !moved
                                      ? "2px"
                                      : "0px",
                                    borderRadius: "10px",
                                    transform: "none",
                                    transformOrigin: "50% 50% 0px",
                                    willChange: "auto",
                                  } as React.CSSProperties
                                }
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  style={{
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    inset: "0px",
                                  }}
                                >
                                  <Image
                                    decoding="async"
                                    loading="lazy"
                                    width="300"
                                    height="300"
                                    sizes="120px"
                                    src={JuniaGontijo}
                                    alt="Avatar"
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
                            </div>
                          </div>
                          <div
                            className="framer-o2euna-container"
                            style={{
                              transform: "none",
                              transformOrigin: "50% 50% 0px",
                            }}
                          >
                            <div
                              onClick={() => {
                                setPlayVideo(false);
                              }}
                              className="framer-jRKFu framer-19ic7g0 framer-v-1iorwjb"
                              data-framer-name="Profile Card 01"
                              data-highlight="true"
                              tabIndex={0}
                              style={{
                                transform: "none",
                                transformOrigin: "50% 50% 0px",
                              }}
                            >
                              <div
                                className="framer-4cxykz"
                                onClick={() => setMoved(true)}
                                data-border="true"
                                data-framer-name="Image"
                                style={
                                  {
                                    "--border-bottom-width": moved
                                      ? "2px"
                                      : "0px",
                                    "--border-left-width": moved
                                      ? "2px"
                                      : "0px",
                                    "--border-right-width": moved
                                      ? "2px"
                                      : "0px",
                                    "--border-top-width": moved ? "2px" : "0px",
                                    "--border-color":
                                      "var(--token-cc72b569-df95-4e7e-8fbb-1b3bdc7da143, rgb(106, 114, 111))",
                                    "--border-style": "solid",
                                    borderRadius: "10px",
                                    transform: "none",
                                    transformOrigin: "50% 50% 0px",
                                    willChange: "auto",
                                  } as React.CSSProperties
                                }
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  style={{
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    inset: "0px",
                                  }}
                                >
                                  <Image
                                    decoding="async"
                                    loading="lazy"
                                    width="524"
                                    height="524"
                                    sizes="120px"
                                    src={JulianaHadad}
                                    alt="Avatar"
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
                            </div>
                          </div>
                        </div>
                        <div
                          className="framer-1kvah3j-container"
                          style={{
                            transform: "none",
                            transformOrigin: "50% 50% 0px",
                          }}
                        >
                          <div
                            className="framer-Atilg framer-r9s3z3 framer-v-r9s3z3"
                            data-framer-name="Variant 1"
                            style={{
                              width: "100%",
                              transform: "none",
                              transformOrigin: "50% 50% 0px",
                            }}
                          >
                            <div
                              className="framer-1cx0oxb"
                              data-framer-component-type="RichTextContainer"
                              style={
                                {
                                  outline: "none",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  flexShrink: 0,
                                  "--extracted-r6o4lv":
                                    "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                                  "--framer-paragraph-spacing": "0px",
                                  transform: "none",
                                  transformOrigin: "50% 50% 0px",
                                } as React.CSSProperties
                              }
                            >
                              <p
                                className="framer-text"
                                style={
                                  {
                                    "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                    "--framer-font-family":
                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                    "--framer-font-weight": "600",
                                    "--framer-line-height": "22px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22)))",
                                    transition: "transform 0.25s ease",
                                    transform: moved
                                      ? "translateX(140px)"
                                      : "translateX(0)",
                                  } as React.CSSProperties
                                }
                              >
                                {!moved ? "Junia Gontijo" : "Juliana Hadad"}
                              </p>
                            </div>
                            <div
                              className="framer-mt5why"
                              data-framer-component-type="RichTextContainer"
                              style={
                                {
                                  outline: "none",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  flexShrink: 0,
                                  "--extracted-r6o4lv":
                                    "var(--token-0ece170e-b6f2-4780-8b57-3a5553a2ea0d, rgb(96, 104, 102))",
                                  "--framer-paragraph-spacing": "0px",
                                  transform: "none",
                                  transformOrigin: "50% 50% 0px",
                                } as React.CSSProperties
                              }
                            >
                              <p
                                className="framer-text w-70"
                                style={
                                  {
                                    "--font-selector":
                                      "R0Y7UG9wcGlucy1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                    "--framer-line-height": "22px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-0ece170e-b6f2-4780-8b57-3a5553a2ea0d, rgb(96, 104, 102)))",
                                    transition: "transform 0.25s ease",
                                    transform: moved
                                      ? "translateX(140px)"
                                      : "translateX(0)",
                                  } as React.CSSProperties
                                }
                              >
                                {!moved
                                  ? "Executive Director of Engineering, Real Estate, Infrastructure, Hospital Albert Einstein"
                                  : "Venture Capitalist @Nameless | Forbes U30"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-i9xj3f-container"
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <div
                        className="framer-p3aAa framer-2gikhw framer-v-2gikhw"
                        data-framer-name="Testimonial Card 02"
                        style={{
                          width: "100%",
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      >
                        {!playVideo ? (
                          <div
                            className="framer-wd5875"
                            style={{
                              borderRadius: "10px",
                              transform: "none",
                              transformOrigin: "50% 50% 0px",
                            }}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                inset: "0px",
                              }}
                            >
                              {!moved ? (
                                <Image
                                  decoding="async"
                                  width="4160"
                                  height="2773"
                                  sizes="calc(min(100vw - 60px, 1200px) * 0.5833)"
                                  src={IonaFeedbackSectionFirst}
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
                              ) : (
                                <Image
                                  decoding="async"
                                  width="3876"
                                  height="2281"
                                  sizes="calc(min(100vw - 60px, 1200px) * 0.5833)"
                                  src={IonaFeedbackSectionSecond}
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
                              )}
                            </div>
                            <div
                              className="framer-1uxq3hc"
                              style={{
                                backgroundColor: "rgba(21, 21, 22, 0.15)",
                                transform: "none",
                                transformOrigin: "50% 50% 0px",
                              }}
                            >
                              <div
                                className="framer-1km9v46"
                                data-framer-name="Play Pulse"
                                style={{
                                  display: moved ? "none" : "block",
                                  transform: "none",
                                  transformOrigin: "50% 50% 0px",
                                }}
                                data-highlight="true"
                                tabIndex={0}
                              >
                                <div
                                  className="framer-1gcndfc"
                                  data-framer-name="Indicator Pulse"
                                  style={{
                                    display: moved ? "none" : "block",
                                    borderRadius: "100%",
                                    transform: "none",
                                    transformOrigin: "50% 50% 0px",
                                  }}
                                ></div>
                                <div
                                  className="framer-1as4rfv"
                                  data-framer-name="Outer Circle"
                                  style={{
                                    display: moved ? "none" : "block",
                                    borderRadius: "100%",
                                    transform: "none",
                                    transformOrigin: "50% 50% 0px",
                                  }}
                                >
                                  <div
                                    data-framer-background-image-wrapper="true"
                                    onClick={() => setPlayVideo(true)}
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      inset: "0px",
                                    }}
                                  >
                                    <Image
                                      decoding="async"
                                      width="120"
                                      height="120"
                                      src={PlayIcon}
                                      alt="play icon"
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
                              </div>
                            </div>
                          </div>
                        ) : (
                          <YoutubeEmbed url="youtube.com/watch?v=GGSVtDeisvg&embeds_referring_euri=https%3A%2F%2Fionaszkurnik.com.br%2F" />
                        )}
                        <div
                          className="framer-13b046i"
                          data-framer-name="Rating and Review"
                          style={{
                            transform: "none",
                            transformOrigin: "50% 50% 0px",
                          }}
                        >
                          <div
                            className="framer-r5nfvj"
                            data-framer-name="Star and Tagline"
                            style={{
                              transform: "none",
                              transformOrigin: "50% 50% 0px",
                            }}
                          >
                            <div
                              className="framer-c4i8m6-container"
                              style={{
                                transform: "none",
                                transformOrigin: "50% 50% 0px",
                              }}
                            >
                              <div
                                className="framer-KVeOf framer-3i7xtm framer-v-3i7xtm"
                                data-framer-name="5 Star"
                                style={{
                                  transform: "none",
                                  transformOrigin: "50% 50% 0px",
                                }}
                              >
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`framer-${i === 0 ? "t3t225" : i === 1 ? "16ijhjj" : i === 2 ? "macytz" : i === 3 ? "11mg8yb" : "1djh2uc"}-container`}
                                    style={{
                                      transform: "none",
                                      transformOrigin: "50% 50% 0px",
                                    }}
                                  >
                                    <div style={{ display: "contents" }}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256"
                                        focusable="false"
                                        color="rgb(222, 211, 64)"
                                        style={{
                                          userSelect: "none",
                                          width: "100%",
                                          height: "100%",
                                          display: "inline-block",
                                          fill: "rgb(222, 211, 64)",
                                          color: "rgb(222, 211, 64)",
                                          flexShrink: 0,
                                        }}
                                      >
                                        <g
                                          color="rgb(222, 211, 64)"
                                          height="fill"
                                        >
                                          <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div
                              className="framer-11rfpun"
                              data-framer-component-type="RichTextContainer"
                              style={
                                {
                                  outline: "none",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  flexShrink: 0,
                                  "--extracted-r6o4lv":
                                    "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                                  "--framer-paragraph-spacing": "0px",
                                  transform: "none",
                                  transformOrigin: "50% 50% 0px",
                                } as React.CSSProperties
                              }
                            >
                              <span
                                className="framer-text"
                                style={
                                  {
                                    "--font-selector": "R0Y7UG9wcGlucy01MDA=",
                                    "--framer-font-family":
                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22)))",
                                    "--framer-text-transform": "uppercase",
                                    transition: "transform 0.25s ease",
                                    transform: moved
                                      ? "translateX(50px)"
                                      : "translateX(0px)",
                                  } as React.CSSProperties
                                }
                              >
                                {!moved ? (
                                  <p>A Revolução no Vale do Silício</p>
                                ) : (
                                  <p className="-translate-x-13">depoimento</p>
                                )}
                              </span>
                            </div>
                          </div>
                          <div
                            className="framer-zs854a"
                            data-framer-name="Line"
                            style={{
                              backgroundColor:
                                "var(--token-c4904cbf-b1ca-4aef-8d43-25ee055a1b3e, rgb(220, 215, 203))",
                              transform: "none",
                              transformOrigin: "50% 50% 0px",
                            }}
                          ></div>
                          <div
                            className="framer-1q8q7fe"
                            data-framer-component-type="RichTextContainer"
                            style={
                              {
                                outline: "none",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                flexShrink: 0,
                                "--extracted-a0htzi":
                                  "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                transformOrigin: "50% 50% 0px",
                              } as React.CSSProperties
                            }
                          >
                            <h3
                              className="framer-text"
                              style={
                                {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "32px",
                                  "--framer-line-height": "46px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22)))",
                                } as React.CSSProperties
                              }
                            >
                              {!moved
                                ? `"A forma como ela contou essa trajetória dela foi uma história que me impactou muito. A história começa com um grande desafio de vida e, a partir daquilo, existe uma reinvenção da forma de ser."`
                                : `" Apostar na Iona foi uma das melhores decisões que já tomei. Conhecê-la foi transformador. Se você tiver a chance de trabalhar com ela, aprender com ela ou simplesmente estar em sua órbita, agarre essa oportunidade."`}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </ScrollReveal>
    </>
  );
}
