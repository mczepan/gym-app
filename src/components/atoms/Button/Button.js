import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ text = 'Button' }) => {
    return <StyledButton>{text}</StyledButton>;
};

export default Button;
