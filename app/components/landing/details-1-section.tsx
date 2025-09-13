import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import ImageIonaApresentation from '@/app/assets/image-iona-apresentation.png'

export function Details1Section() {
  return (
    <ScrollReveal>
      <section className="framer-1fsg44c" data-framer-name="Details Section">
        <div
          className="framer-150ht39"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-jtn3t6" data-framer-name="Content">
            <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk">
              <div className="framer-1v4doc9">
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
                    width="5196"
                    height="4000"
                    sizes="500px"
                    src={ImageIonaApresentation}
                    alt=""
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
                    <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk">
                      <div
                        className="framer-tchtbw"
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
                          style={{
                            ["--font-selector"]: "R0Y7UG9wcGlucy1yZWd1bGFy",
                            ["--framer-font-family"]:
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            ["--framer-font-size"]: "40px",
                            ["--framer-letter-spacing"]: "-0.03em",
                            ["--framer-line-height"]: "135%",
                            ["--framer-text-alignment"]: "left",
                            ["--framer-text-color"]:
                              "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                          } as React.CSSProperties}
                        >
                          A Catalisadora da Cultura do Futuro
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div
                    className="framer-xl1xux"
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
                      style={{
                        ["--framer-text-color"]:
                          "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                      } as React.CSSProperties}
                    >
                      Em tempos de medo do futuro, quem está preparando o
                      presente?
                    </p>
                  </div>

                  <div
                    className="framer-7ie72f"
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
                      style={{
                        ["--framer-text-color"]:
                          "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                      } as React.CSSProperties}
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
                      style={{
                        ["--framer-text-color"]:
                          "var(--token-65d16cfb-8ae4-4ebd-808d-4722dde25329, rgb(110, 118, 111))",
                      } as React.CSSProperties}
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
