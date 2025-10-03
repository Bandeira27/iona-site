import React, { memo } from "react";
import { ScrollReveal } from "../scroll-reveal";
import Image, { StaticImageData } from "next/image";

import IonaLastMnb from "@/app/assets/images/iona-image-mnb.jpeg";
import ImageThing from "@/app/assets/images/image-thing.png";
import ImageBook from "@/app/assets/images/image-book.png";
import ImageCup from "@/app/assets/images/image-cup.png";
import ImageHouse from "@/app/assets/images/image-house.png";

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
      "Um convite à autorreflexão como ato político — especialmente em cargos de liderança e em espaços onde é preciso existir com consciência.",
  },
  {
    id: 2,
    image: ImageBook,
    title: "Fundamento Conceitual",
    description:
      "Conecta psicologia, trajetória e poder pessoal para repensar o papel da identidade na tomada de decisão e em lugares de liderança.",
  },
  {
    id: 3,
    image: ImageCup,
    title: "Reconhecimento Institucional",
    description:
      "Apresentada no Marketing Network Brasil 2024 para CMOs de grandes empresas.",
  },
  {
    id: 4,
    image: ImageHouse,
    title: "Público-Alvo Estratégico",
    description:
      "Executivas, lideranças femininas, eventos de transformação cultural, programas de desenvolvimento de lideranças com foco em subjetividade, propósito e autenticidade.",
  },
];

interface LectureCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const LectureCard = memo(({ image, title, description }: LectureCardProps) => (
  <div className="framer-1udx6ng-container">
    <a
      className="framer-afWiu framer-Aw0u9 framer-KGwWx framer-iswrvd framer-v-iswrvd framer-que2da"
      data-border="true"
      data-framer-name="Why Choose Us Card 01"
      style={
        {
          width: "100%",
          borderRadius: "10px",
          opacity: 1,
          "--border-bottom-width": "1px",
          "--border-left-width": "1px",
          "--border-right-width": "1px",
          "--border-top-width": "1px",
          "--border-style": "solid",
          "--border-color": "rgba(44, 44, 45, 0.12)",
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
            src={image}
            alt={title}
            width={240}
            height={240}
            sizes="60px"
            loading="lazy"
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
            style={{ textAlign: "left", color: "rgb(21, 21, 22)" }}
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
            style={{ color: "rgb(106, 114, 111)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  </div>
));

LectureCard.displayName = "LectureCard";

export default function LectureThree() {
  return (
    <ScrollReveal>
      <section className="framer-1footcr" data-framer-name="Palestra 02">
        <div
          className="framer-4ubn89"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-lzsrou" data-framer-name="Content">
            <div className="framer-1rts46r" data-framer-name="Title and Image">
              <div className="framer-1hn1hz0">
                <div className="framer-jybju">
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      inset: "0px",
                    }}
                  >
                    <Image
                      src={IonaLastMnb}
                      alt="A Liderança de Si"
                      width={1600}
                      height={1299}
                      loading="lazy"
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
              <div className="framer-1q3wc61" data-framer-name="Title Wrapper">
                <div
                  className="framer-x5r4a3"
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
                    style={{ color: "rgb(21, 21, 22)" }}
                  >
                    A Liderança de Si
                  </h2>
                </div>
                <div
                  className="framer-1jmb857"
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
                    style={{ color: "rgb(106, 114, 111)" }}
                  >
                    Desejo, propósito e coragem. Saber como seguir em frente em
                    tempos de incerteza.
                  </p>
                </div>
              </div>
            </div>

            <div className="framer-1i1xgrz" data-framer-name="Card Wrapper">
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
