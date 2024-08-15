import React from 'react';
import ReactPaginate from 'react-paginate';
import { Container } from './style';

interface IPropsPagination {
  pageCount: number;
  nextLabel?: string;
  previousLabel?: string;
  onPageChange?: (event: any) => void;
  pageRangeDisplayed?: number;
  renderOnZeroPageCount?: null;
}

const Pagination: React.FC<IPropsPagination> = ({
  pageCount,
  onPageChange = () => {},
  nextLabel = 'next >',
  previousLabel = '< prev',
  pageRangeDisplayed = 5,
  renderOnZeroPageCount,
}) => {
  return (
    <Container>
      <ReactPaginate
        nextLabel={nextLabel}
        onPageChange={(e) => onPageChange(e.selected + 1)}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel={previousLabel}
        renderOnZeroPageCount={renderOnZeroPageCount}
      />
    </Container>
  );
};

export default Pagination;
