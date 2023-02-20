import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%,
    100% {
        clip-path: polygon(
            0% 45%,
            16% 44%,
            33% 50%,
            54% 60%,
            70% 61%,
            84% 59%,
            100% 52%,
            100% 100%,
            0% 100%
        );
    }

    50% {
        clip-path: polygon(
            0% 60%,
            15% 65%,
            34% 66%,
            51% 62%,
            67% 50%,
            84% 45%,
            100% 46%,
            100% 100%,
            0% 100%
        );
    }
`;

export const Wrapper = styled.div`
    position: relative;
`;
export const AnimatedStyledText = styled.h2`
    font-size: ${({ theme: { fontSize } }) => fontSize.big};
    position: absolute;
    letter-spacing: ${({ theme: { margin } }) => margin.m05};

    &:nth-child(1) {
        color: ${({ theme: { palette } }) => palette.titleGrey};
        -webkit-text-stroke: 2px
            ${({ theme: { palette } }) => palette.titleGrey};
    }

    &:nth-child(2) {
        color: ${({ theme: { palette } }) => palette.textAlternative};
        animation: ${animate} 2s ease-in-out infinite;
    }

    @media screen and (max-width: 1530px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.h1};
    }
    @media screen and (max-width: 1146px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.h2};
    }
    @media screen and (max-width: 992px) {
        font-size: ${({ theme: { fontSizeMobile } }) => fontSizeMobile.h1};
    }
    @media screen and (max-width: 750px) {
        font-size: ${({ theme: { fontSizeMobile } }) => fontSizeMobile.h1};
        position: relative;

        &:nth-child(1) {
            color: transparent;
            -webkit-text-stroke: 2px
                ${({ theme: { palette } }) => palette.textAlternative};
        }
        &:nth-child(2) {
            display: none;
        }
    }
`;
