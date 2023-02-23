import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBodyPart } from 'reducers/exercises/ExercisesSlice';
import {
    BodyCardContent,
    BodyCardHeader,
    BodyCardWrapper,
    CustomTitle,
} from './BodyCard.styles';

const BodyCard = ({ bodyPart }) => {
    const dispatch = useDispatch();
    const { activeBodyPart } = useSelector((state) => state.bodyParts);

    const handleBodyPartClick = () => {
        dispatch(setActiveBodyPart(bodyPart.name));
    };

    return (
        <BodyCardWrapper onClick={handleBodyPartClick}>
            <BodyCardHeader isActive={activeBodyPart === bodyPart.name}>
                {bodyPart.iconRender()}
            </BodyCardHeader>
            <BodyCardContent>
                <CustomTitle>{bodyPart.name}</CustomTitle>
            </BodyCardContent>
        </BodyCardWrapper>
    );
};

export default BodyCard;
