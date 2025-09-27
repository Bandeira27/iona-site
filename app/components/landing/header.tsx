"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import IonaLogoNameDark from "@/app/assets/svg/iona-logo-name-dark.svg";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/palestras-e-workshops", label: "palestras e workshops" },
  { href: "/sobre-mim", label: "sobre mim" },
  { href: "/contact", label: "contato" },
];

export function LandingHeader() {
  const pathname = usePathname();

  return (
    <header className="framer-1bdd2xm" data-framer-name="Header">
      <div className="framer-o0ee32-container">
        <nav
          className="framer-ViMqZ framer-uDghj framer-6Ubzf framer-9qkq52 framer-v-9qkq52"
          data-framer-name="Large Menu"
          data-hide-scrollbars="true"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            maxWidth: "100%",
            width: "100%",
            opacity: 1,
            willChange: "auto",
          }}
        >
          <div
            className="framer-9jm6cy"
            data-framer-name="Logo and Link"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderRadius: 10,
              opacity: 1,
              willChange: "auto",
            }}
          >
            <div
              className="framer-1m4qeh8"
              data-framer-name="Name"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                opacity: 1,
                willChange: "auto",
              }}
            >
              <Link
                className="framer-qrftsy framer-qivr5k"
                data-framer-name="Logo and Name"
                href="/"
                style={{ borderRadius: 25, opacity: 1 }}
              >
                <div
                  className="framer-1h7zo0a"
                  data-framer-name="Logo"
                  style={{ opacity: 1 }}
                >
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
                      width={163}
                      height={18}
                      src={IonaLogoNameDark}
                      alt="Logo"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center center",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div
              className="framer-rvsp47"
              data-framer-name="Menu Wrapper"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)", opacity: 1 }}
            >
              <div
                className="framer-jh61ex"
                data-border="true"
                data-framer-name="Links"
                style={
                  {
                    "--border-bottom-width": "1px",
                    "--border-color":
                      "var(--token-69afcf75-d732-4452-b560-66553dee5f68, rgb(217, 218, 212))",
                    "--border-left-width": "1px",
                    "--border-right-width": "1px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    backgroundColor: "rgb(243, 243, 243)",
                    borderRadius: 25,
                    opacity: 1,
                  } as React.CSSProperties
                }
              >
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <div
                      key={idx}
                      className="framer-1awa0qp"
                      data-framer-name={link.label}
                      data-framer-component-type="RichTextContainer"
                      style={
                        {
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: 0,
                          transform: "none",
                          opacity: 1,
                          "--framer-paragraph-spacing": "0px",
                        } as React.CSSProperties
                      }
                    >
                      <p
                        className="framer-text framer-styles-preset-755d1"
                        data-styles-preset="cLS_AGjef"
                      >
                        <a
                          className="framer-text framer-styles-preset-9gqfxb"
                          data-styles-preset="ss_nrsM7J"
                          href={link.href}
                          style={{ color: isActive ? "black" : "inherit" }}
                        >
                          {link.label}
                        </a>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="framer-1ejd84g-container" style={{ opacity: 1 }}>
            <a
              className="framer-ot7yz framer-dxjT0 framer-1o6313w framer-v-1o6313w framer-19pik6b"
              data-framer-name="Button"
              href="./contact"
              style={{
                backgroundColor:
                  "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22))",
                borderRadius: 25,
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
                    "--extracted-r6o4lv":
                      "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
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
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                    } as React.CSSProperties
                  }
                >
                  Entrar em Contato
                </p>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
