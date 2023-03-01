import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExerciseDetails } from 'reducers/exercises/ExercisesSlice';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import { ExerciseDetailsWrapper, PaddingCard } from './Exercise.styles';
import ExerciseGifImage from 'components/atoms/ExerciseGifImage/ExerciseGifImage';
import ExerciseDetails from 'components/organisms/ExerciseDetails/ExerciseDetails';
import { fetchVideoData } from 'reducers/video/VideoSlice';
import ExerciseVideos from 'components/organisms/ExerciseVideos/ExerciseVideos';

const Exercise = () => {
    const { id: exerciseId } = useParams();

    const {
        exerciseDetails: { gifUrl, name, id },
    } = useSelector((state) => state.exercises);

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

    return (
        <SectionWrapper>
            <PaddingCard>
                {name ? (
                    <ExerciseDetailsWrapper>
                        <ExerciseDetails />
                        <ExerciseGifImage gifUrl={gifUrl} name={name} />
                        <ExerciseVideos name={name}>1</ExerciseVideos>
                        <div style={{ gridColumn: 'span 2' }}>2</div>
                    </ExerciseDetailsWrapper>
                ) : null}
            </PaddingCard>
        </SectionWrapper>
    );
};

export default Exercise;
