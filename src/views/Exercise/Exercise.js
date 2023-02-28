import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExerciseDetails } from 'reducers/exercises/ExercisesSlice';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import { ExerciseDetailsWrapper, PaddingCard } from './Exercise.styles';
import ExerciseGifImage from 'components/atoms/ExerciseGifImage/ExerciseGifImage';
import ExerciseDetails from 'components/organisms/ExerciseDetails/ExerciseDetails';

const Exercise = () => {
    const { id } = useParams();

    const {
        exerciseDetails: { gifUrl, name },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchExerciseDetails(id));
        }
    }, [id, dispatch]);

    return (
        <SectionWrapper>
            <PaddingCard>
                <ExerciseDetailsWrapper>
                    <ExerciseDetails />
                    <ExerciseGifImage gifUrl={gifUrl} name={name} />
                </ExerciseDetailsWrapper>
            </PaddingCard>
        </SectionWrapper>
    );
};

export default Exercise;
