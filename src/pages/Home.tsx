import React from 'react'
import SideBar from '@/components/home/SideBar'
import Pagination from '@/components/common/Pagination'
import useSWR from 'swr'
import axios, { AxiosResponse } from 'axios'

const Home: React.FC = () => {
  const fetcher = async (url: string): Promise<AxiosResponse> =>
    await axios.get(url).then((res) => res.data)

  const { data, error } = useSWR(
    'https://conduit.productionready.io/api/articles?offset=0&limit=20',
    fetcher
  )

  console.log(data)
  console.log(error)

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

          <ul className='article-list'>
            <li className='article-item'>
              <p className='title'>
                <a href='/article/foobar'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </a>
              </p>
              <p className='desc'>
                Accusamus aspernatur placeat rem reprehenderit eum ab laudantium
                asperiores est officia ducimus quasi ipsam deserunt cum velit
                esse, voluptatem doloremque maiores vero.
              </p>
              <div className='info'>
                <div className='author-info'>
                  <a className='link' href='/@dohoons'>
                    <div className='img'>
                      <img src='{{base}}/img/profile-dummy.jpg' alt='' />
                    </div>
                    <p className='name'>dohoons</p>
                  </a>
                  <p className='date'>Sun Dec 02 2018</p>
                </div>
                <ul className='tag-list small'>
                  <li>
                    <a className='' href='/tag/test'>
                      test
                    </a>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-like'>
                <i className='fas fa-heart'></i>
                <span className='txt'>좋아요</span>
                <span className='count'>1</span>
              </button>
            </li>
          </ul>

          <Pagination />
        </div>

        <SideBar />
      </div>
    </div>
  )
}

export default Home
