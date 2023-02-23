import React from 'react';
import {
    BodyCardContent,
    BodyCardHeader,
    BodyCardWrapper,
    CustomTitle,
} from './BodyCard.styles';

const BodyCard = ({ bodyPart, selectedBodyPart, setSelectedBodyPart }) => {
    const handleBodyPartClick = () => {
        setSelectedBodyPart(bodyPart.name);
    };

    return (
        <BodyCardWrapper onClick={handleBodyPartClick}>
            <BodyCardHeader isActive={selectedBodyPart === bodyPart.name}>
                {bodyPart.iconRender()}
            </BodyCardHeader>
            <BodyCardContent>
                <CustomTitle>{bodyPart.name}</CustomTitle>
            </BodyCardContent>
        </BodyCardWrapper>
    );
};

export default BodyCard;
