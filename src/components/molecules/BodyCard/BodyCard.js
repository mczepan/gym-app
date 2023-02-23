import React from 'react';
import { ReactComponent as Icon } from 'assets/images/all.svg';
import {
    BodyCardContent,
    BodyCardHeader,
    BodyCardWrapper,
    CustomTitle,
} from './BodyCard.styles';

const BodyCard = ({ bodyPart }) => {
    return (
        <BodyCardWrapper>
            <BodyCardHeader>{bodyPart.iconRender()}</BodyCardHeader>
            <BodyCardContent>
                <CustomTitle>{bodyPart.name}</CustomTitle>
            </BodyCardContent>
        </BodyCardWrapper>
    );
};

export default BodyCard;
