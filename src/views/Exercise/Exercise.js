import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExerciseDetails } from 'reducers/exercises/ExercisesSlice';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import { ExerciseDetailsWrapper, PaddingCard } from './Exercise.styles';
import ExerciseGifImage from 'components/atoms/ExerciseGifImage/ExerciseGifImage';
import ExerciseDetails from 'components/organisms/ExerciseDetails/ExerciseDetails';
import { fetchVideoData } from 'reducers/video/VideoSlice';

const Exercise = () => {
    const { id: exerciseId } = useParams();

    const {
        exerciseDetails: { gifUrl, name, id },
    } = useSelector((state) => state.exercises);
    const { videoData } = useSelector((state) => state.video);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (id !== exerciseId) {
                const {
                    payload: { name },
                } = await dispatch(fetchExerciseDetails(exerciseId));
                await dispatch(fetchVideoData(name));
            }
        })();
    }, [exerciseId, dispatch]);

    console.log('videoData', videoData);

    return (
        <SectionWrapper>
            <PaddingCard>
                <ExerciseDetailsWrapper>
                    <ExerciseDetails />
                    <ExerciseGifImage gifUrl={gifUrl} name={name} />
                    <div>1</div>
                </ExerciseDetailsWrapper>
            </PaddingCard>
        </SectionWrapper>
    );
};

export default Exercise;
