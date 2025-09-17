import { AboutSectionAboutMe } from "@/app/components/about-me/about-section-about-me";
import AchievementSection from "@/app/components/about-me/achievement-section";
import { AchievementSectionMobile } from "@/app/components/about-me/achievement-section-mobile";
import BannerSectionAboutMe from "@/app/components/about-me/banner-section-about-me";
import { BannerSectionAboutMeMobile } from "@/app/components/about-me/banner-section-about-me-mobile";
import MissionSection from "@/app/components/about-me/mission-section";
import OverviewSection from "@/app/components/about-me/overview-section";
import { OverviewSectionMobile } from "@/app/components/about-me/overview-section-mobile";
import TransformerSection from "@/app/components/about-me/transformer-section";
import { Footer } from "@/app/components/landing/footer";
import { FooterMobile } from "@/app/components/landing/footer-mobile";
import { LandingHeader } from "@/app/components/landing/header";
import { LandingHeaderMobile } from "@/app/components/landing/header-mobile";

export default function AboutMe() {
  return (
    <div>
      <div className="hidden lg:block">
        <LandingHeader />
      </div>

      <div className="block lg:hidden">
        <LandingHeaderMobile className="!relative" />
      </div>
      <div
        data-framer-root=""
        className="framer-6Uhsu framer-KGwWx framer-KhsFx framer-6Ubzf framer-1qcvg63"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}
      >
        <div className="hidden lg:block">
          <BannerSectionAboutMe />
        </div>

        <div className="block lg:hidden">
          <BannerSectionAboutMeMobile />
        </div>

        <AboutSectionAboutMe />
        <div className="hidden lg:block">
          <OverviewSection />
        </div>
        <div className="block lg:hidden">
          <OverviewSectionMobile />
        </div>
        <TransformerSection />

        <div className="hidden lg:block">
          <AchievementSection />
        </div>

        <div className="block lg:hidden">
          <AchievementSectionMobile />
        </div>
        <MissionSection />
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
