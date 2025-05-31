import Navbar from "@/components/navbar";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import ExtensionArea from "@/components/extension-area";
import Feature from "@/components/feature";
import IntroArea from "@/components/Intro-area";

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroArea />
      <Feature />
      <ExtensionArea />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
