import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ExerciseItem from 'components/molecules/ExerciseItem/ExerciseItem';
import { ExercisesListGridWrapper } from './ExercisesList.styles';

const ExercisesList = () => {
    const { exercises, currentPage } = useSelector((state) => state.exercises);
    useEffect(() => {
        const scrollTo = document.getElementById('exercises');
        scrollTo.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
        });
    }, [currentPage]);
    return (
        <ExercisesListGridWrapper id="exercises">
            {exercises.map((e) => (
                <ExerciseItem exercise={e} key={e.id} />
            ))}
        </ExercisesListGridWrapper>
    );
};

export default ExercisesList;
