import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubtitle } from './Subtitle.styles';

const Subtitle = ({ text = 'Subtitle' }) => {
    return <StyledSubtitle>{text}</StyledSubtitle>;
};

export default Subtitle;

Subtitle.propTypes = {
    text: PropTypes.string,
};
