"use client";

import { AboutSection } from "./components/landing/about";
import { AboutExtraSection } from "./components/landing/about-extra";
import { AboutExtraMobile } from "./components/landing/about-extra-mobile";
import { BrandSection } from "./components/landing/brand-section";
import { BrandSectionMobile } from "./components/landing/brand-section-mobile";
import { Details1Section } from "./components/landing/details-1-section";
import { Details1SectionMobile } from "./components/landing/details-1-section-mobile";
import { Details2Section } from "./components/landing/details-2-section";
import { Details2SectionMobile } from "./components/landing/details-2-section-mobile";
import { Details3Section } from "./components/landing/details-3-section";
import { Details3SectionMobile } from "./components/landing/details-3-section-mobile";
import Details4Section from "./components/landing/details-4-section";
import { ExpertiseSection } from "./components/landing/expertise-section";
import { ExpertiseSectionMobile } from "./components/landing/expertise-section-mobile";
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
import Team2SectionMobile from "./components/landing/team-2-section-mobile";
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

        <div className="hidden lg:block">
          <AboutExtraSection />
        </div>

        <div className="block lg:hidden">
          <AboutExtraMobile />
        </div>

        <div className="hidden lg:block">
          <ExpertiseSection />
        </div>

        <div className="block lg:hidden">
          <ExpertiseSectionMobile />
        </div>

        <div className="hidden lg:block">
          <VideoSection />
        </div>

        <div className="block lg:hidden">
          <VideoSectionMobile />
        </div>

        <FutureSection />

        <div className="hidden lg:block">
          <Details1Section />
        </div>

        <div className="block lg:hidden">
          <Details1SectionMobile />
        </div>

        <div className="hidden lg:block">
          <Details2Section />
        </div>
        <div className="block lg:hidden">
          <Details2SectionMobile />
        </div>
          <div className="hidden lg:block">

        <Details3Section />
          </div>

 <div className="block lg:hidden">
  <Details3SectionMobile />
 </div>

        <div className="hidden lg:block">
          <BrandSection />
        </div>

        <div className="block lg:hidden">
          <BrandSectionMobile />
        </div>
        <Details4Section />
        <div className="hidden lg:block">
          <FeedbackSection />
        </div>
        <div className="block lg:hidden">
          <FeedbackSectionMobile />
        </div>
        <Team1Section />

        <div className="hidden lg:block">
          <Team2Section />
        </div>

        <div className="block lg:hidden">
          <Team2SectionMobile />
        </div>

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
