import React from 'react';
import { StyledSubtitle } from './Subtitle.styles';

const Subtitle = ({ text = 'Subtitle' }) => {
    return <StyledSubtitle>{text}</StyledSubtitle>;
};

export default Subtitle;
