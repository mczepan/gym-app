import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBodyParts } from 'reducers/exercises/ExercisesSlice';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import SearchButton from 'components/atoms/SearchButton/SearchButton';
import { NoPaddingCard, WaveWrapper } from './Exercises.styles';
const Exercises = () => {
    const dispatch = useDispatch();

    const { bodyParts } = useSelector((state) => state.bodyParts);
    const [search, setSearch] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchBodyParts());
        setSearch('');
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
                            placeholderText={'Search exercises...'}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </WaveWrapper>
                <div>
                    {bodyParts.map((bodyPart) => (
                        <p key={bodyPart}>{bodyPart}</p>
                    ))}
                </div>
            </NoPaddingCard>
        </SectionWrapper>
    );
};

export default Exercises;
