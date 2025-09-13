import Image from "next/image";
import IonaAchievements from "@/app/assets/iona-achievements.png";
import { ScrollReveal } from "../scroll-reveal";

interface Achievement {
  year: string;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    year: "1998",
    title: "Psicologia",
    description: "Começou ouvindo — crianças e famílias. A pergunta era simples: o que faz uma vida valer a pena viver?",
  },
  {
    year: "2002",
    title: "Especialização em Terapia sistémica",
    description: "Foi na escuta de famílias e crianças que emergiu a compreensão de que ninguém se transforma sozinho. A formação em Terapia Sistêmica pela UFRJ trouxe uma lente definitiva: somos sistemas em constante interação e o que acontece em um elo reverbera no todo.",
  },
  {
    year: "2009",
    title: "Gestão pela FGV",
    description: "O MBA com distinção acadêmica pela FGV consolidou uma virada. A escuta clínica ganhou musculatura estratégica e o olhar passou a integrar gestão, liderança e cultura como peças do mesmo tabuleiro.",
  },
  {
    year: "2013",
    title: "Stanford",
    description: "Foi estudar como a educação muda culturas. Saiu de lá com uma nova convicção: o futuro se constrói com método.",
  },
  {
    year: "2013–2024",
    title: "Vale do Silício",
    description: "Onze anos no epicentro da inovação. Liderou, criou filhos e aprendeu na prática que o novo precisa de cultura pra durar.",
  },
  {
    year: "2020",
    title: "Fundadora",
    description: "Criou a Education Journey, uma edtech que personaliza o aprendizado com IA. Mas logo entendeu: tecnologia sozinha não transforma. Cultura, sim.",
  },
  {
    year: "Hoje",
    title: "Especialista em IA como cultura",
    description: "Atua com executivos e conselhos que já aprovaram a IA — mas ainda não a integraram. A virada real começa aqui: na forma como se decide, se lidera e se aprende.",
  },
];

export function AchievementSectionMobile() {
  return (
    <section className="framer-sani89" data-framer-name="Achievement Section">
      <div className="framer-1oe5aw3" style={{ transform: "none" }}>
        <div
          data-framer-background-image-wrapper="true"
          style={{ position: "absolute", borderRadius: "inherit", inset: 0 }}
        >
          <Image
            decoding="async"
            loading="lazy"
            width={3240}
            height={3240}
            sizes="100vw"
            src={IonaAchievements}
            alt="Image"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectPosition: "center bottom",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div
        className="framer-qf946z"
        data-framer-name="Container"
        style={{ willChange: "transform", opacity: 1, transform: "none" }}
      >
       <ScrollReveal>
         <div className="framer-1a2l1r7" data-framer-name="Content">
          {achievements.map((a, idx) => (
            <div
              key={idx}
              className={`hidden-1qcvg63 hidden-p0mfc`}
              data-framer-name={`ano ${idx + 1}`}
            >
              <div
                className="framer-uqjwr9"
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
                  style={{
                    "--font-selector": "R0Y7UG9wcGlucy01MDA=",
                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                    "--framer-font-size": "28px",
                    "--framer-font-weight": 500,
                    "--framer-line-height": "100%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                  } as React.CSSProperties}
                >
                  {a.year}
                </p>
              </div>

              <div
                className="framer-1fsm7h1 framer-o8t70e"
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
                  style={{
                    "--font-selector": "R0Y7UG9wcGlucy01MDA=",
                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                    "--framer-font-size": "22px",
                    "--framer-font-weight": 500,
                    "--framer-line-height": "100%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                  } as React.CSSProperties}
                >
                  {a.title}
                </p>
              </div>

              <div
                className="framer-1sfakl7 framer-styles-preset-34zyjt"
                data-framer-component-type="RichTextContainer"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none",
                  "--framer-text-alignment": "center",
                  "--framer-text-color": "rgb(207, 207, 214)",
                } as React.CSSProperties}
              >
                <p className="framer-text">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
       </ScrollReveal>
      </div>
    </section>
  );
}
