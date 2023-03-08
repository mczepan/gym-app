import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ExerciseItem from 'components/molecules/ExerciseItem/ExerciseItem';
import { ExercisesListGridWrapper } from './ExercisesList.styles';
import Loader from 'components/atoms/Loader/Loader';
import NotFoundTitle from 'components/atoms/NotFoundTitle/NotFoundTitle';

const ExercisesList = () => {
    const { exercises, currentPage, isLoading } = useSelector(
        (state) => state.exercises
    );
    useEffect(() => {
        setTimeout(() => {
            if (exercises.length) {
                const scrollTo = document.getElementById('exercises');
                scrollTo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        }, [1000]);
    }, [currentPage, exercises]);
    return exercises.length ? (
        <ExercisesListGridWrapper id="exercises">
            {exercises.map((e) => (
                <ExerciseItem exercise={e} key={e.id} />
            ))}
        </ExercisesListGridWrapper>
    ) : isLoading ? (
        <Loader />
    ) : (
        <NotFoundTitle />
    );
};

export default ExercisesList;
