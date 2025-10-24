import { FaInstagram, FaFacebook } from 'react-icons/fa';

/**
 * Social media section with Instagram and Facebook links plus image gallery
 */
const SocialMediaSection = () => {
  // Curated coffee and pastry images from Unsplash
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      alt: 'Espresso cup on marble counter',
    },
    {
      url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
      alt: 'Fresh croissants and pastries',
    },
    {
      url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop',
      alt: 'Cappuccino with foam art',
    },
    {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
      alt: 'Coffee beans and cup',
    },
  ];

  return (
    <section className="bg-brown py-20 md:py-32" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        {/* Social Media Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Instagram */}
          <div className="flex items-center space-x-6 bg-brown-dark p-8 rounded-lg">
            <FaInstagram className="text-cream text-6xl flex-shrink-0" />
            <div>
              <p className="text-cream text-2xl font-semibold mb-1">#Brusselscoffee</p>
              <p className="text-cream/80 text-lg">@brusselsbrewery</p>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-center space-x-6 bg-brown-dark p-8 rounded-lg">
            <FaFacebook className="text-cream text-6xl flex-shrink-0" />
            <div>
              <p className="text-cream text-2xl font-semibold mb-1">Follow Us</p>
              <p className="text-cream/80 text-lg">BrusselsBrewery</p>
            </div>
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
