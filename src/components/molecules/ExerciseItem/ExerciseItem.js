import React from 'react';
import {
    ChipTextWrapper,
    ExerciseItemWrapper,
    ExerciseName,
} from './ExerciseItem.styles';
import ChipText from 'components/atoms/ChipText/ChipText';

const ExerciseItem = ({ exercise: { name, gifUrl, id, target, bodyPart } }) => {
    return (
        <ExerciseItemWrapper>
            <ExerciseName>{name}</ExerciseName>
            <img src={gifUrl} alt={name} loading="lazy" />
            <ChipTextWrapper>
                <ChipText text={bodyPart} />
                <ChipText text={target} />
            </ChipTextWrapper>
        </ExerciseItemWrapper>
    );
};

export default ExerciseItem;
