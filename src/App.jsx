import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import HandmadeSection from './sections/HandmadeSection';
import MadeInBrusselsSection from './sections/MadeInBrusselsSection';
import SocialMediaSection from './sections/SocialMediaSection';
import LocationsSection from './sections/LocationsSection';

/**
 * Main App component - Brussels Brewery Website
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <HandmadeSection />
        <MadeInBrusselsSection />
        <SocialMediaSection />
        <LocationsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
