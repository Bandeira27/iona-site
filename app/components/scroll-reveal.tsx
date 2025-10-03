"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return; // Se já está visível, não faz nada

    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          if (delay > 0) {
            timeoutId = setTimeout(() => {
              setVisible(true);
            }, delay);
          } else {
            setVisible(true);
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "300px 0px 300px 0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay, visible]);

  // Detecta scroll rápido como fallback
  useEffect(() => {
    if (visible) return;

    const checkVisibility = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Se o elemento está parcialmente visível
      if (rect.top < windowHeight && rect.bottom > 0) {
        setVisible(true);
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkVisibility, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
