import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/images/search.svg';
import { StyledSearchButton } from './SearchButton.styles';

const SearchButton = () => {
    return (
        <StyledSearchButton type="submit">
            <SearchIcon style={{ height: '30px', width: '30px' }} />
        </StyledSearchButton>
    );
};

export default SearchButton;
