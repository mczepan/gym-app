import styled from 'styled-components';

export const BodyPartsWrapper = styled.div`
    padding: ${({ theme: { margin } }) => margin.m3};
    display: grid;
    grid-gap: ${({ theme: { margin } }) => margin.m3};
    grid-auto-flow: column;
    overflow-x: auto;

    @media screen and (max-width: 992px) {
        padding: ${({ theme: { margin } }) => `${margin.m2} ${margin.m15}`};
        grid-gap: ${({ theme: { margin } }) => margin.m2};
    }

    @media screen and (max-width: 600px) {
        padding: ${({ theme: { margin } }) => `${margin.m2} ${margin.m05}`};
        grid-gap: ${({ theme: { margin } }) => margin.m15};
    }
`;
