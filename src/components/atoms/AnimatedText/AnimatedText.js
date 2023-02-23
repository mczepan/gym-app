import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, AnimatedStyledText } from './AnimatedText.styles';

const AnimatedText = ({ text }) => {
    return (
        <Wrapper>
            <AnimatedStyledText>{text}</AnimatedStyledText>
            <AnimatedStyledText>{text}</AnimatedStyledText>
        </Wrapper>
    );
};

export default AnimatedText;

AnimatedText.propTypes = {
    text: PropTypes.string.isRequired,
};
