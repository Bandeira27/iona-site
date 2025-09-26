import ImageWorkshopBanner from "@/app/assets/images/image-workshop-banner.png";
import Image from "next/image";

export function BannerSectionMobile() {
  return (
    <section className="framer-1teemmu" data-framer-name="Banner Section">
      <div
        className="framer-1j3kn4h !overflow-hidden"
        data-framer-name="Container"
      >
        <div className="framer-ghuv6h" data-framer-name="Content">
          <div
            className="overflow-hidden"
            data-framer-background-image-wrapper="true"
            style={{
              position: "absolute",
              borderRadius: "inherit",
              inset: 0,
            }}
          >
            <Image
              decoding="async"
              width="3118"
              height="1551"
              className="scale-132"
              src={ImageWorkshopBanner}
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "54% bottom",
                objectFit: "cover",
                transform: "translateY(12%)",
              }}
            />
          </div>

          <div className="framer-eeaog6" data-framer-name="Title Wrapper">
            <div
              className="framer-132kvcv"
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
                    ["--font-selector"]: "R0Y7UG9wcGlucy0zMDA=",
                    ["--framer-font-family"]:
                      '"Poppins", "Poppins Placeholder", sans-serif',
                    ["--framer-font-size"]: "24px",
                    ["--framer-font-weight"]: 300,
                    ["--framer-letter-spacing"]: "-0.03em",
                    ["--framer-line-height"]: "115%",
                    ["--framer-text-alignment"]: "center",
                    ["--framer-text-color"]:
                      "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                  } as React.CSSProperties
                }
              >
                Workshops e Palestras
              </h1>
            </div>
          </div>
        </div>

        <div className="framer-ystw4b" data-framer-name="Text">
          <div
            className="framer-1xfer0"
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
                  ["--font-selector"]: "R0Y7UG9wcGlucy1yZWd1bGFy",
                  ["--framer-font-family"]:
                    '"Poppins", "Poppins Placeholder", sans-serif',
                  ["--framer-font-size"]: "20px",
                  ["--framer-line-height"]: "150%",
                  ["--framer-text-color"]:
                    "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                } as React.CSSProperties
              }
            >
              Muito além do conteúdo. Um
              <br className="framer-text" />
              ponto de virada.
            </h5>
          </div>

          <div
            className="framer-efy1xl"
            data-framer-name="White shark toadfish cutthroat trout dusky grouper rocket danio bass queen parrotfish North American."
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
              className="framer-text framer-styles-preset-notrjj"
              data-styles-preset="n2QDXf05m"
              style={
                {
                  ["--framer-text-alignment"]: "left",
                  ["--framer-text-color"]: "rgb(195, 195, 204)",
                } as React.CSSProperties
              }
            >
              As provocações da Iona não ficam no palco. Cada entrega é pensada
              para criar impacto imediato e abrir caminhos de médio e longo
              prazo.
            </p>
          </div>

          <div
            className="framer-tzppg7"
            data-framer-name="White shark toadfish cutthroat trout dusky grouper rocket danio bass queen parrotfish North American."
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
              className="framer-text framer-styles-preset-notrjj"
              data-styles-preset="n2QDXf05m"
              style={
                {
                  ["--framer-text-alignment"]: "left",
                  ["--framer-text-color"]: "rgb(195, 195, 204)",
                } as React.CSSProperties
              }
            >
              O formato muda conforme o desafio, mas a essência é a mesma:
              clareza narrativa, frameworks aplicáveis e ajuste de cultura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
