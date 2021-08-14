import React from 'react'
import ReactPagination from 'react-js-pagination'

interface PaginationProps {
  totalCount: number
  currentPage: number
  isLoading: boolean
  clickPageNumber: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  isLoading,
  clickPageNumber,
}) => {
  return (
    <div className='pagination'>
      {isLoading ? (
        '로딩중'
      ) : (
        <ReactPagination
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={totalCount}
          pageRangeDisplayed={10}
          onChange={clickPageNumber}
          prevPageText={
            <span className='fas fa-angle-left'>
              <span className='txt'>이전</span>
            </span>
          }
          firstPageText={
            <span className='fas fa-angle-double-left'>
              <span className='txt'>처음</span>
            </span>
          }
          lastPageText={
            <span className='fas fa-angle-double-right'>
              <span className='txt'>마지막</span>
            </span>
          }
          nextPageText={
            <span className='fas fa-angle-right'>
              <span className='txt'>다음</span>
            </span>
          }
        />
      )}
    </div>
  )
}

export default Pagination
