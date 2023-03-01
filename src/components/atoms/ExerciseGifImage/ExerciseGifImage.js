import React from 'react';
import { StyledGifImage } from './ExerciseGifImage.styles';

const ExerciseGifImage = ({ name, gifUrl }) => {
    return <StyledGifImage src={gifUrl} alt={name}></StyledGifImage>;
};

export default ExerciseGifImage;
