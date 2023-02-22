import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ text = 'Button', ...props }) => {
    return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;
