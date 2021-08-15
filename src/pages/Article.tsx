import React from 'react'

const Article: React.FC = () => (
  <div className='page-article'>
    <div className='article-header'>
      <div className='wrap'>
        <h2 className='subject'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h2>
        <p className='desc'>
          Minima iusto veritatis qui? Modi molestiae, sed deleniti inventore
          alias quia obcaecati dolores, tempore esse ex dicta itaque laudantium
          saepe iure laboriosam!
        </p>
        <div className='info'>
          <div className='author-info'>
            <a className='link' href='/@dohoons'>
              <div className='img'>
                <img
                  src='https://avatars1.githubusercontent.com/u/5266928?s=460&v=4'
                  alt=''
                />
              </div>
              <p className='name'>dohoons</p>
            </a>
            <p className='date'>Sun Dec 02 2018</p>
          </div>
          <button type='button' className='btn-like'>
            <i className='fas fa-heart'></i>
            <span className='txt'>좋아요</span>
            <span className='count'>2</span>
          </button>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='article-body'>
        <div className='body'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            aperiam repellat explicabo deserunt veniam aut consequuntur, iste,
            labore ut quisquam omnis. Quod eum quasi a eveniet modi ab, nihil
            ratione!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quibusdam odio, dolores rerum natus quos aut tenetur quo totam
            eligendi magni eveniet, aspernatur provident rem voluptate minus
            maxime animi iure.
          </p>
        </div>

        <ul className='tag-list'>
          <li>
            <a className='' href='/tag/apple'>
              apple
            </a>
          </li>
          <li>
            <a className='' href='/tag/dragons'>
              dragons
            </a>
          </li>
        </ul>
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

      <ul className='comment-list'>
        <li className='no-item'>등록된 댓글이 없습니다.</li>
        <li>
          <a className='img' href='/@dohoons'>
            <img
              src='https://avatars1.githubusercontent.com/u/5266928?s=460&amp;v=4'
              alt=''
            />
          </a>
          <div className='wrap'>
            <div className='info'>
              <a className='name' href='/@dohoons'>
                dohoons
              </a>
              <span className='date'>Fri Jan 04 2019</span>
            </div>
            <button type='button' className='del'>
              <i className='far fa-trash-alt'></i>{' '}
              <span className='hide'>삭제</span>
            </button>
            <div className='content'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              maxime maiores reiciendis perspiciatis dolorem, iusto eaque
              deleniti praesentium autem est sunt dicta quia suscipit rem
              laudantium tempore dolorum saepe aliquid.
            </div>
          </div>
        </li>
        <li>
          <a className='img' href='/@dohoons'>
            <img
              src='https://avatars1.githubusercontent.com/u/5266928?s=460&amp;v=4'
              alt=''
            />
          </a>
          <div className='wrap'>
            <div className='info'>
              <a className='name' href='/@dohoons'>
                dohoons
              </a>
              <span className='date'>Fri Jan 04 2019</span>
            </div>
            <button type='button' className='del'>
              <i className='far fa-trash-alt'></i>{' '}
              <span className='hide'>삭제</span>
            </button>
            <div className='content'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              maxime maiores reiciendis perspiciatis dolorem, iusto eaque
              deleniti praesentium autem est sunt dicta quia suscipit rem
              laudantium tempore dolorum saepe aliquid.
            </div>
          </div>
        </li>
        <li>
          <a className='img' href='/@dohoons'>
            <img
              src='https://avatars1.githubusercontent.com/u/5266928?s=460&amp;v=4'
              alt=''
            />
          </a>
          <div className='wrap'>
            <div className='info'>
              <a className='name' href='/@dohoons'>
                dohoons
              </a>
              <span className='date'>Fri Jan 04 2019</span>
            </div>
            <button type='button' className='del'>
              <i className='far fa-trash-alt'></i>{' '}
              <span className='hide'>삭제</span>
            </button>
            <div className='content'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              maxime maiores reiciendis perspiciatis dolorem, iusto eaque
              deleniti praesentium autem est sunt dicta quia suscipit rem
              laudantium tempore dolorum saepe aliquid.
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
)

export default Article
