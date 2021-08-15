import Home from '@/pages/Home'
import Article from '@/pages/Article'
import NoMatch from '@/pages/NoMatch'
import { ComponentType } from 'react'

export interface routeType {
  path: string
  component: ComponentType<any>
  exact: boolean
  routes?: routeType[]
}

const routes = [
  {
    path: '/world',
    component: Home,
    exact: false,
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
