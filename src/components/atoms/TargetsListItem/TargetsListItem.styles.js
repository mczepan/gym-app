import styled from 'styled-components';
import Image from 'assets/images/biceps.svg';

export const StyledTargetsListItem = styled.li`
    position: relative;
    text-transform: uppercase;
    background: ${({ theme: { palette } }) => palette.title};
    font-size: ${({ theme: { fontSize } }) => fontSize.normal};
    letter-spacing: 5px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    padding: ${({ theme: { margin } }) => margin.m05};
    border-radius: 30px;

    list-style-type: none;
    margin-bottom: ${({ theme: { margin } }) => margin.m15};
    list-style: none;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
        content: '';
        position: absolute;
        left: 30px;
        top: 10px;
        width: 2em;
        height: 2em;
        background: url(${Image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;
