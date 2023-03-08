import React from 'react';
import Title from '../Title/Title';
import { Wrapper } from './NotFoundTitle.styles';

const NotFoundTitle = () => {
    return (
        <Wrapper>
            <Title text={'Exercises not found'}></Title>
        </Wrapper>
    );
};

export default NotFoundTitle;
