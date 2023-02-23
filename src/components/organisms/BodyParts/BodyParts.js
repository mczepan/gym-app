import BodyCard from 'components/molecules/BodyCard/BodyCard';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BodyPartsWrapper } from './BodyParts.styles';

const BodyParts = () => {
    const [selectedBodyPart, setSelectedBodyPart] = useState('all');
    const { bodyParts } = useSelector((state) => state.bodyParts);

    return (
        <BodyPartsWrapper>
            {bodyParts.map((bodyPart) => (
                <BodyCard
                    key={bodyPart.name}
                    bodyPart={bodyPart}
                    setSelectedBodyPart={setSelectedBodyPart}
                    selectedBodyPart={selectedBodyPart}
                />
            ))}
        </BodyPartsWrapper>
    );
};

export default BodyParts;
