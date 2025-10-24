import { useState } from 'react';
import { FaCoffee, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

/**
 * Footer component with newsletter signup, social links, and legal information
 */
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // For now, just log the email (can be connected to a backend later)
    console.log('Newsletter signup:', email);
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaPinterest, href: '#', label: 'Pinterest' },
  ];

  const legalLinks = [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookies', href: '#' },
  ];

  return (
    <footer className="bg-darker py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section - Logo and Newsletter */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-cream/20">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaCoffee className="text-cream text-3xl" />
              <span className="text-2xl font-bold text-cream">BRUSSELS BREWERY</span>
            </div>
            <p className="text-cream/80 text-lg">
              Brewed To Perfection, Served With Love
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cream">
              Join our newsletter to receive exclusive updates, and news!
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section - Social Icons, Legal Links, Copyright */}
        <div className="space-y-8">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-300 text-cream"
                >
                  <Icon className="text-xl" />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex justify-center space-x-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-cream/60 hover:text-cream transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-cream/60">
              ©2024 Brussels Brewery. All Rights Reserved.
            </p>
            <p className="text-cream/40 text-sm">Powered by CMDigital</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
