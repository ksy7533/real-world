import React, { useEffect, useState } from 'react'
import SideBar from '@/components/home/SideBar'
import ArticleList from '@/components/home/ArticleList'
import Pagination from '@/components/atoms/Pagination'
import axios from 'axios'
import {
  useArticleListDispatch,
  useArticleListState,
} from '@/contexts/ArticleListContext'

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data)

const Home: React.FC = () => {
  const articleListState = useArticleListState()
  const dispatch = useArticleListDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetcher(
      'https://conduit.productionready.io/api/articles?offset=0&limit=10'
    ).then((result) => {
      dispatch({ type: 'SET_ARTICLE_LIST', articleList: result.articles })
      setIsLoading(false)
    })
  }, [dispatch])

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
            <li className='selected'>
              <a href='/feed'>내 담벼락</a>
            </li>
            <li className=''>
              <a href='/articles'>전체 글목록</a>
            </li>
          </ul>

          <p className='article-list-total'>1 / 3</p>

          <ArticleList
            isLoading={isLoading}
            list={articleListState.articleList}
          />

          <Pagination />
        </div>

        <SideBar />
      </div>
    </div>
  )
}

export default Home
