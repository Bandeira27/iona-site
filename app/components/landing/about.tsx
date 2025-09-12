import { ScrollReveal } from "../scroll-reveal";

export function AboutSection() {
  return (
    <section className="framer-1ww69am" data-framer-name="About Section">
      <div 
        className="framer-wyhq45" 
        data-framer-name="Container" 
        style={{
          willChange: "transform",
          opacity: 1,
          transform: "none"
        }}
      >
        <div className="framer-1ckjsyw" data-framer-name="Content">
          <div className="framer-mt7pfi" data-framer-name="Top Content">
            <div className="framer-1i6rpn5" data-framer-name="Title Wrapper">
              <div 
                className="framer-vlxgwx" 
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none"
                }} 
                data-framer-component-type="RichTextContainer"
              >
             <ScrollReveal delay={500}>
                 <h2 
                  className="framer-text framer-styles-preset-14xqye4" 
                  data-styles-preset="n6MKWMgGa" 
                  style={{
                    "--framer-text-color": "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(0, 0, 0))"
                  } as React.CSSProperties}
                >
                  Entre gente e algoritmos, eu escolhi os dois
                </h2>
             </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}