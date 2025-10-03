"use client";

import { useEffect, useState, useMemo } from "react";
import { Footer } from "@/app/components/landing/footer";
import { FooterMobile } from "@/app/components/landing/footer-mobile";
import { LandingHeader } from "@/app/components/landing/header";
import { LandingHeaderMobile } from "@/app/components/landing/header-mobile";
import { LectureTwoMobile } from "@/app/components/landing/lectures-two-mobile";
import AboutSection from "@/app/components/lectures-and-workshops/about-section";
import { BannerSectionMobile } from "@/app/components/lectures-and-workshops/banner-section-mobile";
import BannerSection from "@/app/components/lectures-and-workshops/banner-section";
import LectureThree from "@/app/components/lectures-and-workshops/lecture-three";
import LectureTwo from "@/app/components/lectures-and-workshops/lecture-two";
import LectureOne from "@/app/components/lectures-and-workshops/lectures-one";
import { LectureOneMobile } from "@/app/components/lectures-and-workshops/lectures-one-mobile";
import { LectureThreeMobile } from "@/app/components/lectures-and-workshops/lectures-three-mobile";
import AboutSectionMobile from "@/app/components/lectures-and-workshops/about-section-mobile";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);

    setMatches(media.matches);

    let timeoutId: NodeJS.Timeout;
    const listener = (e: MediaQueryListEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMatches(e.matches);
      }, 100);
    };

    media.addEventListener("change", listener);

    return () => {
      clearTimeout(timeoutId);
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return { matches, mounted };
}

export default function LecturesAndWorkshops() {
  const { matches: isMobile, mounted } = useMediaQuery("(max-width: 1023px)");

  const content = useMemo(() => {
    if (isMobile) {
      return (
        <>
          <BannerSectionMobile />
          <AboutSectionMobile />
          <LectureOneMobile />
          <LectureTwoMobile />
          <LectureThreeMobile />
          <FooterMobile />
        </>
      );
    }

    return (
      <>
        <BannerSection />
        <AboutSection />
        <LectureOne />
        <LectureTwo />
        <LectureThree />
        <Footer />
      </>
    );
  }, [isMobile]);

  if (!mounted) {
    return (
      <div>
        <LandingHeader />
        <div
          data-framer-root
          className="framer-4IXK3 framer-stvsG framer-2PkMf framer-KGwWx framer-sodpwb"
          style={{ minHeight: "100vh", width: "auto", display: "contents" }}
        >
          <BannerSection />
          <AboutSection />
          <LectureOne />
          <LectureTwo />
          <LectureThree />
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div>
      {isMobile ? (
        <LandingHeaderMobile className="!relative" />
      ) : (
        <LandingHeader />
      )}

      <div
        data-framer-root
        className="framer-4IXK3 framer-stvsG framer-2PkMf framer-KGwWx framer-sodpwb"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}
      >
        {content}
      </div>
    </div>
  );
}
