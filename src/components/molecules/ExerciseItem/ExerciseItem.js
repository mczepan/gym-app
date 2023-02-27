import React from 'react';
import { ExerciseItemWrapper, ExerciseName } from './ExerciseItem.styles';
import ChipText from 'components/atoms/ChipText/ChipText';
import { useNavigate } from 'react-router-dom';

const ExerciseItem = ({ exercise: { name, gifUrl, id, target, bodyPart } }) => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`${id}`);
    };

    return (
        <ExerciseItemWrapper onClick={handleItemClick}>
            <ExerciseName>{name}</ExerciseName>
            <img src={gifUrl} alt={name} />
            <ChipText text={bodyPart} />
            <ChipText text={target} />
        </ExerciseItemWrapper>
    );
};

export default ExerciseItem;
