import { Footer } from "@/app/components/landing/footer";
import { LandingHeader } from "@/app/components/landing/header";
import AboutSection from "@/app/components/lectures-and-workshops/about-section";
import BannerSection from "@/app/components/lectures-and-workshops/banner-section";
import LectureTwo from "@/app/components/lectures-and-workshops/lecture-two";
import LectureOne from "@/app/components/lectures-and-workshops/lectures-one";

export default function LecturesAndWorkshops() {
    return(
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
        <Footer />
      </div>
     </div>
    )
}