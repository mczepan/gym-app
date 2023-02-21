import React from 'react';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import AnimatedText from 'components/atoms/AnimatedText/AnimatedText';
import { HomeContentWrapper } from './HomeContent.styles';

const HomeContent = () => {
    return (
        <HomeContentWrapper>
            <Title text={'ExcerGym by MC'} />
            <AnimatedText text={'IMPROVE YOUR TECHNIQUE!'} />
            <p>
                <Title
                    text={
                        'Check out the most effective exercises and set to your gym plan'
                    }
                    size="small"
                />
                <Button text={'Explore Exercises'} />
            </p>
        </HomeContentWrapper>
    );
};

export default HomeContent;
