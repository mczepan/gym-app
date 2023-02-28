import React from 'react';
import Title from 'components/atoms/Title/Title';
import {
    ContentText,
    ExerciseDetailsContentWrapper,
} from './ExerciseDetails.styles';

const ExerciseDetails = ({ bodyPart, equipment, name, target }) => {
    return name ? (
        <ExerciseDetailsContentWrapper>
            <Title text={name} size="large" />
            <ContentText>
                Being physically active can improve your brain health, help
                manage weight, reduce the risk of disease, strengthen bones and
                muscles, and improve your ability to do everyday activities.
                Exercise can help prevent excess weight gain or help maintain
                weight loss.
            </ContentText>
        </ExerciseDetailsContentWrapper>
    ) : null;
};

export default ExerciseDetails;
