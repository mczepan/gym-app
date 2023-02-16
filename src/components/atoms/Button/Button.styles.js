import styled from 'styled-components';

export const StyledButton = styled.button`
    display: inline-block;
    background-color: var(--title-color-grey);
    color: var(--container-color);
    padding: 0.75rem 0.5rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);
    transition: background-color 0.3s ease-out;

    &:hover {
        background-color: var(--title-color);
    }

    @media screen and (max-width: 950px) {
        padding: 1rem 1.75rem;

        /* .button__icon {
        width: 22px;
        height: 22px;
    } */
    }
`;

// .button__icon {
//     margin-left: var(--mb-0-5);
// }

// .button--flex {
//     display: inline-flex;
//     align-items: center;
// }
