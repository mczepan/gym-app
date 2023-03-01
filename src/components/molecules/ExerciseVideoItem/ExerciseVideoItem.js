import Subtitle from 'components/atoms/Subtitle/Subtitle';
import React from 'react';
import { ExerciseVideoItemWrapper } from './ExerciseVideoItem.styles';

const ExerciseVideoItem = ({ video: { thumbnails, title, videoId } }) => {
    return (
        <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noreferrer"
        >
            <ExerciseVideoItemWrapper>
                <img src={thumbnails[0].url} alt={title} />
                <Subtitle text={title} />
            </ExerciseVideoItemWrapper>
        </a>
    );
};

export default ExerciseVideoItem;
