import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ text = 'Button', ...props }) => {
    return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;

Button.propTypes = {
    text: PropTypes.string,
};
