import BodyCard from 'components/molecules/BodyCard/BodyCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { BodyPartsWrapper } from './BodyParts.styles';

const BodyParts = () => {
    const { bodyParts } = useSelector((state) => state.bodyParts);

    return (
        <BodyPartsWrapper>
            {bodyParts.map((bodyPart) => (
                <BodyCard key={bodyPart} />
            ))}
        </BodyPartsWrapper>
    );
};

export default BodyParts;
