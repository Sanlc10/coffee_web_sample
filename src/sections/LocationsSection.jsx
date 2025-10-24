/**
 * Locations section displaying three Brussels Brewery locations
 */
const LocationsSection = () => {
  const locations = [
    {
      city: 'Brussels',
      address: 'Rue de Midi 45, 1000',
      country: 'Brussels, Belgium',
    },
    {
      city: 'Anderlecht',
      address: 'Pl. de Linde 21, 1070',
      country: 'Anderlecht, Belgium',
    },
    {
      city: 'Machelen',
      address: 'Diegemplein 2, 1830',
      country: 'Machelen, Belgium',
    },
  ];

  return (
    <section className="bg-dark py-20 md:py-32" id="locations">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-cream text-center mb-16">
          Locations
        </h2>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="text-center space-y-3 p-6 rounded-lg hover:bg-cream/5 transition-colors duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-cream">
                {location.city}
              </h3>
              <p className="text-cream/80 text-lg">{location.address}</p>
              <p className="text-cream/80 text-lg">{location.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
