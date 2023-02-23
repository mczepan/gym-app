import styled from 'styled-components';
import { StyledCard } from 'wrappers/CardWrapper/Card.styles';

export const NoPaddingCard = styled(StyledCard)`
    padding: 0rem;
    height: 75vh;
    overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
