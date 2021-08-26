import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ArticleList from '@/components/home/ArticleList'
import Pagination from '@/components/atoms/Pagination'
import { useArticleListState } from '@/contexts/ArticleListContext'
import useArticleListFether from '@/hooks/useArticleListFether'

const Articles: React.FC = () => {
  const history = useHistory()
  const { articleList, articleListPageInfo } = useArticleListState()

  const search = useLocation().search
  const currentPage = new URLSearchParams(search).get('currentPage')

  const { isLoading } = useArticleListFether({
    currentPage: currentPage === null ? 1 : Number(currentPage),
  })

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
