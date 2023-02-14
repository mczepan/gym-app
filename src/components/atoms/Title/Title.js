import React from 'react';
import { StyledTitle } from './Title.styles';

const Title = ({ text = 'Title' }) => {
    return <StyledTitle>{text} </StyledTitle>;
};

export default Title;
