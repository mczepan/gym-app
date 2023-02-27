import styled from 'styled-components';

export const StyledChipText = styled.span`
    padding: ${({ theme: { margin } }) => `${margin.m025} ${margin.m05}`};
    border-radius: 10px;
    font-weight: 600;
    font-size: ${({ theme: { fontSize } }) => fontSize.smaller};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    margin: ${({ theme: { margin } }) => `${margin.m05} ${margin.m05}`};
    color: whitesmoke;
    background: #feb904;
    text-transform: capitalize;
    width: fit-content;
    display: inline-block;
`;
