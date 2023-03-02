import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercises } from 'reducers/exercises/ExercisesSlice';
import SearchButton from 'components/atoms/SearchButton/SearchButton';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import { WaveWrapper } from './Search.styles';

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const { activeBodyPart } = useSelector((state) => state.exercises);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(
            fetchExercises({
                bodyPart: activeBodyPart,
                search: search.toLowerCase(),
                pageNr: 1,
            })
        );
        setSearch('');
    };
    return (
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
    );
};

export default Search;
