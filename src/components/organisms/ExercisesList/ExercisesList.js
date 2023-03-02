import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ExerciseItem from 'components/molecules/ExerciseItem/ExerciseItem';
import { ExercisesListGridWrapper } from './ExercisesList.styles';

const ExercisesList = () => {
    const { exercises, currentPage } = useSelector((state) => state.exercises);
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
    return (
        <ExercisesListGridWrapper id="exercises">
            {exercises.length ? (
                exercises.map((e) => <ExerciseItem exercise={e} key={e.id} />)
            ) : (
                <div>Loading...</div>
            )}
        </ExercisesListGridWrapper>
    );
};

export default ExercisesList;
