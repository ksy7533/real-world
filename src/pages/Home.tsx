import React, { useCallback } from 'react'
import SideBar from '@/components/home/SideBar'
import Articles from '@/components/home/Articles'
import Feed from '@/components/home/Feed'
import { Route, Switch, useHistory } from 'react-router-dom'
import classnames from 'classnames'

const Home: React.FC = () => {
  const history = useHistory()

  const isSelectedTabMenu = useCallback(
    (currentPath: string): boolean => {
      return history.location.pathname === currentPath
    },
    [history]
  )

  const handleClickTabMenu = useCallback(
    (currentPath): void => {
      if (isSelectedTabMenu(currentPath)) return
      history.push(currentPath)
    },
    [history, isSelectedTabMenu]
  )

  return (
    <div className='page-main'>
      <div className='top-visual init'>
        <p className='copy'>
          <span className='hello'>Hello</span> World
        </p>
      </div>
      <div className='container'>
        <div className='body'>
          <ul className='nav-tab'>
            <li
              className={classnames({
                selected: isSelectedTabMenu('/world/feed'),
              })}
            >
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault()
                  handleClickTabMenu('/world/feed')
                }}
              >
                내 담벼락
              </a>
            </li>
            <li
              className={classnames({
                selected: isSelectedTabMenu('/world/articles'),
              })}
            >
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault()
                  handleClickTabMenu('/world/articles')
                }}
              >
                전체 글목록
              </a>
            </li>
          </ul>

          <Switch>
            <Route path={`/world/feed`} exact component={Feed} />
            <Route path={`/world/articles`} exact component={Articles} />
          </Switch>
        </div>

        <SideBar />
      </div>
    </div>
  )
}

export default Home
