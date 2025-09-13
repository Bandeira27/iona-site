import { Footer } from "@/app/components/landing/footer";
import { FooterMobile } from "@/app/components/landing/footer-mobile";
import { LandingHeader } from "@/app/components/landing/header";
import { LandingHeaderMobile } from "@/app/components/landing/header-mobile";
import AboutSection from "@/app/components/lectures-and-workshops/about-section";
import BannerSection from "@/app/components/lectures-and-workshops/banner-section";
import LectureTwo from "@/app/components/lectures-and-workshops/lecture-two";
import LectureOne from "@/app/components/lectures-and-workshops/lectures-one";

export default function LecturesAndWorkshops() {
  return (
    <div>
      <div className="hidden md:block">
        <LandingHeader />
      </div>

      <div className="block md:hidden">
        <LandingHeaderMobile />
      </div>
      <div
        data-framer-root
        className="framer-4IXK3 framer-stvsG framer-2PkMf framer-KGwWx framer-sodpwb"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}
      >
        <BannerSection />
        <AboutSection />
        <LectureOne />
        <LectureTwo />
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
