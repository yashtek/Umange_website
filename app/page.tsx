import { DownloadSection } from "./downloadSection";
import { Footer } from "./footer";
import Header from "./header";
import Hero from "./hero";
import { HowItWorks } from "./howItWorks";
import { Reviews } from "./Review";
import { UsersSlider } from "./userSlide";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <UsersSlider />
        <Reviews />
        <HowItWorks />
        
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
