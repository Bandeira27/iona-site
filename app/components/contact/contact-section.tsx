"use client";

import React from "react";
import { ScrollReveal } from "../scroll-reveal";
import { useForm } from "react-hook-form";
import { ContactType } from "@/app/type/contact-type";
import { useCreateContactEmailMutation } from "@/app/http/react-query";

export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm<ContactType>();
  const { createEmailAsync, isCreatingEmailAsync } =
    useCreateContactEmailMutation();

  async function onSubmit(data: ContactType) {
    try {
      await createEmailAsync(data);
      reset();
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
                    className="framer-fB1Zb framer-dxjT0 framer-18gumxh framer-v-18gumxh"
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
