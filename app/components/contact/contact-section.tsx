"use client";

import React from "react";
import spinner from "@/app/assets/svg/spinner.svg";
import { ScrollReveal } from "../scroll-reveal";
import { useForm } from "react-hook-form";
import { ContactType } from "@/app/type/contact-type";
import { useCreateContactEmailMutation } from "@/app/http/react-query";
import clsx from "clsx";

export default function ContactSection() {
  const { register, handleSubmit } = useForm<ContactType>();
  const { createEmailAsync, isCreatingEmailAsync } =
    useCreateContactEmailMutation();

  async function onSubmit(data: ContactType) {
    try {
      await createEmailAsync(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <ScrollReveal>
      <section className="framer-1x2p2r7" data-framer-name="Contact Section">
        <div
          className="framer-1wpwiej"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-1hjz3zl" data-framer-name="Content">
            <div className="framer-1bdnor2" data-framer-name="Image and Title">
              <div className="framer-16lx9e3" data-framer-name="Title Wrapper">
                <div className="ssr-variant hidden-17vzixy hidden-xmikx1">
                  <div
                    className="framer-x2ghk5"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <h2
                      style={{
                        fontFamily:
                          '"Poppins", "Poppins Placeholder", sans-serif',
                        fontSize: "32px",
                        letterSpacing: "-0.03em",
                        lineHeight: "135%",
                        textAlign: "left",
                        color: "rgb(21, 21, 22)",
                      }}
                      className="framer-text"
                    >
                      Se você já entendeu que a tecnologia sozinha não resolve,
                      preencha o formulário
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-v0q1sa" data-framer-name="Title and image">
              <form className="framer-o1m8dc" onSubmit={handleSubmit(onSubmit)}>
                <label className="framer-1gi4oni">
                  <div
                    className="framer-1cm3nte"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-notrjj"
                      data-styles-preset="n2QDXf05m"
                      style={{ textAlign: "left", color: "rgb(243, 243, 243)" }}
                    >
                      Nome completo
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-1vimbsd">
                    <input
                      type="text"
                      required
                      {...register("fullName")}
                      placeholder="Nome e sobrenome"
                      className="framer-form-input framer-form-input-empty"
                    />
                  </div>
                </label>
                <label className="framer-gftoqz">
                  <div
                    className="framer-qp7v44"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-notrjj"
                      data-styles-preset="n2QDXf05m"
                      style={{ textAlign: "left", color: "rgb(243, 243, 243)" }}
                    >
                      Empresa / Organização
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-1uezkcv">
                    <input
                      type="text"
                      required
                      {...register("company")}
                      placeholder="Empresa"
                      className="framer-form-input framer-form-input-empty"
                    />
                  </div>
                </label>
                <label className="framer-17l29x0">
                  <div
                    className="framer-kma8en"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-notrjj"
                      data-styles-preset="n2QDXf05m"
                      style={{ textAlign: "left", color: "rgb(243, 243, 243)" }}
                    >
                      E-mail corporativo
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-lu0fze">
                    <input
                      type="email"
                      required
                      {...register("email")}
                      placeholder="E-mail"
                      className="framer-form-input framer-form-input-empty"
                    />
                  </div>
                </label>
                <label className="framer-usosm9">
                  <div
                    className="framer-sk23iu"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-notrjj"
                      data-styles-preset="n2QDXf05m"
                      style={{ textAlign: "left", color: "rgb(243, 243, 243)" }}
                    >
                      Tipo de participação desejada
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-19zq9v1">
                    <input
                      type="text"
                      required
                      {...register("participationType")}
                      placeholder="(Palestra, Workshop, Mentoria, outro)"
                      className="framer-form-input framer-form-input-empty"
                    />
                  </div>
                </label>
                <label className="framer-m1u8xk">
                  <div
                    className="framer-o81pkn"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-notrjj"
                      data-styles-preset="n2QDXf05m"
                      style={{ textAlign: "left", color: "rgb(243, 243, 243)" }}
                    >
                      Data estimada do evento
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-1jmj37m">
                    <input
                      type="date"
                      required
                      {...register("estimatedDate")}
                      placeholder="Subject"
                      className="framer-form-input framer-form-input-empty"
                    />
                  </div>
                </label>
                <label className="framer-1m0vyun">
                  <div
                    className="framer-1jutc0u"
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-notrjj"
                      data-styles-preset="n2QDXf05m"
                      style={{ textAlign: "left", color: "rgb(243, 243, 243)" }}
                    >
                      Mensagem / Detalhes
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-173pzw1">
                    <textarea
                      {...register("message")}
                      placeholder="Sua mensagem"
                      className="framer-form-input"
                    ></textarea>
                  </div>
                </label>
                <div className="framer-1fxt0mj-container">
                  <button
                    type="submit"
                     className={clsx(
    "framer-fB1Zb framer-dxjT0 framer-18gumxh framer-v-18gumxh transition-all duration-300 ease-in-out",
    isCreatingEmailAsync ? "!w-44" : "w-64"
  )}
                    data-creating={!isCreatingEmailAsync}
                    data-framer-name="Default"
                    disabled={isCreatingEmailAsync}
                    data-reset="button"
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px",
                      opacity: 1,
                    }}
                    tabIndex={0}
                  >
                    {!isCreatingEmailAsync ? (
                      <div
                        className="framer-186o7v"
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          flexShrink: 0,
                          transform: "none",
                          opacity: 1,
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1ivuj08"
                          data-styles-preset="W_sgoDppc"
                          style={{
                            textAlign: "center",
                            color: "rgb(21, 21, 22)",
                          }}
                        >
                          {isCreatingEmailAsync ? "Enviando..." : "Enviar"}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div
                          className="framer-av556y"
                          data-framer-name="Spinner"
                          style={{
                            mask: `url(${spinner.src}) center center / cover no-repeat alpha`,
                            transform:
                              "translate3d(1.63474px, 0px, 0px) scale(1.0218, 1) scale(1, 1)",
                            transformOrigin: "50% 50% 0px",
                          }}
                        >
                          <div
                            className="framer-92y8ji"
                            data-framer-name="Conic"
                            style={{
                              background:
                                "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, var(--token-3696beb0-9bcd-4868-8f06-aad504012b0e, rgb(21, 21, 22)) 342deg)",
                              mask: `url(${spinner.src}) center center / cover no-repeat alpha`,
                              willChange: "auto",
                              opacity: 1,
                              transform: "rotate(59.04deg)",
                              transformOrigin: "50% 50% 0px",
                              animation: "spin 1s linear infinite",
                            }}
                          >
                            <div
                              className="framer-1wx4az7"
                              data-framer-name="Rounding"
                              style={{
                                backgroundColor:
                                  "var(--token-a3c1e9b9-e8ac-4688-91db-1f11e12741f4, rgb(22, 58, 25))",
                                borderRadius: "50%",
                                transform: "translateX(-50%)",
                                transformOrigin: "50% 50% 0px",
                              }}
                            ></div>
                          </div>
                        </div>
                        <style>
                          {`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}
                        </style>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
