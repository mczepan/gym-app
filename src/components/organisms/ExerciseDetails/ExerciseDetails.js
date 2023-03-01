import React from 'react';
import Title from 'components/atoms/Title/Title';
import {
    ContentText,
    ExerciseDetailsContentWrapper,
} from './ExerciseDetails.styles';
import TargetsList from 'components/molecules/TargetsList/TargetsList';
import { useSelector } from 'react-redux';

const ExerciseDetails = () => {
    const {
        exerciseDetails: { name, bodyPart, equipment, target },
    } = useSelector((state) => state.exercises);

    return name ? (
        <ExerciseDetailsContentWrapper>
            <Title
                text={name}
                size="large"
                style={{ fontWeight: '700', textTransform: 'uppercase' }}
            />
            <ContentText>
                Being physically active can improve your brain health, help
                manage weight, reduce the risk of disease, strengthen bones and
                muscles, and improve your ability to do everyday activities.
                Exercise can help prevent excess weight gain or help maintain
                weight loss.
            </ContentText>
            <TargetsList
                bodyPart={bodyPart}
                equipment={equipment}
                target={target}
            />
        </ExerciseDetailsContentWrapper>
    ) : null;
};

export default ExerciseDetails;
