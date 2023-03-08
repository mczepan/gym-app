import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercises } from 'reducers/exercises/ExercisesSlice';
import { WaveWrapper } from './Search.styles';
import Dropdown from 'components/molecules/Dropdown/Dropdown';

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const { activeBodyPart, currentPage } = useSelector(
        (state) => state.exercises
    );

    useEffect(() => {
        if (currentPage) {
            dispatch(
                fetchExercises({
                    bodyPart: activeBodyPart,
                    search: search.toLowerCase(),
                    pageNr: currentPage,
                })
            );
        }
    }, [currentPage, activeBodyPart, dispatch, search]);

    return (
        <WaveWrapper>
            <Dropdown setSearch={setSearch} selectedItem={search} />
        </WaveWrapper>
    );
};

export default Search;
