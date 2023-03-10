import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 4fr;
    gap: 1.5rem;
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 0;
    }
`;

export const ExerciseImage = styled.img`
    border-radius: 1.5rem;
    justify-self: center;
    grid-column: 2;
    grid-row: 1 / span2;
    @media screen and (max-width: 992px) {
        display: none;
    }
`;

export const ExerciseImageMobile = styled.img`
    border-radius: 1.5rem;
    justify-self: center;
    @media screen and (min-width: 993px) {
        display: none;
    }
`;
