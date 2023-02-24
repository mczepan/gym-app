import React from 'react';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import Search from 'components/organisms/Search/Search';
import { NoPaddingCard } from './Exercises.styles';
import BodyParts from 'components/organisms/BodyParts/BodyParts';

const Exercises = () => {
    return (
        <SectionWrapper>
            <NoPaddingCard>
                <Search />
                <BodyParts />
                {/* <div>
                    {bodyParts.map((bodyPart) => (
                        <p key={bodyPart}>{bodyPart}</p>
                    ))}
                </div> */}
            </NoPaddingCard>
        </SectionWrapper>
    );
};

export default Exercises;
