import React from 'react';
import { Link } from 'react-router-dom';

const Exercises = () => {
    return (
        <section>
            <div>Exercises</div>
            <Link to="/exercises/1">Exercise 1</Link>
            <Link to="/exercises/2">Exercise 2</Link>
        </section>
    );
};

export default Exercises;
