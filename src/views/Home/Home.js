import React from 'react';
import SectionWrapper from 'wrappers/SectionWrapper/SectionWrapper';
import ExerciseImg from 'assets/images/exercise.jpg';
import ExerciseImgMobile from 'assets/images/exercise-mobile.jpg';
import HomeContent from 'components/molecules/HomeContent/HomeContent';
import { HomeWrapper, ExerciseImage, ExerciseImageMobile } from './Home.styles';
import Card from 'wrappers/CardWrapper/Card';

const Home = () => {
    return (
        <SectionWrapper>
            <Card>
                <HomeWrapper>
                    <div></div>
                    <HomeContent />
                    <ExerciseImage src={ExerciseImg} alt="Exercise" />
                    <ExerciseImageMobile
                        src={ExerciseImgMobile}
                        loading="lazy"
                        alt="Exercise"
                    />
                </HomeWrapper>
            </Card>
        </SectionWrapper>
    );
};

export default Home;
