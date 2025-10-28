import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
import HeroSection from './sections/HeroSection';
import HandmadeSection from './sections/HandmadeSection';
import MadeInBrusselsSection from './sections/MadeInBrusselsSection';
import SocialMediaSection from './sections/SocialMediaSection';
import LocationsSection from './sections/LocationsSection';

/**
 * Main App component - Brussels Brewery Website
 */
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <Navbar setIsMenuOpen={setIsMenuOpen} />

      {/* Menu Modal */}
      <MenuModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

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
