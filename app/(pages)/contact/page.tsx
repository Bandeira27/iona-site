import ContactSection from "@/app/components/contact/contact-section";
import { Footer } from "@/app/components/landing/footer";
import { LandingHeader } from "@/app/components/landing/header";

export default function ContactPage() {
  return (
    <div>
      <LandingHeader />
      <div
        data-framer-root=""
        className="framer-tiXyh framer-stvsG framer-vxdkxc"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}
      >
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
