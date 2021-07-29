import React from 'react'

const Pagination: React.FC = () => {
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

        <li className='active'>
          <a className='active' href='/feed/1' aria-label='Go to page number 1'>
            1
          </a>
        </li>
        <li className=''>
          <a className='' href='/feed/2' aria-label='Go to page number 2'>
            2
          </a>
        </li>
        <li className=''>
          <a className='' href='/feed/3' aria-label='Go to page number 3'>
            3
          </a>
        </li>

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
