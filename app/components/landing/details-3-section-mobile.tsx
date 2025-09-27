import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import ImageWorkshopBanner from "@/app/assets/images/image-workshop-banner.png";

export function Details3SectionMobile() {
  return (
    <ScrollReveal>
      <section className="framer-p2dieh" data-framer-name="Details Section">
        <div
          className="framer-9bdjje"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-8eb8eu" data-framer-name="Content">
            <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk">
              <div className="framer-1xsu27j">
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
                    width="3101"
                    height="2030"
                    className="scale-100"
                    src={ImageWorkshopBanner}
                    alt=""
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "56% 50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="framer-skvjdz"
              data-framer-name="Details and Button"
            >
              <div className="framer-pn4u26" data-framer-name="Details Wrapper">
                <div
                  className="framer-1ruk4j7"
                  data-framer-name="Name and Details"
                >
                  <div
                    className="framer-jlwb8m"
                    data-framer-name="Name and Designation"
                  >
                    <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk">
                      <div
                        className="framer-e3a6hy"
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
                        <h2
                          className="framer-text"
                          style={
                            {
                              ["--font-selector"]: "R0Y7UG9wcGlucy1yZWd1bGFy",
                              ["--framer-font-family"]:
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              ["--framer-font-size"]: "32px",
                              ["--framer-letter-spacing"]: "-0.03em",
                              ["--framer-line-height"]: "135%",
                              ["--framer-text-alignment"]: "left",
                              ["--framer-text-color"]:
                                "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                            } as React.CSSProperties
                          }
                        >
                          A Estrategista de IA para Negócios
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div
                    className="framer-1uhwzx7"
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
                          ["--framer-text-color"]:
                            "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                        } as React.CSSProperties
                      }
                    >
                      Cursos de prompt. Hackathons de IA. Ferramentas novas a
                      cada semana
                    </p>
                  </div>

                  <div
                    className="framer-1hel01l"
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
                          ["--framer-text-color"]:
                            "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                        } as React.CSSProperties
                      }
                    >
                      E, ainda assim, a sensação é de que a transformação não
                      chegou.
                    </p>
                  </div>
                </div>

                <div className="framer-13tmha0">
                  <div className="framer-gz9o25" data-framer-name="line" />
                  <div
                    className="framer-14hk2ul"
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
                          ["--framer-text-color"]:
                            "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                        } as React.CSSProperties
                      }
                    >
                      É porque a IA não se implementa de fora pra dentro. Iona
                      entendeu isso e ajuda a ajustar a cultura para operar com
                      IA no centro: mudando normas culturais, reorganizando
                      fluxos de decisão e formando lideranças AI-first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
