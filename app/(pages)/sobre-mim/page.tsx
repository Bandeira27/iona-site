import { AboutSectionAboutMe } from "@/app/components/about-me/about-section-about-me";
import AchievementSection from "@/app/components/about-me/achievement-section";
import { AchievementSectionMobile } from "@/app/components/about-me/achievement-section-mobile";
import BannerSectionAboutMe from "@/app/components/about-me/banner-section-about-me";
import MissionSection from "@/app/components/about-me/mission-section";
import OverviewSection from "@/app/components/about-me/overview-section";
import { OverviewSectionMobile } from "@/app/components/about-me/overview-section-mobile";
import TransformerSection from "@/app/components/about-me/transformer-section";
import { Footer } from "@/app/components/landing/footer";
import { FooterMobile } from "@/app/components/landing/footer-mobile";
import { LandingHeader } from "@/app/components/landing/header";

export default function AboutMe() {
  return (
    <div>
      <LandingHeader />
      <div
        data-framer-root=""
        className="framer-6Uhsu framer-KGwWx framer-KhsFx framer-6Ubzf framer-1qcvg63"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}
      >
        <BannerSectionAboutMe />
        <AboutSectionAboutMe />
        <div className="hidden md:block">
          <OverviewSection />
        </div>
        <div className="block md:hidden">
          <OverviewSectionMobile />
        </div>
        <TransformerSection />

        <div className="hidden md:block">
          <AchievementSection />
        </div>

        <div className="block md:hidden">
          <AchievementSectionMobile />
        </div>
        <MissionSection />
        <div className="hidden md:block">
          <Footer />
        </div>

        <div className="block md:hidden">
          <FooterMobile />
        </div>
      </div>
    </div>
  );
}
