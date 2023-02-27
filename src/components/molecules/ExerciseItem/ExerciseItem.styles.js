import styled from 'styled-components';

export const ExerciseItemWrapper = styled.div`
    justify-self: center;
    display: flex;
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

export const ExerciseName = styled.span`
    color: ${({ theme: { palette } }) => palette.title};
    font-size: ${({ theme: { fontSize } }) => fontSize.normal};
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
`;

export const ChipTextWrapper = styled.div`
    margin: 5px;
`;
