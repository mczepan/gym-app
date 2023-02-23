import { StyledTitle } from 'components/atoms/Title/Title.styles';
import styled from 'styled-components';

export const BodyCardWrapper = styled.div`
    position: relative;
    height: auto;
    width: auto;
    min-width: 220px;
    min-height: 220px;
    background: #fff;
    border-radius: 20px;
    border: 5px solid #fff;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

export const BodyCardHeader = styled.div`
    height: 100px;
    width: 100%;
    background: red;
    border-radius: 100% 0% 100% 0% / 0% 50% 50% 100%;
    display: grid;
    place-items: center;
`;

export const BodyCardContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 100%);
`;

export const CustomTitle = styled(StyledTitle)`
    color: ${({ theme: { palette } }) => palette.title};
    text-transform: capitalize;
`;
