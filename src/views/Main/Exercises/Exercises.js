import React from 'react';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import { NoPaddingCard, WaveWrapper } from './Exercises.styles';
import SearchButton from 'components/atoms/SearchButton/SearchButton';

const Exercises = () => {
    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <SectionWrapper>
            <NoPaddingCard>
                <WaveWrapper>
                    <form
                        style={{ position: 'relative' }}
                        onSubmit={handleSearchSubmit}
                    >
                        <SearchButton />
                        <SearchInput />
                    </form>
                </WaveWrapper>
            </NoPaddingCard>
        </SectionWrapper>
    );
};

export default Exercises;
