import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './SearchInput.styles';

const SearchInput = ({ placeholderText, ...props }) => {
    return <StyledInput type="text" placeholder={placeholderText} {...props} />;
};

export default SearchInput;

SearchInput.propTypes = {
    placeholderText: PropTypes.string,
};
