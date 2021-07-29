import React from 'react'

const SideBar: React.FC = () => {
  return (
    <div className='side'>
      <div className='tag-area'>
        <h2 className='title'>인기 태그</h2>
        <ul className='tag-list'>
          <li>
            <a className='' href='/tag/apple'>
              apple
            </a>
          </li>
          <li>
            <a className='' href='/tag/test'>
              test
            </a>
          </li>
          <li>
            <a className='' href='/tag/dragons'>
              dragons
            </a>
          </li>
          <li>
            <a className='' href='/tag/green'>
              green
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
