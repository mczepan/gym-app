import BodyCard from 'components/molecules/BodyCard/BodyCard';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BodyPartsWrapper } from './BodyParts.styles';

const BodyParts = () => {
    const { bodyParts } = useSelector((state) => state.bodyParts);

    return (
        <BodyPartsWrapper>
            {bodyParts.map((bodyPart) => (
                <BodyCard key={bodyPart.name} bodyPart={bodyPart} />
            ))}
        </BodyPartsWrapper>
    );
};

export default BodyParts;
