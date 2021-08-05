import React, { useCallback, useEffect, useState } from 'react'
import classnames from 'classnames'
import { PAGE_LIMIT } from '@/contexts/ArticleListContext'
import { Link } from 'react-router-dom'

interface PaginationProps {
  totalCount: number
  currentPage: number
  totalPage: number
  isLoading: boolean
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  totalPage,
  isLoading,
}) => {
  const [pageList, setPageList] = useState<number[]>([])

  useEffect(() => {
    function range(start: number, end: number): number[] {
      return Array(end - start + 1)
        .fill(0)
        .map((_, index) => start + index)
    }
    setPageList(range(1, PAGE_LIMIT))
  }, [])

  const renderPageNumber = useCallback(() => {
    return pageList.map((item, index) => (
      <li className={classnames({ active: item === currentPage })} key={index}>
        <Link
          to={`/?currentPage=${item}`}
          className={classnames({ active: item === currentPage })}
        >
          {item}
        </Link>
      </li>
    ))
  }, [currentPage, pageList])

  return (
    <div className='pagination'>
      <ul>
        <li className=''>
          <a className='' href='/feed/1' aria-label='Go to first page'>
            <span className='fas fa-angle-double-left'>
              <span className='txt'>처음</span>
            </span>
          </a>
        </li>
        <li className=''>
          <a className='' href='/feed/0' aria-label='Go to previous page'>
            <span className='fas fa-angle-left'>
              <span className='txt'>이전</span>
            </span>
          </a>
        </li>

        {isLoading ? null : renderPageNumber()}

        <li className=''>
          <a className='' href='/feed/2' aria-label='Go to next page'>
            <span className='fas fa-angle-right'>
              <span className='txt'>다음</span>
            </span>
          </a>
        </li>
        <li className=''>
          <a className='' href='/feed/3' aria-label='Go to last page'>
            <span className='fas fa-angle-double-right'>
              <span className='txt'>마지막</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
