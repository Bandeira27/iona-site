import React, { memo } from "react";
import { ScrollReveal } from "../scroll-reveal";
import Image, { StaticImageData } from "next/image";
import ImageMarqueeSecond from "@/app/assets/images/image-marquee-second.avif";
import ImageThing from "@/app/assets/images/image-thing.avif";
import ImageBook from "@/app/assets/images/image-book.avif";
import ImageCup from "@/app/assets/images/image-cup.avif";
import ImageHouse from "@/app/assets/images/image-house.avif";

interface CardData {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

const CARDS_DATA: CardData[] = [
  {
    id: 1,
    image: ImageThing,
    title: "Eixo Temático",
    description:
      "Cultura da inovação, velocidade de decisão e mentalidade do Vale.",
  },
  {
    id: 2,
    image: ImageBook,
    title: "Fundamento Conceitual",
    description:
      "Contrasta práticas brasileiras com códigos culturais do ecossistema do Vale.",
  },
  {
    id: 3,
    image: ImageCup,
    title: "Reconhecimento Institucional",
    description:
      "Escolhida por StartSe, Google, Hospital A. Einstein, BTG Pactual, Ambev, entre outros.",
  },
  {
    id: 4,
    image: ImageHouse,
    title: "Público-Alvo Estratégico",
    description:
      "Fóruns de inovação, tech summits e encontros com lideranças empresariais.",
  },
];

interface LectureCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const LectureCard = memo(({ image, title, description }: LectureCardProps) => (
  <div className="framer-1gzmi4b-container">
    <div
      className="framer-afWiu framer-Aw0u9 framer-KGwWx framer-iswrvd framer-v-iswrvd framer-que2da"
      data-border="true"
      data-framer-name="Why Choose Us Card 01"
      style={{
        border: "1px solid rgba(44, 44, 45, 0.12)",
        width: "100%",
        borderRadius: "10px",
        opacity: 1,
      }}
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
            src={image}
            alt={title}
            width={240}
            height={240}
            loading="lazy"
            quality={70}
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
          style={{
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            flexShrink: 0,
            transform: "none",
            opacity: 1,
          }}
        >
          <h5
            className="framer-text framer-styles-preset-nqnhcn"
            data-styles-preset="ZQFNhUXsq"
            style={{
              textAlign: "left",
              color: "rgb(21, 21, 22)",
            }}
          >
            {title}
          </h5>
        </div>

        <div
          className="framer-s18yz4"
          data-framer-component-type="RichTextContainer"
          style={{
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            flexShrink: 0,
            transform: "none",
            opacity: 1,
          }}
        >
          <p
            className="framer-text framer-styles-preset-34zyjt"
            data-styles-preset="jIY0P7P2R"
            style={{
              color: "rgb(106, 114, 111)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
));

LectureCard.displayName = "LectureCard";

export default function LectureOne() {
  return (
    <ScrollReveal>
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
                      src={ImageMarqueeSecond}
                      alt="A Revolução do Vale do Silício"
                      width={1600}
                      height={1299}
                      loading="lazy"
                      quality={85}
                      placeholder="blur"
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
                    style={{
                      color: "rgb(21, 21, 22)",
                    }}
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
                    style={{
                      color: "rgb(106, 114, 111)",
                    }}
                  >
                    O que aprendi em uma década no maior ecossistema de inovação
                    do mundo — e por que o Brasil precisa escutar isso agora.
                  </p>
                </div>
              </div>
            </div>

            <div className="framer-125149r" data-framer-name="Card Wrapper">
              {CARDS_DATA.map((card) => (
                <LectureCard
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
