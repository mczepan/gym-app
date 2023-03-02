import React from 'react';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import Search from 'components/organisms/Search/Search';
import BodyParts from 'components/organisms/BodyParts/BodyParts';
import ExercisesList from 'components/organisms/ExercisesList/ExercisesList';
import { NoPaddingCard } from './Exercises.styles';
import Pagination from 'components/molecules/Pagination/Pagination';

const Exercises = () => {
    return (
        <SectionWrapper>
            <NoPaddingCard>
                <Search />
                <BodyParts />
                <ExercisesList />
                <Pagination />
            </NoPaddingCard>
        </SectionWrapper>
    );
};

export default Exercises;
