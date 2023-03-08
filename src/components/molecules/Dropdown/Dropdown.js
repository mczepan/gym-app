import React, { useState } from 'react';
import { searchData } from 'helpers/helpers';
import {
    DropdownBody,
    DropdownHeader,
    DropdownItem,
    DropDownItemDotted,
    DropdownWrapper,
} from './Dropdown.styles';

const Dropdown = ({ setSearch, selectedItem }) => {
    const items = searchData;
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!isOpen);
    const handleItemClick = (id) => {
        selectedItem === id ? setSearch(null) : setSearch(id);
    };

    return (
        <DropdownWrapper>
            <DropdownHeader onClick={toggleDropdown}></DropdownHeader>
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
