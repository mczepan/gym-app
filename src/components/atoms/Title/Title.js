import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styles';

const Title = ({ text = 'Title', size = 'medium', ...props }) => {
    return (
        <StyledTitle size={size} {...props}>
            {text}
        </StyledTitle>
    );
};

export default Title;

Title.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
};
