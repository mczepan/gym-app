import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setActiveBodyPart,
    setCurrentPage,
} from 'reducers/exercises/ExercisesSlice';
import {
    BodyCardContent,
    BodyCardHeader,
    BodyCardWrapper,
    CustomTitle,
} from './BodyCard.styles';

const BodyCard = ({ bodyPart }) => {
    const dispatch = useDispatch();
    const { activeBodyPart } = useSelector((state) => state.exercises);

    const handleBodyPartClick = () => {
        dispatch(setCurrentPage(1));
        dispatch(setActiveBodyPart(bodyPart.name));
    };

    return (
        <BodyCardWrapper onClick={handleBodyPartClick} id={bodyPart.name}>
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
