import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

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

interface CommentData {
  author: AuthorData
  body: string
  createdAt: string
  id: number
  updatedAt: string
}

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data)

const Article: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { slug }: { slug: string } = useParams()

  const [articleData, setArticleData] = useState<ArticleData>()
  const [commentListData, setCommentListData] = useState<CommentData[]>([])

  useEffect(() => {
    setIsLoading(true)
    Promise.all([
      fetcher(`https://conduit.productionready.io/api/articles/${slug}`),
      fetcher(
        `https://conduit.productionready.io/api/articles/${slug}/comments`
      ),
    ]).then((values) => {
      console.log(values)
      setArticleData(values[0].article)
      setCommentListData(values[1].comments)
      setIsLoading(false)
    })
  }, [slug])

  const renderCommentList = useMemo(() => {
    if (commentListData.length === 0) {
      return `등록된 댓글이 없습니다`
    }
    return commentListData.map((item: CommentData, index: number) => {
      return (
        <li key={`${item.id}-${index}`}>
          <a className='img' href={`/@${item.author.username}`}>
            <img src={item.author.image} alt='' />
          </a>
          <div className='wrap'>
            <div className='info'>
              <a className='name' href={`/@${item.author.username}`}>
                {item.author.username}
              </a>
              <span className='date'>{item.updatedAt}</span>
            </div>
            <button type='button' className='del'>
              <i className='far fa-trash-alt'></i>
              <span className='hide'>삭제</span>
            </button>
            <div className='content'>{item.body}</div>
          </div>
        </li>
      )
    })
  }, [commentListData])

  const renderTagList = useMemo(() => {
    return articleData?.tagList.map((item, index) => {
      return (
        <li key={`${item}-${index}`}>
          <a className='' href={`/tag/${item}`}>
            item
          </a>
        </li>
      )
    })
  }, [articleData])

  return isLoading ? null : (
    <div className='page-article'>
      <div className='article-header'>
        <div className='wrap'>
          <h2 className='subject'>{articleData?.title}</h2>
          <p className='desc'>{articleData?.description}</p>
          <div className='info'>
            <div className='author-info'>
              <a className='link' href={`/@${articleData?.author.username}`}>
                <div className='img'>
                  <img src={articleData?.author.image} alt='' />
                </div>
                <p className='name'>{articleData?.author.username}</p>
              </a>
              <p className='date'>{articleData?.createdAt}</p>
            </div>
            <button type='button' className='btn-like'>
              <i className='fas fa-heart'></i>
              <span className='txt'>좋아요</span>
              <span className='count'>{articleData?.favoritesCount}</span>
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='article-body'>
          <div className='body'>{articleData?.body}</div>
          <ul className='tag-list'>{renderTagList}</ul>
        </div>

        <div className='page-foot'>
          <button type='button' className='btn'>
            수정
          </button>
          <button type='button' className='btn'>
            삭제
          </button>
          <button type='button' className='btn'>
            목록
          </button>
        </div>

        <h3 className='comment-title'>댓글</h3>

        <form className='comment-form'>
          <div className='comment-txt'>
            <textarea
              rows={10}
              cols={40}
              placeholder='댓글을 입력하세요..'
              name='comment'
            ></textarea>
          </div>
          <div className='action'>
            <button type='submit' className='btn light'>
              등록
            </button>
          </div>
        </form>

        <ul className='comment-list'>{renderCommentList}</ul>
      </div>
    </div>
  )
}

export default Article
