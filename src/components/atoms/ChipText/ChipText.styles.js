import styled from 'styled-components';

export const StyledChipText = styled.span`
    padding: ${({ theme: { margin } }) => `${margin.m025} ${margin.m05}`};
    border-radius: 10px;
    font-weight: 600;
    font-size: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    margin: 10px 10px;
    color: whitesmoke;
    background: #feb904;
    text-transform: capitalize;
`;
