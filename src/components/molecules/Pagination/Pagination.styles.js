import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: ${({ theme: { margin } }) => `${margin.m1} ${margin.m05}`};
`;

export const PaginationElement = styled.div`
    color: ${({ theme: { palette } }) => palette.title};
    cursor: pointer;
    opacity: ${({ isActive }) => (isActive ? '1' : '0.8')};
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${({ theme: { fontSize } }) => fontSize.small};

    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 5px;
    box-shadow: -1px -1px 34px -12px rgba(255, 255, 255, 1);

    border: ${({ isActive }) => (isActive ? '1px solid black' : 'none')};
    font-weight: ${({ isActive }) => (isActive ? '600' : 'none')};
    background: ${({ isActive, theme: { palette } }) =>
        isActive ? palette.container : palette.container};

    &:hover {
        opacity: 1;
    }
`;
