import React from "react";
import { ScrollReveal } from "../scroll-reveal";
import ImageIonaAbout from "@/app/assets/images/image-iona-about.png";
import Image from "next/image";
import ImageIonaApresentationReverse from "@/app/assets/images/image-iona-apresentation-reverse.png";
import ImageFormat from "@/app/assets/images/image-format.png";

export default function AboutSection() {
  return (
    <ScrollReveal>
      <section className="framer-1m5km5u" data-framer-name="About Section">
        <div
          className="framer-1j9r4m4"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-1idpkp8" data-framer-name="Content">
            <div className="framer-1qaytpz" data-framer-name="Image Wrapper">
              <div className="framer-kc2w0b !overflow-hidden">
                <div
                  className="overflow-hidden"
                  data-framer-background-image-wrapper="true"
                  style={{
                    position: "absolute",
                    borderRadius: "inherit",
                    inset: "0px",
                  }}
                >
                  <Image
                    decoding="async"
                    width={1600}
                    height={1229}
                    src={ImageIonaAbout}
                    alt="Image"
                    className="scale-120"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "30.5% center",
                      objectFit: "cover",
                      transform: "translateY(-8%)",
                    }}
                  />
                </div>
              </div>

              <div
                className="framer-1twje2n"
                data-framer-name="Image and Counter"
              >
                <div className="framer-17m5exw">
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
                      width={1600}
                      height={1229}
                      src={ImageIonaApresentationReverse}
                      alt="Image"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "42.5% center",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className="framer-jciov4" data-framer-name="Counter Card">
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
                      width={1200}
                      height={1000}
                      src={ImageFormat}
                      alt=""
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

            <div className="framer-tvvzm0" data-framer-name="Text Wrapper">
              <div
                className="framer-stas5c"
                data-framer-name="About and Button"
              >
                <div className="framer-ow6q5m" data-framer-name="About Text">
                  <div
                    className="framer-1wxnb0h"
                    data-framer-name="Description Wrapper"
                  >
                    <div
                      className="framer-ut9hkx"
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
                      <h5
                        className="framer-text"
                        style={
                          {
                            ["--font-selector"]: "R0Y7UG9wcGlucy01MDA=",
                            ["--framer-font-family"]:
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            ["--framer-font-size"]: "24px",
                            ["--framer-font-weight"]: "500",
                            ["--framer-line-height"]: "100%",
                            ["--framer-text-alignment"]: "left",
                            ["--framer-text-color"]:
                              "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                          } as React.CSSProperties
                        }
                      >
                        Palestras para eventos e convenções
                      </h5>
                    </div>

                    <div
                      className="framer-1vkixob"
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
                      <p
                        className="framer-text"
                        style={
                          {
                            ["--font-selector"]: "R0Y7UG9wcGlucy1pdGFsaWM=",
                            ["--framer-font-family"]:
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            ["--framer-font-size"]: "18px",
                            ["--framer-font-style"]: "italic",
                            ["--framer-line-height"]: "28px",
                            ["--framer-text-alignment"]: "left",
                            ["--framer-text-color"]:
                              "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                          } as React.CSSProperties
                        }
                      >
                        Quando o assunto é IA, o que sua audiência realmente
                        precisa ouvir?
                      </p>
                    </div>

                    <div
                      className="framer-1m47vjm"
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
                      <p
                        className="framer-text"
                        style={
                          {
                            ["--font-selector"]: "R0Y7UG9wcGlucy1yZWd1bGFy",
                            ["--framer-font-family"]:
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            ["--framer-font-size"]: "18px",
                            ["--framer-line-height"]: "28px",
                            ["--framer-text-alignment"]: "left",
                            ["--framer-text-color"]:
                              "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                          } as React.CSSProperties
                        }
                      >
                        Iona desmistifica a imagem de “tecnologia do futuro” e
                        mostra como IA exige ação agora: de mentalidade,
                        processos e liderança.
                      </p>
                    </div>

                    <div
                      className="framer-plq4gl"
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
                      <p
                        className="framer-text"
                        style={
                          {
                            ["--font-selector"]: "R0Y7UG9wcGlucy1yZWd1bGFy",
                            ["--framer-font-family"]:
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            ["--framer-font-size"]: "18px",
                            ["--framer-line-height"]: "28px",
                            ["--framer-text-alignment"]: "left",
                            ["--framer-text-color"]:
                              "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                          } as React.CSSProperties
                        }
                      >
                        Ideal para fóruns de inovação, summits, encontros com
                        líderes e times, e mentoria.
                      </p>
                    </div>
                  </div>

                  <div
                    className="framer-i6hpjo"
                    data-framer-name="Mission &amp; Vision"
                  >
                    <div className="framer-oni7dn" data-framer-name="Mission">
                      <div
                        className="framer-192mfg4"
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
                        <h5
                          className="framer-text"
                          style={
                            {
                              ["--font-selector"]: "R0Y7UG9wcGlucy01MDA=",
                              ["--framer-font-family"]:
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              ["--framer-font-size"]: "24px",
                              ["--framer-font-weight"]: "500",
                              ["--framer-line-height"]: "135%",
                              ["--framer-text-alignment"]: "left",
                              ["--framer-text-color"]:
                                "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                            } as React.CSSProperties
                          }
                        >
                          Workshops para quem precisa
                        </h5>
                      </div>

                      <div
                        className="framer-1un70ys"
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
                        <p
                          className="framer-text"
                          style={
                            {
                              ["--font-selector"]: "R0Y7UG9wcGlucy1pdGFsaWM=",
                              ["--framer-font-family"]:
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              ["--framer-font-size"]: "18px",
                              ["--framer-font-style"]: "italic",
                              ["--framer-line-height"]: "28px",
                              ["--framer-text-alignment"]: "left",
                              ["--framer-text-color"]:
                                "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                            } as React.CSSProperties
                          }
                        >
                          IA aprovada. Budget definido. Time formado. E a
                          transformação… não acontece.
                        </p>
                      </div>

                      <div
                        className="framer-1cgc8ai"
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
                        <p
                          className="framer-text"
                          style={
                            {
                              ["--font-selector"]: "R0Y7UG9wcGlucy1yZWd1bGFy",
                              ["--framer-font-family"]:
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              ["--framer-font-size"]: "18px",
                              ["--framer-line-height"]: "28px",
                              ["--framer-text-alignment"]: "left",
                              ["--framer-text-color"]:
                                "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                            } as React.CSSProperties
                          }
                        >
                          Esse é o momento ideal para colocar o C-level à mesa e
                          reorganizar como a empresa pensa, decide, prioriza e
                          implementa.
                        </p>
                      </div>
                    </div>

                    <div className="framer-11ndya0" data-framer-name="Vision">
                      <div
                        className="framer-l9r3xy"
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
                        <h5
                          className="framer-text"
                          style={
                            {
                              ["--font-selector"]: "R0Y7UG9wcGlucy01MDA=",
                              ["--framer-font-family"]:
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              ["--framer-font-size"]: "24px",
                              ["--framer-font-weight"]: "500",
                              ["--framer-line-height"]: "100%",
                              ["--framer-text-alignment"]: "left",
                              ["--framer-text-color"]:
                                "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                            } as React.CSSProperties
                          }
                        >
                          Conversas para conselhos e investidores
                        </h5>
                      </div>

                      <div
                        className="framer-b1tpce"
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
                        <p
                          className="framer-text"
                          style={
                            {
                              ["--font-selector"]: "R0Y7UG9wcGlucy1pdGFsaWM=",
                              ["--framer-font-family"]:
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              ["--framer-font-size"]: "18px",
                              ["--framer-font-style"]: "italic",
                              ["--framer-line-height"]: "28px",
                              ["--framer-text-alignment"]: "left",
                              ["--framer-text-color"]:
                                "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                            } as React.CSSProperties
                          }
                        >
                          Os frameworks estão velhos. Mas as perguntas são
                          novas.
                        </p>
                      </div>

                      <div
                        className="framer-9duplc"
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
                        <p
                          className="framer-text"
                          style={
                            {
                              ["--font-selector"]: "R0Y7UG9wcGlucy1yZWd1bGFy",
                              ["--framer-font-family"]:
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              ["--framer-font-size"]: "18px",
                              ["--framer-line-height"]: "28px",
                              ["--framer-text-alignment"]: "left",
                              ["--framer-text-color"]:
                                "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                            } as React.CSSProperties
                          }
                        >
                          Como IA impacta governança, valuation e cultura? O que
                          muda no ciclo de decisões e no apetite a risco?
                        </p>
                      </div>

                      <div
                        className="framer-1mypzvb"
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
                        <p
                          className="framer-text"
                          style={
                            {
                              ["--font-selector"]: "R0Y7UG9wcGlucy1yZWd1bGFy",
                              ["--framer-font-family"]:
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              ["--framer-font-size"]: "18px",
                              ["--framer-line-height"]: "28px",
                              ["--framer-text-alignment"]: "left",
                              ["--framer-text-color"]:
                                "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                            } as React.CSSProperties
                          }
                        >
                          Essas conversas trazem a visão de quem viveu o Vale do
                          Silício — traduzida para o que realmente importa:
                          manter o negócio relevante num jogo que muda
                          constantemente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="framer-ge05xb-container">
                  <a
                    className="framer-ot7yz framer-dxjT0 framer-1o6313w framer-v-1hm8c33 framer-19pik6b"
                    data-framer-name="Button Green"
                    href="./contact"
                    style={{
                      backgroundColor:
                        "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                      borderRadius: "25px",
                      opacity: 1,
                    }}
                  >
                    <div
                      className="framer-7c850x"
                      data-framer-component-type="RichTextContainer"
                      style={
                        {
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: 0,
                          ["--extracted-r6o4lv"]:
                            "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                          ["--framer-paragraph-spacing"]: "0px",
                          transform: "none",
                          opacity: 1,
                        } as React.CSSProperties
                      }
                    >
                      <p
                        className="framer-text framer-styles-preset-1ivuj08"
                        data-styles-preset="W_sgoDppc"
                        style={
                          {
                            ["--framer-text-alignment"]: "center",
                            ["--framer-text-color"]:
                              "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                          } as React.CSSProperties
                        }
                      >
                        Fale com iona
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
