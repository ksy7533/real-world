import { useState, useEffect, useCallback } from 'react'
import { getArticleCommentList, getArticle } from '@/api'

interface AuthorData {
  username: string
  bio: any
  image: string
  following: boolean
}

interface ArticleData {
  author: AuthorData
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: string[]
  title: string
}

export interface CommentData {
  author: AuthorData
  body: string
  createdAt: string
  id: number
  updatedAt: string
}

interface UseArticleAndCommnetListFetcher {
  data: {
    article: ArticleData | null
    comments: CommentData[]
  }
  isLoading: boolean
  fetchData: (slug: string) => void
}

const useArticleAndCommnetListFetcher = ({
  slug,
}: {
  slug: string
}): UseArticleAndCommnetListFetcher => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<{
    article: ArticleData | null
    comments: CommentData[]
  }>({
    article: null,
    comments: [],
  })

  const fetchData = useCallback((slug) => {
    setIsLoading(true)
    try {
      Promise.all([getArticle({ slug }), getArticleCommentList({ slug })]).then(
        (values) => {
          setData({
            article: values[0].article,
            comments: values[1].comments,
          })
          setIsLoading(false)
        }
      )
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData(slug)
  }, [fetchData, slug])

  return { isLoading, data, fetchData }
}

export default useArticleAndCommnetListFetcher
