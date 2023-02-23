import React, { useState } from 'react';
import SearchButton from 'components/atoms/SearchButton/SearchButton';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import { WaveWrapper } from './Search.styles';

const Search = () => {
    const [search, setSearch] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearch('');
    };
    return (
        <WaveWrapper>
            <form
                style={{ position: 'relative' }}
                onSubmit={handleSearchSubmit}
            >
                <SearchButton />
                <SearchInput
                    placeholderText={'Search exercises...'}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </WaveWrapper>
    );
};

export default Search;
