import React from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from 'hooks/DimensionsHook/useWindowDimensions ';
import ChipText from 'components/atoms/ChipText/ChipText';
import {
    ChipWrapper,
    DetailsButton,
    ExerciseItemWrapper,
    ExerciseName,
} from './ExerciseItem.styles';

const ExerciseItem = ({ exercise: { name, gifUrl, id, target, bodyPart } }) => {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();

    const smallScreen = width < 992;

    const handleItemClick = () => {
        navigate(`${id}`);
    };

    return (
        <ExerciseItemWrapper onClick={smallScreen ? null : handleItemClick}>
            <ExerciseName>{name}</ExerciseName>
            <img src={gifUrl} alt={name} />
            <ChipWrapper>
                <ChipText text={bodyPart} />
                <ChipText text={target} />
            </ChipWrapper>
            <DetailsButton onClick={handleItemClick}>Details</DetailsButton>
        </ExerciseItemWrapper>
    );
};

export default ExerciseItem;
