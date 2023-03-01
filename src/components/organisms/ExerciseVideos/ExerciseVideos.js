import Title from 'components/atoms/Title/Title';
import ExerciseVideoItem from 'components/molecules/ExerciseVideoItem/ExerciseVideoItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { BodyPartsWrapper } from '../BodyParts/BodyParts.styles';
import { ExerciseVideosWrapper } from './ExerciseVideos.styles';

const ExerciseVideos = ({ name }) => {
    const { videoData } = useSelector((state) => state.video);
    return videoData.length ? (
        <ExerciseVideosWrapper>
            <Title text={`Watch ${name.toUpperCase()} related videos`} />
            <BodyPartsWrapper>
                {videoData.map(({ video }) => (
                    <ExerciseVideoItem key={video.videoId} video={video} />
                ))}
            </BodyPartsWrapper>
        </ExerciseVideosWrapper>
    ) : (
        'Loading...'
    );
};

export default ExerciseVideos;
