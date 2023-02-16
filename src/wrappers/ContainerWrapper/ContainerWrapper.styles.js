import styled from 'styled-components';

export const StyledContainerWrapper = styled.div`
    margin-left: ${({ theme: { margin } }) => margin.m3};
    margin-right: ${({ theme: { margin } }) => margin.m3};

    @media screen and (max-width: 950px) {
        margin-left: ${({ theme: { margin } }) => margin.m25};
        margin-right: ${({ theme: { margin } }) => margin.m25};
    }
    @media screen and (max-width: 600px) {
        margin-left: ${({ theme: { margin } }) => margin.m15};
        margin-right: ${({ theme: { margin } }) => margin.m15};
    }
`;
