'use client'

import { useEffect, useState } from 'react'
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
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 1024)
    
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) {
    return null
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
        {isMobile ? (
          <>
            <BannerSectionMobile />
            <AboutSectionMobile />
            <LectureOneMobile />
            <LectureTwoMobile />
            <LectureThreeMobile />
            <FooterMobile />
          </>
        ) : (
          <>
            <BannerSection />
            <AboutSection />
            <LectureOne />
            <LectureTwo />
            <LectureThree />
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}