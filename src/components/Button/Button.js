import PropTypes from 'prop-types';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ label, type }) => (
  <Link to="sign-up">
    <button type={type} className="btn">{label}</button>
  </Link>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type : PropTypes.string,
};

export default Button;
