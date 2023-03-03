import { StyledTitle } from 'components/atoms/Title/Title.styles';
import styled from 'styled-components';

export const BodyCardWrapper = styled.div`
    position: relative;
    height: auto;
    width: auto;
    min-width: 175px;
    min-height: 175px;
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
    @media screen and (max-width: 992px) {
        &:hover {
            transform: none;
        }
    }
    @media screen and (max-width: 600px) {
        min-width: 130px;
        min-height: 130px;
        border: none;
    }
`;

export const BodyCardHeader = styled.div`
    height: 100px;
    width: 100%;
    background: ${({ isActive, theme: { palette } }) =>
        isActive
            ? `linear-gradient(45deg,${palette.textAlternative}, #8b6905)`
            : 'inherit'};
    border-radius: ${({ isActive }) =>
        isActive
            ? '100% 0% 100% 0% / 0% 50% 50% 100%'
            : '100% 0% 100% 0% / 0% 0% 0% 0%'};
    display: grid;
    place-items: center;
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: 600px) {
        box-sizing: border-box;
        height: auto;
        border: none;
        background: none;
        padding-top: 10px;
        transition: all 0.3s ease-in-out;
        border-top: ${({ theme: { palette }, isActive }) =>
            isActive
                ? `10px solid ${palette.textAlternative}`
                : '10px solid transparent'};
`;

export const BodyCardContent = styled.div`
    position: absolute;
    width: max-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 100%);
`;

export const CustomTitle = styled(StyledTitle)`
    color: ${({ theme: { palette } }) => palette.title};
    text-transform: capitalize;
`;
