import styled from 'styled-components';

export const StyledCard = styled.div`
    position: relative;
    background: rgb(51, 51, 51, 0.85);
    border-radius: 6px;
    padding: ${({ theme: { margin } }) => margin.m2};
    color: ${({ theme: { palette } }) => palette.text};
    overflow: hidden;
    @media screen and (max-width: 600px) {
        padding: ${({ theme: { margin } }) => margin.m15 + ' ' + margin.m1};
    }
`;
