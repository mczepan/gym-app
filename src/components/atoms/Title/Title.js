import React from 'react';
import { StyledTitle } from './Title.styles';

const Title = ({ text = 'Title', size = 'medium' }) => {
    return <StyledTitle size={size}>{text} </StyledTitle>;
};

export default Title;
