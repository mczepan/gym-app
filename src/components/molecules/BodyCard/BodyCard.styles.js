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
    @media screen and (min-width: 992px) {
        &:hover {
            transform: scale(1.1);
        }
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
