import styled from 'styled-components';

export const StyledGifImage = styled.img`
    align-self: center;
    border-radius: 50px;
    min-height: 400px;
    @media screen and (max-width: 992px) {
        min-height: 300px;
    }
    @media screen and (max-width: 750px) {
        min-height: 200px;
    }
`;
