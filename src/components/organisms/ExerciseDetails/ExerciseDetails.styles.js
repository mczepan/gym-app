import styled from 'styled-components';

export const ExerciseDetailsContentWrapper = styled.div`
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: ${({ theme: { margin } }) => margin.m15};
    padding: ${({ theme: { margin } }) => `${margin.m15} ${margin.m05}`};
    @media screen and (max-width: 600px) {
        padding: ${({ theme: { margin } }) => `${margin.m025} ${margin.m025}`};
    }
    @media screen and (max-width: 992px) {
        grid-column: span 2;
    }
`;

export const ContentText = styled.p`
    grid-column: span 2;
    text-align: justify;
    letter-spacing: 3px;
    font-size: 16px;
    line-height: 1.5rem;
    font-weight: 600;
    font-stretch: expanded;
    color: white;
`;
