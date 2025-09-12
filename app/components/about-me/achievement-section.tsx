'use client'

import React, { useMemo, useEffect, useRef } from 'react';
import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';

const AchievementSection = () => {
  const scrollRef = useRef(null);

  const achievements = useMemo(() => [
    { year: "1998", title: "Psicologia", description: "Começou com a escuta. A pergunta era simples: o que faz uma vida valer a pena viver?" },
    { year: "2002", title: "Especialização em Terapia sistémica", description: "Foi na escuta de famílias e crianças que emergiu a compreensão de que ninguém se transforma sozinho. A formação em Terapia Sistêmica pela UFRJ trouxe uma lente definitiva: somos sistemas em constante interação e o que acontece em um elo reverbera no todo.", height: 272 },
    { year: "2009", title: "Gestão pela FGV", description: "O MBA com distinção acadêmica pela FGV consolidou uma virada. A escuta clínica ganhou musculatura estratégica e o olhar passou a integrar gestão, liderança e cultura como peças do mesmo tabuleiro." },
    { year: "2013", title: "Stanford", description: "Foi estudar como a educação e tecnologia muda vidas. Saiu de lá com uma nova convicção: o futuro se constrói com inovação, criatividade e método." },
    { year: "2013–2024", title: "Vale do Silício", description: "Onze anos no epicentro da inovação. Liderou iniciativas, projetos e times. Criou seus filhos e aprendeu na prática que o novo precisa de cultura pra durar." },
    { year: "2020", title: "Fundadora", description: "Criou a Education Journey, uma edtech que hiperpersonaliza o aprendizado com IA. E logo entendeu: tecnologia sozinha não transforma. Cultura, sim." },
    { year: "Hoje", title: "Foca em IA como cultura", description: "Trabalho com empresas que querem os benefícios da Inteligência Artificial, mas ainda não sabem como agir. É aí que a transformação trava. É aí que eu entro." }
  ], []);

  // Duplica a lista para efeito de scroll contínuo
  const loopedAchievements = [...achievements, ...achievements];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let currentTranslateY = 0;
    const speed = 1;

    // Calcula altura total da primeira metade
    const totalHeight = achievements.reduce((sum, a) => sum + (a.height || 188), 0) + (achievements.length - 1) * 100;

    const animate = () => {
      currentTranslateY -= speed;

      // Quando passar a primeira metade da lista, volta para 0
      if (Math.abs(currentTranslateY) >= totalHeight) {
        currentTranslateY = currentTranslateY + totalHeight;
      }

      scrollElement.style.transform = `translateY(${currentTranslateY}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [achievements]);

  const AchievementCard = ({ year, title, description, height = 188 }) => (
    <li style={{ width: "508px", height: `${height}px` }}>
      <div className="framer-card-container" style={{ width: "508px", height: `${height}px`, flexShrink: 0 }}>
        <div className="framer-RrTeE framer-1quxhlx framer-v-1quxhlx" style={{ width: "100%", opacity: 1 }}>
          <div className="framer-1crcx3f" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none", opacity: 1 }}>
            <h2 className="framer-text" style={titleStyle}>{year}</h2>
          </div>
          <div className="framer-4p62be" style={{ opacity: 1 }}>
            <div className="framer-127yz6w" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none", opacity: 1 }}>
              <h5 className="framer-text" style={subtitleStyle}>{title}</h5>
            </div>
            <div className="framer-1icradu" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none", opacity: 1 }}>
              <p className="framer-text" style={descriptionStyle}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <section className="framer-sani89" data-framer-name="Achievement Section">
      <div className="ssr-variant hidden-xme965 hidden-p0mfc">
        <div className="framer-1oe5aw3" style={{ transform: "translateY(-50%)" }}>
          <div data-framer-background-image-wrapper="true" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" }}>
         <Image
  src="https://framerusercontent.com/images/vGP2zN6QN2xO3iJrtmUCtXAdZ1Y.png"
  alt="Image"
  width={3240} // número, não string
  height={3240}
  sizes="650px"
  style={{
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: "center bottom",
    objectFit: "cover",
  }}
  priority={false} // lazy-loading padrão
/>

          </div>
        </div>
      </div>
      <div className="framer-qf946z" data-framer-name="Container" style={{ willChange: "transform", opacity: 1, transform: "none" }}>
        <div className="framer-1a2l1r7" data-framer-name="Content">
          <div className="framer-1qdesfq-container hidden-xme965">
            <section style={scrollSectionStyle}>
            <ScrollReveal>
                  <ul ref={scrollRef} style={scrollListStyle}>
                {loopedAchievements.map((achievement, index) => (
                  <AchievementCard
                    key={`main-${index}`}
                    year={achievement.year}
                    title={achievement.title}
                    description={achievement.description}
                    height={achievement.height}
                  />
                ))}
              </ul>
            </ScrollReveal>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

const titleStyle = { fontFamily: '"Poppins", sans-serif', fontSize: "48px", letterSpacing: "-0.03em", lineHeight: "58px", textAlign: "center", color: "#fff", margin: 0 };
const subtitleStyle = { fontFamily: '"Poppins", sans-serif', fontSize: "24px", fontWeight: 500, lineHeight: "100%", textAlign: "center", color: "#fff", margin: 0 };
const descriptionStyle = { fontFamily: '"Poppins", sans-serif', lineHeight: "28px", textAlign: "center", color: "#cfcfd6", margin: 0 };

const scrollSectionStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  placeItems: "center",
  margin: "0px",
  padding: "10px",
  listStyleType: "none",
  opacity: 1,
  maskImage: "linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 20%, rgb(0,0,0) 80%, rgba(0,0,0,0) 100%)",
  overflow: "hidden"
};

const scrollListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "100px",
  margin: 0,
  padding: 0,
  listStyleType: "none",
  position: "relative",
  willChange: "transform",
};

export default AchievementSection;
