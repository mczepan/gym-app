import ExerciseItem from 'components/molecules/ExerciseItem/ExerciseItem';
import React from 'react';
import { useSelector } from 'react-redux';

const ExercisesList = () => {
    const { exercises } = useSelector((state) => state);
    return (
        <div>
            {exercises.map((e) => (
                <ExerciseItem exercise={e} />
            ))}
        </div>
    );
};

export default ExercisesList;
