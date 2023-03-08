import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';

export const DropdownWrapper = styled.div`
    width: 80%;
    max-width: 350px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: absolute;
    top: 20%;
    z-index: 100;
`;

export const DropdownHeader = styled.div`
    padding: 15px;
    box-sizing: border-box;
    min-height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
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
    color: ${({ theme: { palette } }) => palette.title};
    transition: all 0.5s ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme: { palette } }) => palette.text};
    }
`;

export const DropDownItemDotted = styled.div`
    color: #91a5be;
    transition: all 0.2s ease-in-out;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    margin-right: 10px;
`;

export const DropDownHeaderItem = styled.span`
    color: ${({ theme: { palette }, isSelected }) =>
        isSelected ? palette.title : palette.text};
    cursor: pointer;
    width: 100%;
`;

export const StyledArrow = styled(ArrowIcon)`
    border-radius: 50px;
    padding: 2px;
    position: absolute;
    right: 5px;
    transition: all 0.4s ease-in-out;
    rotate: ${({ isOpen }) => (!isOpen ? '90deg' : '180deg')};
    &:hover {
        cursor: pointer;
        background-color: ${({ theme: { palette } }) => palette.text};
    }
`;

export const StyledCloseIcon = styled(CloseIcon)`
    border-radius: 50px;
    padding: 2px;
    position: relative;
    transition: all 0.2s ease-in-out;
    margin-right: 5px;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme: { palette } }) => palette.text};
    }
`;
