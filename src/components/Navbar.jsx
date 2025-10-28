import { useState, useEffect } from 'react';
import { FaCoffee, FaBars, FaTimes } from 'react-icons/fa';

/**
 * Sticky navigation bar with responsive mobile menu
 * @param {function} setIsMenuOpen - Function to open menu modal
 */
const Navbar = ({ setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
  ];

  // Handle smooth scroll and close mobile menu
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream shadow-lg py-3' : 'bg-cream py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaCoffee className="text-dark text-2xl" />
            <span className="text-xl md:text-2xl font-bold text-dark">
              BRUSSELS BREWERY
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-dark hover:text-brown transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-dark hover:text-brown transition-colors duration-200"
            >
              Menu
            </button>
            <a
              href="#locations"
              onClick={(e) => handleNavClick(e, '#locations')}
              className="text-dark hover:text-brown transition-colors duration-200"
            >
              Locations
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-dark hover:text-brown transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="https://maps.app.goo.gl/NoUsNSYMZTQdRCz28"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
            >
              Find a Location
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brown/20 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-dark hover:text-brown transition-colors duration-200 text-lg"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-dark hover:text-brown transition-colors duration-200 text-lg text-left"
              >
                Menu
              </button>
              <a
                href="#locations"
                onClick={(e) => handleNavClick(e, '#locations')}
                className="text-dark hover:text-brown transition-colors duration-200 text-lg"
              >
                Locations
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-dark hover:text-brown transition-colors duration-200 text-lg"
              >
                Contact
              </a>
              <a
                href="https://maps.app.goo.gl/NoUsNSYMZTQdRCz28"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm font-medium w-full text-center"
              >
                Find a Location
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
