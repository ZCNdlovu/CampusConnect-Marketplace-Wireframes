import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Categories } from "../components/Categories";
import { FeaturedItems } from "../components/FeaturedItems";
import { ZoomControls } from "../components/ZoomControls";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background/50 backdrop-blur-sm" style={{
      backgroundImage: 'url(/src/imports/Campus.Connect.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      <Hero />
      <Categories />
      <FeaturedItems />
      <ZoomControls />
    </div>
  );
}
