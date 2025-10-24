import PropTypes from 'prop-types';

/**
 * Reusable Button component with primary and secondary variants
 * @param {Object} props - Component props
 * @param {string} props.children - Button text content
 * @param {string} props.variant - Button style variant ('primary' or 'secondary')
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.className - Additional CSS classes
 */
const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block';

  const variants = {
    primary: 'bg-dark text-white hover:bg-darker',
    secondary: 'border-2 border-dark text-dark bg-transparent hover:bg-dark hover:text-white',
    outline: 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-dark',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
