/**
 * Hero section with headline, description, and call-to-action buttons
 */
const HeroSection = () => {
  return (
    <section className="bg-cream py-20 md:py-32 pt-32 md:pt-40" id="hero">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight">
              Brewed To Perfection, Served With Love
            </h1>
            <p className="text-lg md:text-xl text-dark/80 leading-relaxed">
              Indulge in handcrafted coffee, freshly baked pastries, and a welcoming
              atmosphere designed to inspire and unwind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://maps.app.goo.gl/NoUsNSYMZTQdRCz28"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-base font-medium text-center inline-block"
              >
                Find a Location
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-first md:order-last">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=800&fit=crop"
              alt="Coffee cup with latte art viewed from above"
              className="rounded-lg shadow-2xl object-cover w-full h-[400px] md:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
