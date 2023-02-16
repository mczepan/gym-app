import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
    height: calc(${({ theme: { headerHeight } }) => headerHeight} + 1.5rem);
    display: flex;
    align-items: center;
    column-gap: 1.75rem;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.titleGrey};
    letter-spacing: 0.25rem;
    font-size: ${({ theme: { fontSize } }) => fontSize.normal};
    transition: all 0.5s ease-in-out;
    position: relative;
    text-transform: uppercase;

    &.active {
        color: ${({ theme: { palette } }) => palette.textAlternative};
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
    }

    &:before {
        content: attr(data-item);
        text-decoration: underline;
        transition: 0.5s;
        color: ${({ theme: { palette } }) => palette.textAlternative};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0;
        overflow: hidden;
    }

    &:hover {
        &:before {
            width: 100%;
            transition: all 0.5s ease-in-out;
        }
    }

    @media screen and (max-width: 750px) {
        font-size: ${({ theme: { fontSizeMobile } }) => fontSizeMobile.normal};
        &:before {
            text-decoration: none;
        }
    }
`;

export const NavBarLogo = styled.img`
    height: ${({ theme: { fontSize } }) => fontSize.h1};
    cursor: pointer;
`;
