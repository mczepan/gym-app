import styled from 'styled-components';
import { StyledCard } from 'wrappers/CardWrapper/Card.styles';

export const NoPaddingCard = styled(StyledCard)`
    padding: 0rem;
    height: 75vh;
`;

export const WaveWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background: ${({ theme: { palette } }) =>
        `linear-gradient(45deg,${palette.textAlternative}, #8b6905)`};
    border-radius: 0 0 20% 20%/0 0 100% 100%;
    transform: scaleX(1.2);
    &:after {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
`;
