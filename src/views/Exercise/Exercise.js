import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExerciseDetails } from 'reducers/exercises/ExercisesSlice';
import Card from 'wrappers/CardWrapper/Card';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import { ExerciseDetailsWrapper, PaddingCard } from './Exercise.styles';
import ExerciseGifImage from 'components/atoms/ExerciseGifImage/ExerciseGifImage';
import ExerciseDetails from 'components/organisms/ExerciseDetails/ExerciseDetails';

const Exercise = () => {
    const { id } = useParams();

    const {
        exerciseDetails: { gifUrl, name, bodyPart, equipment, target },
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
                    <ExerciseGifImage gifUrl={gifUrl} name={name} />
                    <ExerciseDetails
                        bodyPart={bodyPart}
                        equipment={equipment}
                        name={name}
                        target={target}
                    />
                </ExerciseDetailsWrapper>
            </PaddingCard>
        </SectionWrapper>
    );
};

export default Exercise;
