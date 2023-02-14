import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    max-width: 968px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 992px) {
        margin-left: var(--mb-1-5);
        margin-right: var(--mb-1-5);
    }

    @media screen and (max-width: 350px) {
        margin-left: var(--mb-1);
        margin-right: var(--mb-1);
    }
`;
