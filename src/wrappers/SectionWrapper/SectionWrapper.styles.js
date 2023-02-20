import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
    padding: ${({ theme: { margin } }) => margin.m1};

    @media screen and (max-width: 750px) {
        padding: ${({ theme: { margin } }) => margin.m025};
    }
`;
