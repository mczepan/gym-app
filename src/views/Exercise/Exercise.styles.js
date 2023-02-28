import styled from 'styled-components';
import { StyledCard } from 'wrappers/CardWrapper/Card.styles';

export const PaddingCard = styled(StyledCard)`
    padding: ${({ theme: { margin } }) => `${margin.m2} 4rem`};
    @media screen and (max-width: 992px) {
        padding: ${({ theme: { margin } }) => `${margin.m15} ${margin.m1}`};
    }
    @media screen and (max-width: 600px) {
        padding: ${({ theme: { margin } }) => `${margin.m1} ${margin.m025}`};
    }
`;

export const ExerciseDetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1.5fr 1fr);
    column-gap: 2rem;
    /* align-items: center;*/
    justify-items: center;
    @media screen and (max-width: 992px) {
        row-gap: 2rem;
    }

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column-reverse;
        column-gap: 1rem;
    }
`;
