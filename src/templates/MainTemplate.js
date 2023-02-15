import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import ContainerWrapper from 'wrappers/ContainerWrapper/ContainerWrapper';

const MainTemplate = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>
                <ContainerWrapper>{children}</ContainerWrapper>
            </main>
        </>
    );
};

export default MainTemplate;
