import React from 'react';
import TargetsListItem from 'components/atoms/TargetsListItem/TargetsListItem';
import { StyledTargetsList } from './TargetsList.styles';

const TargetsList = ({ target, bodyPart, equipment }) => {
    return (
        <StyledTargetsList>
            <TargetsListItem text={target} />
            <TargetsListItem text={bodyPart} />
            <TargetsListItem text={equipment} />
        </StyledTargetsList>
    );
};

export default TargetsList;
