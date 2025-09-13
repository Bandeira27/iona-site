import ContactSection from "@/app/components/contact/contact-section";
import { Footer } from "@/app/components/landing/footer";
import { FooterMobile } from "@/app/components/landing/footer-mobile";
import { LandingHeader } from "@/app/components/landing/header";
import { LandingHeaderMobile } from "@/app/components/landing/header-mobile";

export default function ContactPage() {
  return (
    <div>
      <div className="hidden md:block">
        <LandingHeader />
      </div>

      <div className="block md:hidden">
        <LandingHeaderMobile />
      </div>
      <div
        data-framer-root=""
        className="framer-tiXyh framer-stvsG framer-vxdkxc"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}
      >
        <ContactSection />
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
