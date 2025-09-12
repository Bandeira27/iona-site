'use client'
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function LandingHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <style jsx>{`
        .desktop-menu {
          display: none !important;
        }
        .mobile-menu {
          display: flex !important;
        }
        
        @media (min-width: 1280px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
      
      <header className="framer-1bdd2xm" data-framer-name="Header">
        <div className="framer-o0ee32-container">
          <nav 
            className="desktop-menu framer-ViMqZ framer-uDghj framer-6Ubzf framer-9qkq52 framer-v-9qkq52 x" 
            data-framer-name="Large Menu" 
            data-hide-scrollbars="true" 
            style={{ 
              backgroundColor: "rgba(0,0,0,0)", 
              maxWidth: "100%", 
              width: "100%", 
              opacity: 1 
            }}
          >
            <div 
              className="framer-9jm6cy" 
              data-framer-name="Logo and Link" 
              style={{ 
                backgroundColor: "rgba(0,0,0,0)", 
                borderRadius: "10px", 
                opacity: 1 
              }}
            >
              <div 
                className="framer-1m4qeh8" 
                data-framer-name="Name" 
                style={{ 
                  backgroundColor: "rgba(0,0,0,0)", 
                  opacity: 1 
                }}
              >
                <Link 
                  className="framer-qrftsy framer-qivr5k" 
                  data-framer-name="Logo and Name" 
                  style={{ 
                    borderRadius: "25px", 
                    opacity: 1 
                  }} 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                >
                  <div 
                    className="framer-1h7zo0a" 
                    data-framer-name="Logo" 
                    style={{ opacity: 1 }}
                  >
                    <div 
                      style={{ 
                        position: "absolute", 
                        borderRadius: "inherit", 
                        top: 0, 
                        right: 0, 
                        bottom: 0, 
                        left: 0 
                      }} 
                      data-framer-background-image-wrapper="true"
                    >
                      <img 
                        decoding="async" 
                        width={163} 
                        height={18} 
                        src="https://framerusercontent.com/images/0FyckVgb0VflkVWjHkjjnSvjjU.svg" 
                        alt="Logo" 
                        style={{ 
                          display: "block", 
                          width: "100%", 
                          height: "100%", 
                          borderRadius: "inherit", 
                          objectPosition: "center", 
                          objectFit: "contain" 
                        }} 
                      />
                    </div>
                  </div>
                </Link>
              </div>
              
              <div 
                className="framer-rvsp47" 
                data-framer-name="Menu Wrapper" 
                style={{ 
                  backgroundColor: "rgba(0,0,0,0)", 
                  opacity: 1 
                }}
              >
                <div 
                  className="framer-jh61ex" 
                  data-border="true" 
                  data-framer-name="Links" 
                  style={{ 
                    "--border-bottom-width": "1px", 
                    "--border-color": "var(--token-69afcf75-d732-4452-b560-66553dee5f68, rgb(217, 218, 212))", 
                    "--border-left-width": "1px", 
                    "--border-right-width": "1px", 
                    "--border-style": "solid", 
                    "--border-top-width": "1px", 
                    backgroundColor: "rgb(243,243,243)", 
                    borderRadius: "25px", 
                    opacity: 1 
                  } as React.CSSProperties}
                >
                  {[
                    { label: "Home", href: "/" },
                    { label: "palestras e workshops", href: "/palestras-e-workshops" },
                    { label: "sobre mim", href: "/sobre-mim" },
                    { label: "contato", href: "/contact" },
                  ].map((link) => (
                    <div 
                      key={link.href} 
                      className="framer-1awa0qp" 
                      data-framer-component-type="RichTextContainer" 
                      data-framer-name={link.label} 
                      onClick={() => router.push(link.href)} 
                      style={{ 
                        outline: "none", 
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "flex-start", 
                        flexShrink: 0, 
                        "--framer-paragraph-spacing": "0px", 
                        transform: "none", 
                        opacity: 1 
                      } as React.CSSProperties}
                    >
                      <p className="framer-text framer-styles-preset-755d1">
                        <a 
                          className="framer-text framer-styles-preset-9gqfxb" 
                          href={link.href} 
                          style={{ 
                            color: mounted && pathname === link.href ? "#151516" : undefined,
                          }}
                        >
                          {link.label}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="framer-1ejd84g-container" style={{ opacity: 1 }}>
              <a 
                className="framer-ot7yz framer-dxjT0 framer-1o6313w framer-v-1o6313w framer-19pik6b" 
                data-framer-name="Button" 
                style={{ 
                  backgroundColor: "var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21,21,22))", 
                  borderRadius: "25px", 
                  opacity: 1 
                }} 
                href="./contact"
              >
                <div 
                  className="framer-7c850x" 
                  style={{ 
                    outline: "none", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "flex-start", 
                    flexShrink: 0, 
                    "--extracted-r6o4lv": "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255,255,255))", 
                    "--framer-paragraph-spacing": "0px", 
                    transform: "none", 
                    opacity: 1 
                  } as React.CSSProperties} 
                  data-framer-component-type="RichTextContainer"
                >
                  <p 
                    className="framer-text framer-styles-preset-1ivuj08" 
                    style={{ 
                      "--framer-text-alignment": "center", 
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255,255,255)))" 
                    } as React.CSSProperties}
                  >
                    Entrar em Contato
                  </p>
                </div>
              </a>
            </div>
          </nav>

          <div className="mobile-menu framer-myqk6f-container">
            <nav 
              className="framer-ViMqZ framer-uDghj framer-6Ubzf framer-9qkq52 framer-v-1v7k6r0" 
              data-framer-name="Tablet Closed" 
              data-hide-scrollbars="true" 
              style={{ 
                backgroundColor: 'rgb(243, 243, 243)', 
                maxWidth: '100%', 
                width: '100%', 
                opacity: 1,
              }}
            >
              <div 
                className="framer-9jm6cy" 
                data-framer-name="Logo and Link" 
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0)', 
                  borderRadius: '10px', 
                  opacity: 1,
                }}
              >
                <div 
                  className="framer-1m4qeh8" 
                  data-framer-name="Name" 
                  style={{ 
                    backgroundColor: 'rgb(243, 243, 243)', 
                    opacity: 1,
                  }}
                >
                  <a 
                    className="framer-qrftsy framer-qivr5k" 
                    data-framer-name="Logo and Name" 
                    href="./" 
                    style={{ 
                      borderRadius: '25px', 
                      opacity: 1,
                    }}
                  >
                    <div 
                      className="framer-1h7zo0a" 
                      data-framer-name="Logo" 
                      style={{ 
                        opacity: 1,
                      }}
                    >
                      <div 
                        data-framer-background-image-wrapper="true" 
                        style={{ 
                          position: 'absolute', 
                          borderRadius: 'inherit', 
                          inset: 0,
                        }}
                      >
                        <img 
                          decoding="async" 
                          width={163} 
                          height={18} 
                          src="https://framerusercontent.com/images/0FyckVgb0VflkVWjHkjjnSvjjU.svg" 
                          alt="Logo" 
                          style={{ 
                            display: 'block', 
                            width: '100%', 
                            height: '100%', 
                            borderRadius: 'inherit', 
                            objectPosition: 'center center', 
                            objectFit: 'contain',
                          }} 
                        />
                      </div>
                    </div>
                  </a>
                  
                  <div 
                    className="framer-v4h3t3" 
                    data-framer-name="Icon" 
                    data-highlight="true" 
                    tabIndex={0} 
                    style={{ 
                      opacity: 1,
                    }}
                  >
                    <div 
                      className="framer-lsbi47" 
                      data-framer-name="Bottom" 
                      style={{ 
                        backgroundColor: 'var(--token-a3c1e9b9-e8ac-4688-91db-1f11e12741f4, rgb(22, 58, 25))', 
                        borderRadius: '10px', 
                        transform: 'none', 
                        opacity: 1,
                      }} 
                    />
                    <div 
                      className="framer-129yrtc" 
                      data-framer-name="Top" 
                      style={{ 
                        backgroundColor: 'var(--token-a3c1e9b9-e8ac-4688-91db-1f11e12741f4, rgb(22, 58, 25))', 
                        borderRadius: '10px', 
                        transform: 'none', 
                        opacity: 1,
                      }} 
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}