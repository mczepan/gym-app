import styled from 'styled-components';
import { BodyCardWrapper } from '../BodyCard/BodyCard.styles';

export const ExerciseVideoItemWrapper = styled(BodyCardWrapper)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 220px;
    height: 220px;
    border: none;
    background-color: ${({ theme: { palette } }) => palette.text};
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 992px) {
        width: 175px;
        height: 175px;
        &:hover {
            transform: none;
        }
    }
`;
