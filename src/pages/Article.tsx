import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useArticleAndCommentListFetcher, {
  CommentData,
} from '@/hooks/useArticleAndCommentListFetcher'

const Article: React.FC = () => {
  const { slug }: { slug: string } = useParams()
  const { data, isLoading } = useArticleAndCommentListFetcher({ slug })

  const renderCommentList = useMemo(() => {
    if (data.comments.length === 0) {
      return `등록된 댓글이 없습니다`
    }
    return data.comments.map((item: CommentData, index: number) => {
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
  }, [data.comments])

  const renderTagList = useMemo(() => {
    return data.article?.tagList?.map((item: string, index: number) => {
      return (
        <li key={`${item}-${index}`}>
          <a className='' href={`/tag/${item}`}>
            item
          </a>
        </li>
      )
    })
  }, [data.article])

  return isLoading ? null : (
    <div className='page-article'>
      <div className='article-header'>
        <div className='wrap'>
          <h2 className='subject'>{data.article?.title}</h2>
          <p className='desc'>{data.article?.description}</p>
          <div className='info'>
            <div className='author-info'>
              <a className='link' href={`/@${data.article?.author?.username}`}>
                <div className='img'>
                  <img src={data.article?.author?.image} alt='' />
                </div>
                <p className='name'>{data.article?.author?.username}</p>
              </a>
              <p className='date'>{data.article?.createdAt}</p>
            </div>
            <button type='button' className='btn-like'>
              <i className='fas fa-heart'></i>
              <span className='txt'>좋아요</span>
              <span className='count'>{data.article?.favoritesCount}</span>
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='article-body'>
          <div className='body'>{data.article?.body}</div>
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
