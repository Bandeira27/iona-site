import { ScrollReveal } from "../scroll-reveal";
import IonaFirstImage from "../../assets/iona-image-first.jpg";
import IonaSecondImage from "../../assets/iona-image-second.jpg";
import IaFirt from "../../assets/ia-first-image.png";
import Image from "next/image";

export function AboutExtraMobile() {
  return (
    <ScrollReveal>
      <section className="framer-fe6hqo" data-framer-name="About Section">
        <div
          className="framer-1tcuhnm"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-nstm2b" data-framer-name="Content">
            <div
              className="framer-ex102y !static"
              data-framer-name="Image Wrapper"
            >
              <div className="framer-pu5sjg">
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
                    width={5464}
                    height={8192}
                    sizes="min(100vw - 40px, 1200px)"
                    src={IonaFirstImage}
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

              <div
                className="framer-wagrh7"
                data-framer-name="Image and Counter"
              >
                <div className="framer-15f17il">
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
                      width={4534}
                      height={5374}
                      className="scale-120"
                      sizes="min(100vw - 40px, 1200px)"
                      src={IonaSecondImage}
                      alt="Image"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center -25%",
                        objectFit: "cover",
                        transform: "translateX(2%)"
                      }}
                    />
                  </div>
                  <div className="framer-1lg3r0z"></div>
                </div>

                <div className="framer-6s5jwu" data-framer-name="Counter Card">
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
                      width={1360}
                      height={1133}
                      sizes="min(100vw - 40px, 1200px)"
                      src={IaFirt}
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

            <div className="framer-1jmr7ma" data-framer-name="Text Wrapper">
              <div
                className="framer-9gzx80"
                data-framer-name="About and Button"
              >
                <div className="framer-k2f1zi" data-framer-name="About Text">
                  <div
                    className="framer-jg51w6"
                    data-framer-name="Description Wrapper"
                  >
                    <div
                      className="framer-1b5ah2i"
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
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "rgb(110, 118, 111)",
                          } as React.CSSProperties
                        }
                      >
                        Formada em Psicologia e mestre em Tecnologia e Educação
                        por Stanford, Iona Szkurnik viveu 11 anos no Vale do
                        Silício, onde liderou times, criou filhos e mergulhou na
                        cultura que normaliza o novo todos os dias.
                      </p>
                    </div>

                    <div
                      className="framer-1jr6gb"
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
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "rgb(110, 118, 111)",
                          } as React.CSSProperties
                        }
                      >
                        Hoje, atua com executivos e conselhos no Brasil que
                        precisam transformar a IA em resultado – não só por meio
                        de ferramentas, mas por uma virada cultural real.
                      </p>
                    </div>

                    <div
                      className="framer-1feww8r"
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
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "rgb(110, 118, 111)",
                          } as React.CSSProperties
                        }
                      >
                        Seu trabalho combina escuta, frameworks acionáveis e uma
                        visão rara de quem entende a promessa tecnológica e a
                        realidade humana.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="framer-e2nuov-container">
                  <a
                    className="framer-ot7yz framer-dxjT0 framer-1o6313w framer-v-1hm8c33 framer-19pik6b"
                    data-framer-name="Button Green"
                    href="./sobre-mim"
                    style={{
                      backgroundColor: "rgb(21, 21, 22)",
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
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                          "--framer-paragraph-spacing": "0px",
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
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "rgb(255, 255, 255)",
                          } as React.CSSProperties
                        }
                      >
                        Conheça a trajetória completa
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
