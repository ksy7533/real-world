import React, { useMemo, useState } from 'react'

const Header: React.FC = () => {
  const [isLogin] = useState(false)

  const renderNav = useMemo(() => {
    return isLogin ? (
      <ul className='nav'>
        <li>
          <a className='home' href='/world'>
            Home
          </a>
        </li>
        <li>
          <a href='/login'>로그인</a>
        </li>
        <li>
          <a href='/join'>회원가입</a>
        </li>
      </ul>
    ) : (
      <ul className='nav'>
        <li>
          <a className='home' href='/world'>
            Home
          </a>
        </li>
        <li>
          <a href='/form'>
            <i className='far fa-edit'></i> 글등록
          </a>
        </li>
        <li>
          <a href='/@dohoons'>
            <i className='far fa-user'></i> 프로필
          </a>
        </li>
        <li>
          <a href='#'>로그아웃</a>
        </li>
      </ul>
    )
  }, [isLogin])

  return (
    <header className='common-header'>
      <div className='wrap'>
        <h1 className='logo'>
          <a href='/world'>
            <i className='fas fa-globe'></i> World
          </a>
        </h1>
        {renderNav}
        <div className='btn-wrap'>
          <button type='button' className='btn-menu'>
            <i className='fas fa-bars'></i> <span>메뉴</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
