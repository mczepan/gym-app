import styled from 'styled-components';

export const BodyPartsWrapper = styled.div`
    padding: ${({ theme: { margin } }) => margin.m3};
    display: grid;
    grid-gap: ${({ theme: { margin } }) => margin.m3};
    grid-auto-flow: column;
    overflow-x: auto;
`;
