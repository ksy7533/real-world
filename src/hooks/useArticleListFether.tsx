import { useState, useEffect, useCallback } from 'react'
import { getArticleList } from '@/api'
import {
  PAGE_LIMIT,
  useArticleListDispatch,
  ArticleType,
} from '@/contexts/ArticleListContext'

interface UseArticleListFetcher {
  data: {
    articles: ArticleType[]
    articlesCount: number
  } | null
  isLoading: boolean
  fetchData: (currentPage: number) => void
}

const useArticleListFetcher = ({
  currentPage,
}: {
  currentPage: number
}): UseArticleListFetcher => {
  const dispatch = useArticleListDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<{
    articles: []
    articlesCount: number
  } | null>(null)

  const fetchData = useCallback((currentPage) => {
    setIsLoading(true)
    try {
      getArticleList({
        currentPage: currentPage,
        pageLimit: PAGE_LIMIT,
      }).then((result) => {
        setData(result)
        setIsLoading(false)
      })
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData(currentPage)
  }, [fetchData, currentPage])

  useEffect(() => {
    if (!data) return
    dispatch({ type: 'SET_ARTICLE_LIST', articleList: data?.articles })
    dispatch({
      type: 'SET_ARTICLE_LIST_PAGE_INFO',
      articleListTotalCount: data.articlesCount,
      currentPage: Number(currentPage),
    })
  }, [data, currentPage, dispatch])

  return { isLoading, data, fetchData }
}

export default useArticleListFetcher
