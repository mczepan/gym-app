import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledNavLink } from './Navigation.styles';

const Navigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink to={`/`}>Home</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to={`/exercises`}>
                            Exercises
                        </StyledNavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
