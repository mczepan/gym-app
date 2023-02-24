import BodyCard from 'components/molecules/BodyCard/BodyCard';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BodyPartsWrapper } from './BodyParts.styles';

const BodyParts = () => {
    const { bodyParts, activeBodyPart } = useSelector(
        (state) => state.bodyParts
    );

    useEffect(() => {
        const scrollTo = document.getElementById(activeBodyPart);
        scrollTo.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
        });
    }, [activeBodyPart]);

    return (
        <BodyPartsWrapper>
            {bodyParts.map((bodyPart) => (
                <BodyCard key={bodyPart.name} bodyPart={bodyPart} />
            ))}
        </BodyPartsWrapper>
    );
};

export default BodyParts;
