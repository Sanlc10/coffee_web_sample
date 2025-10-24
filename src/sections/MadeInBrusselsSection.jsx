import Button from '../components/Button';

/**
 * Made In Brussels section with story and cafe image
 */
const MadeInBrusselsSection = () => {
  return (
    <section className="bg-dark py-20 md:py-32" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Made In Brussels
            </h2>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Welcome to Brussels Brewery, where the charm of Brussels meets the aroma
              of freshly brewed coffee. Our café is a cozy haven where friends gather,
              ideas spark, and every sip tells a story.
            </p>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Come and experience the soul of Brussels in every cup and bite—we can't
              wait to welcome you!
            </p>
            <div className="pt-4">
              <Button variant="outline" className="text-base">
                Learn more →
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-first md:order-last">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=800&fit=crop"
              alt="European style café interior"
              className="rounded-lg shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeInBrusselsSection;
