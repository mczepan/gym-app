import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExerciseDetails } from 'reducers/exercises/ExercisesSlice';
import Card from 'wrappers/CardWrapper/Card';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import { ExerciseDetailsWrapper } from './Exercise.styles';

const Exercise = () => {
    const { id } = useParams();

    const { exerciseDetails } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchExerciseDetails(id));
        }
    }, [id, dispatch]);

    return (
        <SectionWrapper>
            <Card>
                <ExerciseDetailsWrapper>
                    <div>s1</div>
                    <div>s2</div>
                </ExerciseDetailsWrapper>
            </Card>
        </SectionWrapper>
    );
};

export default Exercise;
