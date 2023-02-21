import React from 'react';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import { ImgSvg, NoPaddingCard, WaveWrapper } from './Exercises.styles';
import { ReactComponent as Wave } from 'assets/images/wave.svg';

const Exercises = () => {
    return (
        <SectionWrapper>
            <NoPaddingCard>
                <WaveWrapper></WaveWrapper>
            </NoPaddingCard>
        </SectionWrapper>
    );
};

export default Exercises;
