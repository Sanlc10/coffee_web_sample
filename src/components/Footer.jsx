import { useState } from 'react';
import { FaCoffee, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

/**
 * Footer component with WhatsApp contact form, social links, and legal information
 */
const Footer = () => {
  const [message, setMessage] = useState('');

  const handleWhatsAppRedirect = () => {
    if (!message.trim()) {
      alert('Please enter a message before sending.');
      return;
    }

    const phoneNumber = '5212213419629'; // Formato internacional sin + ni espacios
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setMessage(''); // Limpiar el campo después de enviar
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

          {/* WhatsApp Contact Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cream">
              Get in touch with us! Send us a message and we'll get back to you right away.
            </h3>
            <div className="flex gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="2"
                className="flex-1 px-4 py-3 rounded-lg bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 focus:outline-none focus:border-gold resize-none"
              />
              <button
                onClick={handleWhatsAppRedirect}
                className="px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
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
