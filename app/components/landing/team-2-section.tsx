import ImageForbesGirl from '@/app/assets/image-forbes-woman.png'
import ImageForbesTech from '@/app/assets/image-forbes-tech.png'
import ImageNeofeed from '@/app/assets/image-neofeed.png'
import ImagePipeline from '@/app/assets/image-pipeline.png'
import ImageBrazilJournal from '@/app/assets/image-brazil-journal.png'
import ImagePodcast from '@/app/assets/image-podcast.png'
import Image from 'next/image';

export function Team2Section() {
  return (
    <section className="framer-1lh08pg" data-framer-name="Team Section">
        <div
          className="framer-1ev1w5"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div
            className="flex flex-col w-full gap-10"
            data-framer-name="Content"
          >
            <div
              className="framer-qbj29l px-90"
              data-framer-name="Team Card Wrapper"
            >
              {/* CARD 1 */}
              <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk group relative">
                <div className="framer-ezd93p-container">
                  <a
                    className="framer-fzCDt framer-uDghj framer-Aw0u9 framer-dx6ssy framer-v-54cikq framer-1nezgc8 relative overflow-hidden"
                    style={{ width: "100%", opacity: 1 }}
                    href="https://forbes.com.br/colunas/2025/03/quem-vai-lavar-a-louca-se-eu-quiser-construir-um-imperio/"
                    target="_blank"
                    rel="noopener"
                    data-framer-name="Team Card 01 Small"
                  >
                    {/* Imagem */}
                    <div
                      className="framer-1901xld"
                      data-framer-name="Image Wrapper"
                      style={{ opacity: 1 }}
                    >
                      <div
                        className="framer-1ubxvsl"
                        data-framer-name="Image"
                        style={{ borderRadius: 10, opacity: 1 }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <Image
                            decoding="async"
                            loading="lazy"
                            width="4914"
                            height="2604"
                            sizes="576px"
                            src={ImageForbesGirl}
                            alt=""
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center top",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-12guhy6"
                        data-framer-name="overley"
                        style={{
                          background:
                            "linear-gradient(rgba(0, 0, 0, 0) 4%, rgba(0, 0, 0, 0.55) 86%)",
                          borderRadius: 10,
                          opacity: 1,
                        }}
                      />
                    </div>

                    {/* Textos */}
                    <div
                      className="framer-9t5vcq relative"
                      data-framer-name="Text Wrapper"
                      style={{ transform: "translateX(-50%)" }}
                    >
                      <div
                        className="framer-1cp584b flex flex-col items-start gap-1 transition-all duration-300 relative"
                        data-framer-name="Founder"
                      >
                        <p
                          className="framer-text framer-styles-preset-755d1"
                          style={{
                            ["--framer-text-color"]:
                              "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                          } as React.CSSProperties}
                        >
                          Artigo na Forbes Mulher
                        </p>

                        <p
                          className="framer-text framer-styles-preset-755d1 !text-2xl max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:mt-4"
                          style={{
                            ["--framer-text-color"]:
                              "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                          } as React.CSSProperties}
                        >
                          Quem vai lavar a louça se eu quiser construir um
                          império?
                        </p>
                      </div>
                    </div>

                    {/* Sombra interna ajustada para o card inteiro */}
                    <div className="absolute bottom-0 left-2.5 w-144 h-full bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none rounded-b-[10px]" />
                  </a>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk group relative">
                <div className="framer-1wdfhu5-container">
                  <a
                    className="framer-fzCDt framer-uDghj framer-Aw0u9 framer-dx6ssy framer-v-54cikq framer-1nezgc8 relative overflow-hidden"
                    style={{ width: "100%", opacity: 1 }}
                    href="https://forbes.com.br/coluna/2025/05/voce-esta-pronto-para-liderar-com-para-e-apesar-da-ia/"
                    target="_blank"
                    rel="noopener"
                    data-framer-name="Team Card 02 Small"
                  >
                    <div
                      className="framer-1901xld"
                      data-framer-name="Image Wrapper"
                      style={{ opacity: 1 }}
                    >
                      <div
                        className="framer-1ubxvsl"
                        data-framer-name="Image"
                        style={{ borderRadius: 10, opacity: 1 }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <Image
                            decoding="async"
                            loading="lazy"
                            width="4914"
                            height="2532"
                            sizes="576px"
                            src={ImageForbesTech}
                            alt=""
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              objectPosition: "center top",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-12guhy6"
                        data-framer-name="overley"
                        style={{
                          background:
                            "linear-gradient(rgba(0, 0, 0, 0) 4%, rgba(0, 0, 0, 0.55) 86%)",
                          borderRadius: 10,
                          opacity: 1,
                        }}
                      />
                    </div>

                    {/* Textos */}
                    <div
                      className="framer-9t5vcq relative"
                      data-framer-name="Text Wrapper"
                      style={{ transform: "translateX(-50%)" }}
                    >
                      <div
                        className="framer-1cp584b flex flex-col items-start gap-1 transition-all duration-300 relative"
                        data-framer-name="Founder"
                      >
                        <p
                          className="framer-text framer-styles-preset-755d1"
                          style={{
                            ["--framer-text-color"]:
                              "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                          } as React.CSSProperties}
                        >
                          Coluna na Forbes Tech
                        </p>

                        <p
                          className="framer-text framer-styles-preset-755d1 !text-2xl max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:mt-4"
                          style={{
                            ["--framer-text-color"]:
                              "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                          } as React.CSSProperties}
                        >
                          A liderança que a IA exige
                        </p>
                      </div>
                    </div>

                    {/* Sombra interna ajustada para o card inteiro */}
                    <div className="absolute bottom-0 left-2.5 w-144 h-full bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none rounded-b-[10px]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="framer-184cisk" data-framer-name="Content">
              <div
                className="framer-1ujcexm"
                data-framer-name="Team Card Wrapper"
              >
                {/* CARD 1 */}
                <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk group relative">
                  <div className="framer-1b8v7i4-container">
                    <a
                      className="framer-fzCDt framer-uDghj framer-Aw0u9 framer-dx6ssy framer-v-54cikq framer-1nezgc8 relative overflow-hidden"
                      style={{ width: "100%", opacity: 1 }}
                      href="https://neofeed.com.br/negocios/a-jornada-da-educacao-corporativa-que-atraiu-ambev-e-tecnisa/"
                      target="_blank"
                      rel="noopener"
                      data-framer-name="Team Card 01 Small"
                    >
                      {/* Imagem */}
                      <div
                        className="framer-1901xld"
                        data-framer-name="Image Wrapper"
                        style={{ opacity: 1 }}
                      >
                        <div
                          className="framer-1ubxvsl"
                          data-framer-name="Image"
                          style={{ borderRadius: 10, opacity: 1 }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <Image
                              decoding="async"
                              loading="lazy"
                              width="4914"
                              height="2581"
                              sizes="576px"
                              src={ImageNeofeed}
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center top",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-12guhy6"
                          data-framer-name="overley"
                          style={{
                            background:
                              "linear-gradient(rgba(0, 0, 0, 0) 4%, rgba(0, 0, 0, 0.55) 86%)",
                            borderRadius: 10,
                            opacity: 1,
                          }}
                        />
                      </div>

                      {/* Textos */}
                      <div
                        className="framer-9t5vcq relative"
                        data-framer-name="Text Wrapper"
                        style={{ transform: "translateX(-50%)" }}
                      >
                        <div className="framer-1cp584b flex flex-col items-start gap-1 relative transition-all duration-300">
                          {/* Texto fixo */}
                          <p
                            className="framer-text framer-styles-preset-755d1"
                            style={{
                              ["--framer-text-color"]:
                                "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                            } as React.CSSProperties}
                          >
                            NEOFEED
                          </p>
                          {/* Texto que aparece no hover */}
                          <p
                            className="framer-text framer-styles-preset-755d1 !text-2xl max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:mt-4"
                            style={{
                              ["--framer-text-color"]:
                                "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                            } as React.CSSProperties}
                          >
                            A jornada da educação corporativa que atraiu Ambev e
                            Tecnisa
                          </p>
                        </div>
                      </div>

                      {/* Sombra interna */}
                      <div className="absolute bottom-0 left-2.5 w-144 h-full bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none rounded-b-[10px]" />
                    </a>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk group relative">
                  <div className="framer-6ym9gi-container">
                    <a
                      className="framer-fzCDt framer-uDghj framer-Aw0u9 framer-dx6ssy framer-v-54cikq framer-1nezgc8 relative overflow-hidden"
                      style={{ width: "100%", opacity: 1 }}
                      href="https://pipelinevalor.globo.com/negocios/noticia/o-que-11-anos-no-vale-do-silicio-ensinam-sobre-inovar-e-voltar-pra-casa.ghtml"
                      target="_blank"
                      rel="noopener"
                      data-framer-name="Team Card 02 Small"
                    >
                      <div
                        className="framer-1901xld"
                        data-framer-name="Image Wrapper"
                        style={{ opacity: 1 }}
                      >
                        <div
                          className="framer-1ubxvsl"
                          data-framer-name="Image"
                          style={{ borderRadius: 10, opacity: 1 }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <Image
                              decoding="async"
                              loading="lazy"
                              width="4914"
                              height="2599"
                              sizes="576px"
                              src={ImagePipeline}
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectPosition: "center top",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-12guhy6"
                          data-framer-name="overley"
                          style={{
                            background:
                              "linear-gradient(rgba(0, 0, 0, 0) 4%, rgba(0, 0, 0, 0.55) 86%)",
                            borderRadius: 10,
                            opacity: 1,
                          }}
                        />
                      </div>

                      {/* Textos */}
                      <div
                        className="framer-9t5vcq relative"
                        data-framer-name="Text Wrapper"
                        style={{ transform: "translateX(-50%)" }}
                      >
                        <div className="framer-1cp584b flex flex-col items-start gap-1 relative transition-all duration-300">
                          {/* Texto fixo */}
                          <p
                            className="framer-text framer-styles-preset-755d1"
                            style={{
                              ["--framer-text-color"]:
                                "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                            } as React.CSSProperties}
                          >
                            pipeline
                          </p>
                          {/* Texto que aparece no hover */}
                          <p
                            className="framer-text framer-styles-preset-755d1 !text-2xl max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:mt-4"
                            style={{
                              ["--framer-text-color"]:
                                "var(--extracted-r6o4lv, var(--token-ae325ebd-12af-4f1b-9546-d54d17049faf, rgb(255, 255, 255)))",
                            } as React.CSSProperties}
                          >
                            O que 11 anos no Vale do Silício ensinam sobre
                            inovar e voltar pra casa
                          </p>
                        </div>
                      </div>

                      {/* Sombra interna */}
                      <div className="absolute bottom-0 left-2.5 w-144 h-full bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none rounded-b-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="framer-cqbptt" data-framer-name="Content">
              <div
                className="framer-qbj29l flex gap-4"
                data-framer-name="Team Card Wrapper"
              >
                {/* CARD 1 */}
                <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk group relative">
                  <div className="framer-ezd93p-container">
                    <a
                      className="framer-fzCDt framer-uDghj framer-Aw0u9 framer-dx6ssy framer-v-54cikq framer-1nezgc8 relative overflow-hidden"
                      style={{ width: "100%", opacity: 1 }}
                      href="https://braziljournal.com/brazil-at-silicon-valley-cresce-junto-com-o-vc-brasileiro-mas-a-mare-esta-baixando/"
                      target="_blank"
                      rel="noopener"
                      data-framer-name="Team Card 01 Small"
                    >
                      {/* Imagem */}
                      <div
                        className="framer-1901xld"
                        data-framer-name="Image Wrapper"
                        style={{ opacity: 1 }}
                      >
                        <div
                          className="framer-1ubxvsl"
                          data-framer-name="Image"
                          style={{ borderRadius: 10, opacity: 1 }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <Image
                              decoding="async"
                              loading="lazy"
                              width="4914"
                              height="2487"
                              src={ImageBrazilJournal}
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectFit: "cover",
                                objectPosition: "center top",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-12guhy6"
                          data-framer-name="overley"
                          style={{
                            background:
                              "linear-gradient(rgba(0,0,0,0) 4%, rgba(0,0,0,0.55) 86%)",
                            borderRadius: 10,
                            opacity: 1,
                          }}
                        />
                      </div>

                      {/* Textos - padrão idêntico ao Forbes */}
                      <div
                        className="framer-9t5vcq relative"
                        data-framer-name="Text Wrapper"
                        style={{ transform: "translateX(-50%)" }}
                      >
                        <div
                          className="framer-1cp584b flex flex-col items-start gap-1 transition-all duration-300 relative"
                          data-framer-name="Founder"
                        >
                          <p
                            className="framer-text framer-styles-preset-755d1"
                            style={{
                              ["--framer-text-color"]:
                                "var(--extracted-r6o4lv, rgb(255,255,255))",
                            } as React.CSSProperties}
                          >
                            Brazil Journal
                          </p>

                          <p
                            className="framer-text framer-styles-preset-755d1 !text-2xl max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:mt-4"
                            style={{
                              ["--framer-text-color"]:
                                "var(--extracted-r6o4lv, rgb(255,255,255))",
                            } as React.CSSProperties}
                          >
                            Brazil at Silicon Valley cresce junto com o VC
                            brasileiro, mas a maré está baixando
                          </p>
                        </div>
                      </div>

                      {/* Sombra interna */}
                      <div className="absolute bottom-0 left-2.5 w-144 h-full bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none rounded-b-[10px]" />
                    </a>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="ssr-variant hidden-dmz5yz hidden-gmy0uk group relative">
                  <div className="framer-1wdfhu5-container">
                    <a
                      className="framer-fzCDt framer-uDghj framer-Aw0u9 framer-dx6ssy framer-v-54cikq framer-1nezgc8 relative overflow-hidden"
                      style={{ width: "100%", opacity: 1 }}
                      href="https://www.youtube.com/watch?v=DSkacLz8lKI"
                      target="_blank"
                      rel="noopener"
                      data-framer-name="Team Card 02 Small"
                    >
                      {/* Imagem */}
                      <div
                        className="framer-1901xld"
                        data-framer-name="Image Wrapper"
                        style={{ opacity: 1 }}
                      >
                        <div
                          className="framer-1ubxvsl"
                          data-framer-name="Image"
                          style={{ borderRadius: 10, opacity: 1 }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <Image
                              decoding="async"
                              loading="lazy"
                              width="5374"
                              height="2031"
                              src={ImagePodcast}
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectFit: "cover",
                                objectPosition: "center top",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-12guhy6"
                          data-framer-name="overley"
                          style={{
                            background:
                              "linear-gradient(rgba(0,0,0,0) 4%, rgba(0,0,0,0.55) 86%)",
                            borderRadius: 10,
                            opacity: 1,
                          }}
                        />
                      </div>

                      {/* Textos - padrão idêntico ao Forbes */}
                      <div
                        className="framer-9t5vcq relative"
                        data-framer-name="Text Wrapper"
                        style={{ transform: "translateX(-50%)" }}
                      >
                        <div
                          className="framer-1cp584b flex flex-col items-start gap-1 transition-all duration-300 relative"
                          data-framer-name="Founder"
                        >
                          <p
                            className="framer-text framer-styles-preset-755d1"
                            style={{
                              ["--framer-text-color"]:
                                "var(--extracted-r6o4lv, rgb(255,255,255))",
                            } as React.CSSProperties}
                          >
                            Podcast PowerCast
                          </p>

                          <p
                            className="framer-text framer-styles-preset-755d1 !text-2xl max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:mt-4"
                            style={{
                              ["--framer-text-color"]:
                                "var(--extracted-r6o4lv, rgb(255,255,255))",
                            } as React.CSSProperties}
                          >
                            Episódio especial sobre inovação e mercado de
                            tecnologia
                          </p>
                        </div>
                      </div>

                      {/* Sombra interna */}
                      <div className="absolute bottom-0 left-2.5 w-144 h-full bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none rounded-b-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </section>
  );
}
