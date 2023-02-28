import { StyledButton } from 'components/atoms/Button/Button.styles';
import styled from 'styled-components';

export const ExerciseItemWrapper = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
    padding: 1.5rem 0;
    border-radius: 1.35rem;
    gap: 0.75rem;
    box-shadow: 0 20px 20px rgba(100, 100, 100, 0.2),
        0px 0px 50px rgba(100, 100, 100, 0.2);
    background-color: ${({ theme: { palette } }) => palette.container};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 992px) {
        padding: ${({ theme: { margin } }) => margin.m1};
    }
    @media screen and (max-width: 600px) {
        padding: ${({ theme: { margin } }) => `${margin.m1} ${margin.m025}`};
    }

    @media screen and (min-width: 992px) {
        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const ChipWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`;

export const ExerciseName = styled.span`
    /* height: 100%; */
    color: ${({ theme: { palette } }) => palette.title};
    font-size: ${({ theme: { fontSize } }) => fontSize.normal};
    font-weight: 600;
    text-transform: capitalize;
    display: table;
    margin: auto;
    padding: ${({ theme: { margin } }) => margin.m05};
`;

export const DetailsButton = styled(StyledButton)`
    padding: 0.5rem 1rem;
    background-color: #e1dede;
    color: ${({ theme: { palette } }) => palette.body};
    margin: inherit;
    @media screen and (min-width: 992px) {
        display: none;
    }
`;
