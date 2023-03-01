import React from 'react';
import { useSelector } from 'react-redux';
import ExerciseItem from 'components/molecules/ExerciseItem/ExerciseItem';
import { ExercisesListGridWrapper } from './ExercisesList.styles';

const ExercisesList = () => {
    const { exercises } = useSelector((state) => state.exercises);
    return (
        <ExercisesListGridWrapper>
            {exercises.map((e) => (
                <ExerciseItem exercise={e} key={e.id} />
            ))}
        </ExercisesListGridWrapper>
    );
};

export default ExercisesList;
