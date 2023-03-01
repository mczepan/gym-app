import styled from 'styled-components';
import { BodyPartsWrapper } from '../BodyParts/BodyParts.styles';

export const ExerciseVideosWrapper = styled.div`
    grid-column: span 2;
    gap: 2rem;
    width: 100%;
    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const VideosCardWrapper = styled(BodyPartsWrapper)``;
