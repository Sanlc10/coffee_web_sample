import { useEffect } from 'react';

/**
 * Menu Modal Component - Full menu overlay with all Brussels Brewery items
 * @param {boolean} isMenuOpen - Controls modal visibility
 * @param {function} setIsMenuOpen - Function to toggle modal
 */
const MenuModal = ({ isMenuOpen, setIsMenuOpen }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;

  const closeMenu = () => setIsMenuOpen(false);

  // Menu data structure
  const menuSections = [
    {
      title: 'Breakfast',
      items: [
        {
          name: 'Classic Croissant',
          price: '$4.50',
          description: 'Buttery French pastry, freshly baked every morning.',
        },
        {
          name: 'Brussels Toast',
          price: '$6.50',
          description: 'Sourdough bread with avocado, poached egg, and olive oil.',
        },
        {
          name: 'Belgian Waffles',
          price: '$8.00',
          description: 'Served with maple syrup, berries, and whipped cream.',
        },
        {
          name: 'House Omelette',
          price: '$7.50',
          description: 'Organic eggs with serrano ham, gouda cheese, and spinach.',
        },
      ],
    },
    {
      title: 'Hot Drinks',
      items: [
        { name: 'Espresso', price: '$3.50' },
        { name: 'Americano', price: '$4.00' },
        { name: 'Cappuccino', price: '$5.50' },
        { name: 'Vanilla / Caramel / Hazelnut Latte', price: '$6.00' },
        { name: 'Belgian Mocha', price: '$6.50' },
        { name: 'Matcha Latte', price: '$6.50' },
        { name: 'Artisan Hot Chocolate', price: '$6.00' },
      ],
    },
    {
      title: 'Cold Drinks',
      items: [
        {
          name: 'Brussels Cold Brew',
          price: '$6.50',
          description: 'Slow-brewed for 18 hours, smooth and refreshing.',
        },
        { name: 'Iced Latte', price: '$6.00' },
        { name: 'Caramel or Mocha Frappe', price: '$7.00' },
        { name: 'Rosemary & Honey Lemonade', price: '$5.50' },
        { name: 'Homemade Iced Tea', price: '$5.00' },
      ],
    },
    {
      title: 'Desserts & Bakery',
      items: [
        { name: 'Apple Tart', price: '$7.00' },
        { name: 'Berry Cheesecake', price: '$7.50' },
        { name: 'Walnut Brownie', price: '$5.50' },
        { name: 'Homemade Banana Bread', price: '$5.00' },
        { name: 'Belgian Cookies (2 pcs)', price: '$4.00' },
      ],
    },
    {
      title: 'Sandwiches & Snacks',
      items: [
        {
          name: 'Brussels Sandwich',
          price: '$8.50',
          description: 'Serrano ham, gouda cheese, sun-dried tomato, and pesto.',
        },
        {
          name: 'Smoked Salmon Bagel',
          price: '$9.00',
          description: 'With cream cheese, cucumber, and dill.',
        },
        {
          name: 'Mediterranean Wrap',
          price: '$8.00',
          description: 'Chicken, hummus, spinach, and olives.',
        },
      ],
    },
    {
      title: 'Extras',
      items: [
        { name: 'Plant-based milk (almond, soy, oat)', price: '+$1.00' },
        { name: 'Extra espresso shot', price: '+$1.00' },
        { name: 'Homemade syrups (vanilla, caramel, lavender)', price: '+$1.00' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
        onClick={closeMenu}
      ></div>

      {/* Modal Content Container */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-cream max-w-4xl w-full rounded-lg shadow-2xl my-8">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-dark hover:text-gold transition-colors z-10"
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Scrollable Content */}
          <div className="p-6 md:p-12 max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="text-center mb-8 border-b border-brown pb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-2">
                Brussels Brewery
              </h1>
              <p className="text-lg text-brown italic">
                Artisan Coffee • Fresh Bakery • European Atmosphere
              </p>
            </div>

            {/* Menu Sections */}
            <div className="space-y-8">
              {menuSections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-brown-dark mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start gap-4"
                      >
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-dark">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-gray-600 italic mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <span className="text-gold font-semibold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
