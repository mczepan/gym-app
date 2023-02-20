import styled from 'styled-components';

export const StyledContainerWrapper = styled.div`
    margin-left: ${({ theme: { margin } }) => margin.m3};
    margin-right: ${({ theme: { margin } }) => margin.m3};

    @media screen and (max-width: 992px) {
        margin-left: ${({ theme: { margin } }) => margin.m2};
        margin-right: ${({ theme: { margin } }) => margin.m2};
    }
    @media screen and (max-width: 600px) {
        margin-left: ${({ theme: { margin } }) => margin.m05};
        margin-right: ${({ theme: { margin } }) => margin.m05};
    }
`;
