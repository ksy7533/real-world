import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ArticleList from '@/components/home/ArticleList'
import Pagination from '@/components/atoms/Pagination'
import {
  useArticleListDispatch,
  useArticleListState,
  PAGE_LIMIT,
} from '@/contexts/ArticleListContext'

import axios from 'axios'

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data)

const Articles: React.FC = () => {
  const history = useHistory()
  const { articleList, articleListPageInfo } = useArticleListState()
  const dispatch = useArticleListDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const fetchArticleList = useCallback(
    (currentPage: number) => {
      setIsLoading(true)
      fetcher(
        `https://conduit.productionready.io/api/articles?offset=${
          (currentPage - 1) * 10
        }&limit=${PAGE_LIMIT}`
      ).then((result) => {
        dispatch({ type: 'SET_ARTICLE_LIST', articleList: result.articles })
        dispatch({
          type: 'SET_ARTICLE_LIST_PAGE_INFO',
          articleListTotalCount: result.articlesCount,
          currentPage,
        })
        setIsLoading(false)
      })
    },
    [dispatch]
  )

  const search = useLocation().search
  const currentPage = new URLSearchParams(search).get('currentPage')

  useEffect(() => {
    currentPage === null
      ? fetchArticleList(1)
      : fetchArticleList(Number(currentPage))
  }, [history, fetchArticleList, currentPage])

  const clickPageNumber = useCallback(
    (pageNumber) => {
      history.push({
        search: `?currentPage=${pageNumber}`,
      })
    },
    [history]
  )

  return (
    <>
      <p className='article-list-total'>
        {articleListPageInfo.currentPage} / {articleListPageInfo.totalPage}
      </p>

      <ArticleList isLoading={isLoading} list={articleList} />

      <Pagination
        totalCount={articleListPageInfo.totalCount}
        currentPage={articleListPageInfo.currentPage}
        clickPageNumber={clickPageNumber}
        isLoading={isLoading}
      />
    </>
  )
}

export default Articles
