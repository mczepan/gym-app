import styled from 'styled-components';

export const StyledSearchButton = styled.button`
    height: 45px;
    width: 45px;
    border-style: none;
    font-size: ${({ theme: { fontSize } }) => fontSize.normal};
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: transparent;
    transition: all 500ms ease-in-out;

    &:hover {
        background-color: ${({ theme: { palette } }) => palette.body};
    }
`;
