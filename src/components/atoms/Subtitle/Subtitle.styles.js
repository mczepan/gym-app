import styled from 'styled-components';

export const StyledSubtitle = styled.span`
    font-size: ${({ theme: { fontSize } }) => fontSize.normal};
    color: ${({ theme: { palette } }) => palette.title};
    text-align: center;
    padding: 0.25rem;
`;
