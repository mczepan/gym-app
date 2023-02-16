import React from 'react';
import Logo from 'assets/images/logo192.png';

import {
    NavBarLogo,
    StyledNavigation,
    StyledNavLink,
} from './Navigation.styles';

const Navigation = () => {
    return (
        <header>
            <StyledNavigation>
                <StyledNavLink to={`/`}>
                    <NavBarLogo src={Logo} alt="logo image" />
                </StyledNavLink>
                <StyledNavLink data-item="Home" to={`/`}>
                    Home
                </StyledNavLink>
                <StyledNavLink data-item="Exercises" to={`/exercises`}>
                    Exercises
                </StyledNavLink>
            </StyledNavigation>
        </header>
    );
};

export default Navigation;
