import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Exercise from './Exercise/Exercise';
import Exercises from './Exercises/Exercises';
import Home from './Home/Home';

export const App = () => {
    return (
        <MainTemplate>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercises">
                    <Route index element={<Exercises />} />
                    <Route path=":id" element={<Exercise />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </MainTemplate>
    );
};

export default App;
