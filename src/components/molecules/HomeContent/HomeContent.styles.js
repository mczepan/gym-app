import styled from 'styled-components';

export const HomeContentWrapper = styled.div`
    display: grid;
    align-items: center;
    /* justify-content: start; */
    @media screen and (max-width: 992px) {
        gap: 2rem;
        margin-bottom: ${({ theme: { margin } }) => margin.m1};
    }
`;
