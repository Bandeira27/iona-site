import Image, { StaticImageData } from "next/image";
import ImageMarqueeSecond from "@/app/assets/images/image-marquee-second.png";
import ImageThing from "@/app/assets/images/image-thing.png";
import ImageBook from "@/app/assets/images/image-book.png";
import ImageCup from "@/app/assets/images/image-cup.png";
import ImageHouse from "@/app/assets/images/image-house.png";

type CardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  href?: string;
};

function LectureCard({ image, title, description, href = "./" }: CardProps) {
  return (
    <a
      className="framer-afWiu framer-Aw0u9 framer-KGwWx framer-iswrvd framer-v-ucoal0 framer-que2da"
      data-border="true"
      data-framer-name="Variant 3"
      href={href}
      style={
        {
          "--border-bottom-width": "1px",
          "--border-color": "rgba(44, 44, 45, 0.12)",
          "--border-left-width": "1px",
          "--border-right-width": "1px",
          "--border-style": "solid",
          "--border-top-width": "1px",
          width: "100%",
          borderRadius: "10px",
          opacity: 1,
        } as React.CSSProperties
      }
    >
      <div className="framer-1ewonq7" style={{ opacity: 1 }}>
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
            width={240}
            height={240}
            sizes="40px"
            src={image}
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
      <div className="framer-1evl0dt" style={{ opacity: 1 }}>
        <div
          className="framer-1pdfg4f"
          data-framer-component-type="RichTextContainer"
          style={
            {
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
              "--extracted-1lwpl3i":
                "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
              "--framer-paragraph-spacing": "0px",
              transform: "none",
              opacity: 1,
            } as React.CSSProperties
          }
        >
          <h5
            className="framer-text framer-styles-preset-nqnhcn"
            data-styles-preset="ZQFNhUXsq"
            style={
              {
                "--framer-text-alignment": "left",
                "--framer-text-color":
                  "var(--extracted-1lwpl3i, rgb(21, 21, 22))",
              } as React.CSSProperties
            }
          >
            {title}
          </h5>
        </div>
        <div
          className="framer-s18yz4"
          data-framer-component-type="RichTextContainer"
          style={
            {
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
              "--extracted-r6o4lv":
                "var(--token-cc72b569-df95-4e7e-8fbb-1b3bdc7da143, rgb(106, 114, 111))",
              "--framer-paragraph-spacing": "0px",
              transform: "none",
              opacity: 1,
            } as React.CSSProperties
          }
        >
          <p
            className="framer-text framer-styles-preset-34zyjt"
            data-styles-preset="jIY0P7P2R"
            style={
              {
                "--framer-text-color":
                  "var(--extracted-r6o4lv, rgb(106, 114, 111))",
              } as React.CSSProperties
            }
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export function LectureOneMobile() {
  return (
    <section className="framer-paifu5" data-framer-name="Palestra 01">
      <div
        className="framer-1siof1s"
        data-framer-name="Container"
        style={{ willChange: "transform", opacity: 1, transform: "none" }}
      >
        <div className="framer-1l9xh76" data-framer-name="Content">
          <div className="framer-183y5ch" data-framer-name="Title and Image">
            <div className="framer-3elidk">
              <div className="framer-1dh684g">
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
                    width={1600}
                    height={1229}
                    src={ImageMarqueeSecond}
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
            </div>
            <div className="framer-oi0jo0" data-framer-name="Title Wrapper">
              <div
                className="framer-1pylj99"
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
                  className="framer-text framer-styles-preset-14xqye4"
                  data-styles-preset="n6MKWMgGa"
                  style={
                    {
                      "--framer-text-color":
                        "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                    } as React.CSSProperties
                  }
                >
                  A Revolução do Vale do Silício
                </h2>
              </div>
              <div
                className="framer-1qgzuao"
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
                        "var(--token-cc72b569-df95-4e7e-8fbb-1b3bdc7da143, rgb(106, 114, 111))",
                    } as React.CSSProperties
                  }
                >
                  O que aprendi em uma década no maior ecossistema de inovação
                  do mundo — e por que o Brasil precisa escutar isso agora.
                </p>
              </div>
            </div>
          </div>

          <div className="framer-125149r" data-framer-name="Card Wrapper">
            <LectureCard
              image={ImageThing}
              title="Eixo Temático"
              description="Cultura da inovação, velocidade de decisão e mentalidade do Vale."
            />
            <LectureCard
              image={ImageBook}
              title="Fundamento Conceitual"
              description="Contrasta práticas brasileiras com códigos cultural do ecossistema do Vale."
            />
            <LectureCard
              image={ImageCup}
              title="Reconhecimento Institucional"
              description="Escolhida por StartSe, Google, Hospital A. Einstein, BTG Pactual, Ambev, entre outros."
            />
            <LectureCard
              image={ImageHouse}
              title="Público-Alvo Estratégico"
              description="Fóruns de inovação, tech summits e encontros com lideranças empresariais."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
