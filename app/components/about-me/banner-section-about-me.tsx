import ImageHuman from "@/app/assets/image-human.png";
import Image from "next/image";

export default function BannerSectionAboutMe() {
  return (
    <section className="framer-182b2sm" data-framer-name="Banner Section">
      <div className="framer-1dw50ht" data-framer-name="Container">
        <div className="framer-hu1dfk" data-framer-name="Content">
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
              width={3449}
              height={1500}
              src={ImageHuman}
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center bottom",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="framer-127ljvc" data-framer-name="Title Wrapper">
            <div
              className="framer-1rq9jw5"
              data-framer-component-type="RichTextContainer"
              style={{
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                transform: "none",
              }}
            >
              <h2
                className="framer-text !text-left w-60 !leading-[1.35]"
                style={
                  {
                    "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                    "--framer-font-family":
                      '"Poppins", "Poppins Placeholder", sans-serif',
                    "--framer-font-size": "48px",
                    "--framer-letter-spacing": "-0.03em",
                    "--framer-line-height": "48px",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-b25fd8ad-c9e3-4471-b11c-08fc2ed02e4e, rgb(17, 17, 51))",
                  } as React.CSSProperties
                }
              >
                A origem é humana
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
