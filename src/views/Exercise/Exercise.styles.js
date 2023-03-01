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
    grid-template-columns: repeat(1, 1fr 1.5fr);
    column-gap: 2rem;
    row-gap: 2rem;
    justify-items: center;
    @media screen and (max-width: 992px) {
        column-gap: 0rem;
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;
