import styled from 'styled-components';

export const DropdownWrapper = styled.div`
    width: 80%;
    max-width: 350px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: absolute;
    top: 30%;
    z-index: 100;
`;

export const DropdownHeader = styled.div`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DropdownBody = styled.div`
    position: relative;
    z-index: 100;
    height: auto;
    max-height: 200px;
    padding: 5px;
    border-top: 1px solid #e5e8ec;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    overflow-y: auto;
`;

export const DropdownItem = styled.div`
    padding: 10px;
    display: flex;
    &:hover {
        cursor: pointer;
    }
`;

export const DropDownItemDotted = styled.div`
    color: #91a5be;
    transition: all 0.2s ease-in-out;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    margin-right: 10px;
`;
