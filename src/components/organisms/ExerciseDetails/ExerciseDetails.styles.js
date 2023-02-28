import styled from 'styled-components';

export const ExerciseDetailsContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: ${({ theme: { margin } }) => margin.m15};
    padding: ${({ theme: { margin } }) => `${margin.m15} ${margin.m05}`};
    @media screen and (max-width: 600px) {
        padding: ${({ theme: { margin } }) => `${margin.m025} ${margin.m025}`};
    }
`;

export const ContentText = styled.p`
    text-align: justify;
    letter-spacing: 3px;
    font-size: 16px;
    line-height: 1.5rem;
    font-weight: 600;
    font-stretch: expanded;
    color: white;
`;
