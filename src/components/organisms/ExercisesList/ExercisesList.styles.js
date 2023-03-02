import styled from 'styled-components';
import { StyledGridWrapper } from 'wrappers/GridWrapper/GridWrapper.styles';

export const ExercisesListGridWrapper = styled(StyledGridWrapper)`
    padding: ${({ theme: { margin } }) => margin.m2};
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        padding: ${({ theme: { margin } }) => `${margin.m1} ${margin.m025}`};
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        padding: ${({ theme: { margin } }) => `${margin.m1} ${margin.m025}`};
        gap: ${({ theme: { margin } }) => `${margin.m05}`};
    }
`;
