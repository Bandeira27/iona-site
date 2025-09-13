"use client";

import IonaLogoNameDark from "@/app/assets/iona-logo-name-dark.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LandingHeaderMobile() {
  const router = useRouter();
  const [container, setContainer] = useState(true);
  return (
    <>
      {container ? (
        <header
          className="framer-1bdd2xm !relative"
          data-framer-name="Header"
          data-framer-layout-hint-center-x="true"
        >
          <div className="framer-o0ee32-container">
            <nav
              className="framer-ViMqZ framer-uDghj framer-6Ubzf framer-9qkq52 framer-v-1ubdv5j"
              data-framer-name="Phone Closed"
              data-hide-scrollbars="true"
              style={{
                backgroundColor: "rgb(243, 243, 243)",
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
                  backgroundColor: "rgb(243, 243, 243)",
                  borderRadius: 10,
                  opacity: 1,
                  willChange: "auto",
                }}
              >
                <div
                  className="framer-1m4qeh8"
                  data-framer-name="Name"
                  style={{
                    backgroundColor: "rgb(243, 243, 243)",
                    opacity: 1,
                    willChange: "auto",
                  }}
                >
                  <a
                    className="framer-qrftsy framer-qivr5k"
                    data-framer-name="Logo and Name"
                    href="./"
                    data-framer-page-link-current="true"
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
                  </a>

                  <div
                    className="framer-v4h3t3"
                    data-framer-name="Icon"
                    data-highlight="true"
                    tabIndex={0}
                    style={{ opacity: 1 }}
                    onClick={() => setContainer(false)}
                  >
                    <div
                      className="framer-lsbi47"
                      data-framer-name="Bottom"
                      style={{
                        backgroundColor:
                          "var(--token-a3c1e9b9-e8ac-4688-91db-1f11e12741f4, rgb(22, 58, 25))",
                        borderRadius: 10,
                        transform: "none",
                        opacity: 1,
                        willChange: "transform",
                      }}
                    ></div>
                    <div
                      className="framer-129yrtc"
                      data-framer-name="Top"
                      style={{
                        backgroundColor:
                          "var(--token-a3c1e9b9-e8ac-4688-91db-1f11e12741f4, rgb(22, 58, 25))",
                        borderRadius: 10,
                        transform: "none",
                        opacity: 1,
                        willChange: "transform",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      ) : (
        <header
          className="framer-1bdd2xm"
          data-framer-name="Header"
          data-framer-layout-hint-center-x="true"
        >
          <div className="framer-o0ee32-container">
            <nav
              className="framer-ViMqZ framer-uDghj framer-6Ubzf framer-9qkq52 framer-v-11ihjh6"
              data-framer-name="Phone Open"
              data-hide-scrollbars="true"
              style={{
                backgroundColor:
                  "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
                maxWidth: "100%",
                width: "100%",
                willChange: "auto",
                transform: "none",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <div
                className="framer-9jm6cy"
                data-framer-name="Logo and Link"
                style={{
                  backgroundColor:
                    "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
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
                    backgroundColor:
                      "var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255))",
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
                      className="framer-9w81t8"
                      data-framer-name="Logo"
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
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
                    className="framer-v4h3t3"
                    data-framer-name="Icon"
                    data-highlight="true"
                    tabIndex={0}
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                    onClick={() => setContainer(true)}
                  >
                    <div
                      className="framer-lsbi47"
                      data-framer-name="Bottom"
                      style={{
                        backgroundColor:
                          "var(--token-a3c1e9b9-e8ac-4688-91db-1f11e12741f4, rgb(22, 58, 25))",
                        borderRadius: "50% / 500%",
                        transform: "rotate(-45deg)",
                        willChange: "transform",
                        transformOrigin: "50% 50% 0px",
                      }}
                    ></div>
                    <div
                      className="framer-129yrtc"
                      data-framer-name="Top"
                      style={{
                        backgroundColor:
                          "var(--token-a3c1e9b9-e8ac-4688-91db-1f11e12741f4, rgb(22, 58, 25))",
                        borderRadius: "50% / 500%",
                        transform: "rotate(45deg)",
                        willChange: "transform",
                        transformOrigin: "50% 50% 0px",
                      }}
                    ></div>
                  </div>
                </div>

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
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
