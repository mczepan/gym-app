import React, { useState } from 'react';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import { NoPaddingCard, WaveWrapper } from './Exercises.styles';
import SearchButton from 'components/atoms/SearchButton/SearchButton';

const Exercises = () => {
    const [search, setSearch] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearch('');
        console.log('search', search);
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
                        <SearchInput
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </WaveWrapper>
            </NoPaddingCard>
        </SectionWrapper>
    );
};

export default Exercises;
