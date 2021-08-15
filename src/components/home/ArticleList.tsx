import React, { ReactNode } from 'react'
import { ArticleType } from '@/contexts/ArticleListContext'

interface ArticleListProps {
  list: ArticleType[]
  isLoading: boolean
}

const ArticleList: React.FC<ArticleListProps> = ({ list, isLoading }) => {
  function renderTagList(list: string[]): ReactNode {
    return list.map((item: string, index: number) => (
      <li key={index}>
        <a className='' href='/tag/test'>
          {item}
        </a>
      </li>
    ))
  }

  function renderArticleList(): ReactNode {
    return isLoading
      ? 'loading...'
      : list.map((article: ArticleType, index: number) => {
          return (
            <li
              className='article-item'
              key={article.slug}
              data-slug={article.slug}
            >
              <p className='title'>
                <a href={`/article/${article.slug}`}>{article.title}</a>
              </p>
              <p className='desc'>{article.body}</p>
              <div className='info'>
                <div className='author-info'>
                  <a className='link' href='/@dohoons'>
                    <div className='img'>
                      <img src={article.author.image} alt='' />
                    </div>
                    <p className='name'>{article.author.username}</p>
                  </a>
                  <p className='date'>{article.updatedAt}</p>
                </div>
                <ul className='tag-list small'>
                  {renderTagList(article.tagList)}
                </ul>
              </div>
              <button type='button' className='btn-like'>
                <i className='fas fa-heart'></i>
                <span className='txt'>좋아요</span>
                <span className='count'>{article.favoritesCount}</span>
              </button>
            </li>
          )
        })
  }

  return <ul className='article-list'>{renderArticleList()}</ul>
}

export default ArticleList
