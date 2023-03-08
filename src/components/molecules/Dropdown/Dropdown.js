import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchData } from 'helpers/helpers';
import {
    DropdownBody,
    DropdownHeader,
    DropDownHeaderItem,
    DropdownItem,
    DropDownItemDotted,
    DropdownWrapper,
    StyledArrow,
    StyledCloseIcon,
} from './Dropdown.styles';
import { setCurrentPage } from 'reducers/exercises/ExercisesSlice';

const Dropdown = ({ setSearch, selectedItem }) => {
    const dispatch = useDispatch();
    const items = searchData;
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (value) => {
        dispatch(setCurrentPage(1));
        setSearch(value);
        setOpen(!isOpen);
    };

    const handleSelectedItemClear = () => {
        setSearch('');
        dispatch(setCurrentPage(1));
    };

    return (
        <DropdownWrapper>
            <DropdownHeader>
                <StyledCloseIcon onClick={handleSelectedItemClear} />
                <DropDownHeaderItem
                    isSelected={selectedItem}
                    onClick={toggleDropdown}
                >
                    {selectedItem ? selectedItem : 'Exercise type...'}
                </DropDownHeaderItem>
                <StyledArrow isOpen={isOpen} onClick={toggleDropdown} />
            </DropdownHeader>
            <DropdownBody isOpen={isOpen}>
                {items.map((item) => (
                    <DropdownItem
                        onClick={(e) => handleItemClick(item.label)}
                        id={item.id}
                    >
                        <DropDownItemDotted
                            selected={item.label === selectedItem}
                        >
                            •
                        </DropDownItemDotted>
                        {item.label}
                    </DropdownItem>
                ))}
            </DropdownBody>
        </DropdownWrapper>
    );
};

export default Dropdown;
