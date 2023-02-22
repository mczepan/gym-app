import styled from 'styled-components';

export const StyledButton = styled.button`
    display: block;
    background-color: ${({ theme: { palette } }) => palette.textAlternative};
    color: ${({ theme: { palette } }) => palette.title};
    padding: 1rem 0.75rem;
    border-radius: 0.5rem;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    transition: background-color 0.3s ease-out;
    margin-top: ${({ theme: { margin } }) => margin.m1};
    font-size: ${({ theme: { fontSize } }) => fontSize.h3};

    &:hover {
        background-color: #d1ad40;
    }

    @media screen and (max-width: 992px) {
        padding: 1rem 1.75rem;
        font-size: ${({ theme: { fontSize } }) => fontSize.small};
    }
`;
