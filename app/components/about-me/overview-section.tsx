"use client";

export default function OverviewSection() {
  return (
    <>
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="framer-1vdgkl7" data-framer-name="Overview Section">
        <div className="framer-vpmg27-container hidden-p0mfc hidden-xme965">
          <section
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              placeItems: "center",
              margin: 0,
              padding: "10px",
              listStyleType: "none",
              opacity: 1,
              overflow: "hidden",
            }}
          >
            <ul
              className="marquee-track"
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                placeItems: "center",
                margin: 0,
                padding: 0,
                listStyleType: "none",
                gap: "40px",
                position: "relative",
                flexDirection: "row",
                willChange: "transform",
                transform: "translateX(0px)",
              }}
            >
              {[...Array(12), ...Array(12)].map((_, i) => (
                <li
                  key={i}
                  aria-hidden={i > 2}
                  style={{ willChange: "transform" }}
                >
                  <div
                    className={`framer-${
                      i % 3 === 0
                        ? "1t97jvt"
                        : i % 3 === 1
                          ? "flcglx"
                          : "s60kps"
                    }`}
                    style={{ flexShrink: 0 }}
                  >
                    <div
                      data-framer-background-image-wrapper="true"
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        inset: 0,
                      }}
                    >
                      <img
                        decoding="async"
                        src={
                          i % 3 === 0
                            ? "https://framerusercontent.com/images/JyqSD878jH7FWCW91ZN5ZIBTdY.jpg"
                            : i % 3 === 1
                              ? "https://framerusercontent.com/images/09C2s9avPTiRGwBPw59Qh9Y8NV4.png"
                              : "https://framerusercontent.com/images/RUXKvWGqMoJO8OKtjxNx80eic.jpg"
                        }
                        alt="Image"
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
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div
          className="framer-1tqs29a hidden-p0mfc hidden-xme965"
          data-framer-name="Container"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div className="framer-112gjwb" data-framer-name="Content"></div>
        </div>
      </section>
    </>
  );
}
