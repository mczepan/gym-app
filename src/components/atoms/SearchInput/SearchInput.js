import React from 'react';
import { StyledInput } from './SearchInput.styles';

const SearchInput = ({ ...props }) => {
    return (
        <StyledInput type="text" placeholder="Search exercises..." {...props} />
    );
};

export default SearchInput;
