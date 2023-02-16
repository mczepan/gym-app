import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import ContainerWrapper from 'wrappers/ContainerWrapper/ContainerWrapper';

const MainTemplate = ({ children }) => {
    return (
        <ContainerWrapper>
            <Navigation />
            <main>{children}</main>
        </ContainerWrapper>
    );
};

export default MainTemplate;
