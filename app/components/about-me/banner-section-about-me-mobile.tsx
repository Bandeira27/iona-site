import ImageHuman from "@/app/assets/image-human.png";
import Image from "next/image";

export function BannerSectionAboutMeMobile() {
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
              width={1729}
              height={1500}
              sizes="min(100vw - 40px, 1200px)"
              src={ImageHuman}
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center center",
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
              <h1
                className="framer-text"
                style={{
                  fontFamily: '"Poppins", "Poppins Placeholder", sans-serif',
                  fontSize: "24px",
                  letterSpacing: "-0.03em",
                  lineHeight: "115%",
                  textAlign: "center",
                  color:
                    "var(--token-b25fd8ad-c9e3-4471-b11c-08fc2ed02e4e, rgb(17, 17, 51))",
                }}
              >
                A origem é humana
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
