"use client";

import { AboutSection } from "./components/landing/about";
import { AboutExtraSection } from "./components/landing/about-extra";
import { BrandSection } from "./components/landing/brand-section";
import { Details1Section } from "./components/landing/details-1-section";
import { Details2Section } from "./components/landing/details-2-section";
import { Details3Section } from "./components/landing/details-3-section";
import Details4Section from "./components/landing/details-4-section";
import { ExpertiseSection } from "./components/landing/expertise-section";
import { FeedbackSection } from "./components/landing/feedback-section";
import { FeedbackSectionMobile } from "./components/landing/feedback-section-mobile";
import { Footer } from "./components/landing/footer";
import { FooterMobile } from "./components/landing/footer-mobile";
import { FutureSection } from "./components/landing/future-section";
import { LandingHeader } from "./components/landing/header";
import { LandingHeaderMobile } from "./components/landing/header-mobile";
import { HeroSection } from "./components/landing/hero";
import { HeroSectionMobile } from "./components/landing/hero-mobile";
import { Team1Section } from "./components/landing/team-1-section";
import { Team2Section } from "./components/landing/team-2-section";
import { VideoSection } from "./components/landing/video-section";
import { VideoSectionMobile } from "./components/landing/video-section-mobile";

export default function Landing() {
  return (
    <div>
      <div className="hidden lg:block">
        <LandingHeader />
      </div>

      <div className="block lg:hidden">
        <LandingHeaderMobile />
      </div>
      <div
        data-framer-root=""
        className="framer-QrmFE framer-KGwWx framer-2PkMf framer-72rtr7"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}
      >
        <div className="hidden lg:block">
          <HeroSection />
        </div>

        <div className="block lg:hidden">
          <HeroSectionMobile />
        </div>

        <AboutSection />
        <AboutExtraSection />
        <ExpertiseSection />

        <div className="hidden lg:block">
          <VideoSection />
        </div>

        <div className="block lg:hidden">
          <VideoSectionMobile />
        </div>

        <FutureSection />
        <Details1Section />
        <Details2Section />
        <Details3Section />
        <BrandSection />
        <Details4Section />
        <div className="hidden lg:block">
          <FeedbackSection />
        </div>
        <div className="block lg:hidden">
          <FeedbackSectionMobile />
        </div>
        <Team1Section />
        <Team2Section />

        <div className="hidden lg:block">
          <Footer />
        </div>

        <div className="block lg:hidden">
          <FooterMobile />
        </div>
      </div>
    </div>
  );
}
