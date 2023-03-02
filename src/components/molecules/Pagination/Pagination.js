import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'reducers/exercises/ExercisesSlice';
import { PaginationElement, PaginationWrapper } from './Pagination.styles';

const Pagination = () => {
    const { currentPage, exercisesTotal } = useSelector(
        (state) => state.exercises
    );
    const dispatch = useDispatch();
    let maxPages = Math.ceil(exercisesTotal / 12);
    let items = [];
    let leftSide = currentPage - 2;

    if (leftSide <= 0) leftSide = 1;

    let rightSide = currentPage + 2;

    if (rightSide > maxPages) rightSide = maxPages;

    for (let number = leftSide; number <= rightSide; number++) {
        items.push(
            <PaginationElement
                key={number}
                isActive={number === currentPage}
                onClick={() => {
                    dispatch(setCurrentPage(number));
                }}
            >
                {number}
            </PaginationElement>
        );
    }
    const nextPage = () => {
        if (currentPage < maxPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    return (
        <PaginationWrapper>
            <PaginationElement onClick={prevPage}> &lsaquo; </PaginationElement>
            {items}
            <PaginationElement onClick={nextPage}> &rsaquo; </PaginationElement>
        </PaginationWrapper>
    );
};

export default Pagination;
