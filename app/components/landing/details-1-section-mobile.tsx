import ImageIonaApresentation from "@/app/assets/images/image-iona-apresentation.png";
import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";

export function Details1SectionMobile() {
  return (
    <ScrollReveal>
      <section className="framer-1fsg44c" data-framer-name="Details Section">
        <div
          className="framer-150ht39"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-jtn3t6" data-framer-name="Content">
            <div className="ssr-variant hidden-72rtr7 hidden-gmy0uk">
              <div className="framer-1v4doc9">
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
                    loading="lazy"
                    width={5196}
                    height={4000}
                    sizes="min(100vw - 40px, 1200px)"
                    src={ImageIonaApresentation}
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

            <div
              className="framer-cwv9nj"
              data-framer-name="Details and Button"
            >
              <div
                className="framer-1551dhi"
                data-framer-name="Details Wrapper"
              >
                <div
                  className="framer-xmdt4w"
                  data-framer-name="Name and Details"
                >
                  <div
                    className="framer-1qz7meh"
                    data-framer-name="Name and Designation"
                  >
                    <div className="ssr-variant hidden-72rtr7 hidden-gmy0uk">
                      <div
                        className="framer-tchtbw"
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
                        <h2
                          className="framer-text"
                          style={
                            {
                              "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "32px",
                              "--framer-letter-spacing": "-0.03em",
                              "--framer-line-height": "42px",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                            } as React.CSSProperties
                          }
                        >
                          A Catalisadora da Cultura do Futuro
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div
                    className="framer-xl1xux"
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
                      className="framer-text framer-styles-preset-34zyjt"
                      data-styles-preset="jIY0P7P2R"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                        } as React.CSSProperties
                      }
                    >
                      Em tempos de medo do futuro, quem está preparando o
                      presente?
                    </p>
                  </div>

                  <div
                    className="framer-7ie72f"
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
                      className="framer-text framer-styles-preset-34zyjt"
                      data-styles-preset="jIY0P7P2R"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                        } as React.CSSProperties
                      }
                    >
                      A inteligência artificial acelerou o tempo, mas a maioria
                      das empresas ainda tenta operar com os códigos do passado.
                    </p>
                  </div>
                </div>

                <div className="framer-kpe8k">
                  <div className="framer-2acikh" data-framer-name="line" />
                  <div
                    className="framer-37gkhp"
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
                      className="framer-text framer-styles-preset-34zyjt"
                      data-styles-preset="jIY0P7P2R"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                        } as React.CSSProperties
                      }
                    >
                      Enquanto muitos falam sobre o que vem por aí, Iona atua no
                      agora: acelerando a transição entre a disrupção
                      tecnológica e a maturidade cultural necessária para
                      enfrentá-la.
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
