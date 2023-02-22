import styled from 'styled-components';

export const StyledInput = styled.input`
    height: 50px;
    width: 50px;
    border-style: none;
    border-width: none;
    padding: ${({ theme: { margin } }) => margin.m1};
    box-sizing: border-box;
    font-size: ${({ theme: { fontSize } }) => fontSize.h3};
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    padding-left: ${({ theme: { margin } }) => margin.m3};
    color: ${({ theme: { palette } }) => palette.container};
    ::placeholder {
        color: ${({ theme: { palette } }) => palette.text};
        font-size: ${({ theme: { fontSize } }) => fontSize.h3};
    }

    width: 500px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 2px solid ${({ theme: { palette } }) => palette.text};
    @media screen and (max-width: 992px) {
        width: 250px;
    }
`;
