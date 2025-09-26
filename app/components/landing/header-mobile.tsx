"use client";

import IonaLogoNameDark from "@/app/assets/svg/iona-logo-name-dark.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LandingHeaderMobileType = {
  className?: string;
};

export function LandingHeaderMobile({ className }: LandingHeaderMobileType) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`framer-1bdd2xm ${className}`}
      data-framer-name="Header"
      data-framer-layout-hint-center-x="true"
    >
      <div className="framer-o0ee32-container">
        <nav
          className={`framer-ViMqZ framer-uDghj framer-6Ubzf framer-9qkq52 ${
            isOpen ? "framer-v-11ihjh6" : "framer-v-1ubdv5j"
          }`}
          data-framer-name={isOpen ? "Phone Open" : "Phone Closed"}
          data-hide-scrollbars="true"
          style={{
            backgroundColor: isOpen
              ? "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))"
              : "rgb(243, 243, 243)",
            maxWidth: "100%",
            width: "100%",
            opacity: 1,
            willChange: "auto",
            transform: "none",
            transformOrigin: "50% 50% 0px",
          }}
        >
          <div
            className="framer-9jm6cy"
            data-framer-name="Logo and Link"
            style={{
              backgroundColor: isOpen
                ? "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))"
                : "rgb(243, 243, 243)",
              borderRadius: 10,
              willChange: "auto",
              transform: "none",
              transformOrigin: "50% 50% 0px",
            }}
          >
            <div
              className="framer-1m4qeh8"
              data-framer-name="Name"
              style={{
                backgroundColor: isOpen
                  ? "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))"
                  : "rgb(243, 243, 243)",
                willChange: "auto",
                transform: "none",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <a
                className="framer-qrftsy framer-qivr5k"
                data-framer-name="Logo and Name"
                href="./"
                data-framer-page-link-current="true"
                style={{
                  borderRadius: 25,
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <div
                  className={isOpen ? "framer-9w81t8" : "framer-1h7zo0a"}
                  data-framer-name="Logo"
                  style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
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
              </a>

              <div
                className="framer-v4h3t3 relative w-8 h-8 flex justify-center items-center cursor-pointer"
                data-framer-name="Icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className="absolute w-5 h-0.5 rounded bg-[#043d2a] transition-all duration-300"
                  style={{
                    transform: isOpen
                      ? "rotate(45deg) translateY(0)"
                      : "translateY(-5px)",
                  }}
                />
                <div
                  className="absolute w-5 h-0.5 rounded bg-[#043d2a] transition-all duration-300"
                  style={{
                    transform: isOpen
                      ? "rotate(-45deg) translateY(0)"
                      : "translateY(6px)",
                  }}
                />
              </div>
            </div>

            {isOpen && (
              <div
                className="flex h-screen w-screen"
                data-framer-name="Menu Wrapper"
                style={{
                  backgroundColor:
                    "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  willChange: "auto",
                }}
              >
                <div
                  className="flex flex-col flex-1 text-sm text-[#151516] font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <ul
                    className="mt-5 pl-5 flex flex-col gap-10"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <li>
                      <p
                        className="framer-text framer-styles-preset-755d1"
                        data-styles-preset="cLS_AGjef"
                        style={{
                          color:
                            "var(--extracted-r6o4lv, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(0, 0, 0)))",
                        }}
                        onClick={() => router.push("/")}
                      >
                        HOME
                      </p>
                    </li>
                    <li>
                      <p
                        className="framer-text framer-styles-preset-755d1"
                        data-styles-preset="cLS_AGjef"
                        style={{
                          color:
                            "var(--extracted-r6o4lv, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(0, 0, 0)))",
                        }}
                        onClick={() => router.push("/sobre-mim")}
                      >
                        SOBRE MIM
                      </p>
                    </li>
                    <li>
                      <p
                        className="framer-text framer-styles-preset-755d1"
                        data-styles-preset="cLS_AGjef"
                        style={{
                          color:
                            "var(--extracted-r6o4lv, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(0, 0, 0)))",
                        }}
                        onClick={() => router.push("/palestras-e-workshops")}
                      >
                        PALESTRAS E WORKSHOPS
                      </p>
                    </li>
                    <li>
                      <p
                        className="framer-text framer-styles-preset-755d1"
                        data-styles-preset="cLS_AGjef"
                        style={{
                          color:
                            "var(--extracted-r6o4lv, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(0, 0, 0)))",
                        }}
                        onClick={() => router.push("/contact")}
                      >
                        CONTATO
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
