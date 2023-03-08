import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

export const StyledLoader = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
        content: '';
        width: 80px;
        height: 80px;
        border-top: 3px solid
            ${({ theme: { palette } }) => palette.textAlternative};
        border-radius: 100%;
        will-change: transform;
        animation: ${spin} 1s infinite linear;
    }
`;
