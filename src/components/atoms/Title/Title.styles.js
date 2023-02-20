import styled from 'styled-components';

export const StyledTitle = styled.span`
    font-size: ${({ size, theme: { fontSize } }) =>
        size === 'medium'
            ? fontSize.h2
            : size === 'large'
            ? fontSize.h1
            : fontSize.h3};
    color: ${({ theme: { palette } }) => palette.textAlternative};

    @media screen and (max-width: 992px) {
        font-size: ${({ size, theme: { fontSizeMobile } }) =>
            size === 'medium'
                ? fontSizeMobile.h2
                : size === 'large'
                ? fontSizeMobile.h1
                : fontSizeMobile.h3};
    }
    /* text-align: center; */
`;
