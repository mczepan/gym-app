import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import AnimatedText from 'components/atoms/AnimatedText/AnimatedText';
import { HomeContentWrapper } from './HomeContent.styles';

const HomeContent = () => {
    const navigate = useNavigate();

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
                <Button
                    text={'Explore Exercises'}
                    onClick={() => navigate('exercises')}
                />
            </p>
        </HomeContentWrapper>
    );
};

export default HomeContent;
