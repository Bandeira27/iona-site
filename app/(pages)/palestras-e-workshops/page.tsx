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

export default function LecturesAndWorkshops() {
  return (
    <div>
      <div className="hidden lg:block">
        <LandingHeader />
      </div>

      <div className="block lg:hidden">
        <LandingHeaderMobile className="!relative" />
      </div>
      <div
        data-framer-root
        className="framer-4IXK3 framer-stvsG framer-2PkMf framer-KGwWx framer-sodpwb"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}
      >
        <div className="hidden lg:block">
          <BannerSection />
        </div>

        <div className="block lg:hidden">
          <BannerSectionMobile />
        </div>
         <div className="hidden lg:block">
        <AboutSection />
         </div>
<div className="block lg:hidden">
  <AboutSectionMobile />
</div>


        <div className="hidden lg:block">
          <LectureOne />
        </div>

        <div className="block lg:hidden">
          <LectureOneMobile />
        </div>

        <div className="hidden lg:block">
          <LectureTwo />
        </div>

        <div className="block lg:hidden">
          <LectureTwoMobile />
        </div>

        <div className="hidden lg:block">
          <LectureThree />
        </div>

        <div className="block lg:hidden">
          <LectureThreeMobile />
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
