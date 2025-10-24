import Button from '../components/Button';

/**
 * Handmade Just For You section with image and description
 */
const HandmadeSection = () => {
  return (
    <section className="bg-dark py-20 md:py-32" id="shop">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=800&fit=crop"
              alt="Coffee bag with two cups of coffee"
              className="rounded-lg shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Handmade Just For You
            </h2>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Our organically grown coffee beans are roasted over an open flame in a
              cast-iron skillet. There's nothing quite like a cup of Brussels Brewery
              coffee.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="text-base">
                View our menu →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandmadeSection;
