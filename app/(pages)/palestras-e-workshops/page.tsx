import { Footer } from "@/app/components/landing/footer";
import { FooterMobile } from "@/app/components/landing/footer-mobile";
import { LandingHeader } from "@/app/components/landing/header";
import { LandingHeaderMobile } from "@/app/components/landing/header-mobile";
import AboutSection from "@/app/components/lectures-and-workshops/about-section";
import { BannerSectionMobile } from "@/app/components/lectures-and-workshops/about-section-mobile";
import BannerSection from "@/app/components/lectures-and-workshops/banner-section";
import LectureThree from "@/app/components/lectures-and-workshops/lecture-three";
import LectureTwo from "@/app/components/lectures-and-workshops/lecture-two";
import LectureOne from "@/app/components/lectures-and-workshops/lectures-one";
import { LectureOneMobile } from "@/app/components/lectures-and-workshops/lectures-one-mobile";

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

        <AboutSection />

   <div className="hidden lg:block">

        <LectureOne />
   </div>


 <div className="block lg:hidden">
        <LectureOneMobile />
 </div>

        <LectureTwo />
        <LectureThree />
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
