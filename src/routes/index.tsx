import Home from '@/page/Home'
import Article from '@/page/Article'
import NoMatch from '@/page/NoMatch'
import { ComponentType } from 'react'

export interface routeType {
  path: string
  component: ComponentType<any>
  exact: boolean
  routes?: routeType[]
}

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/article',
    component: Article,
    exact: true,
  },
  {
    path: '*',
    component: NoMatch,
    exact: false,
  },
]

export default routes
