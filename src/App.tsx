import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes, { routeType } from '@/routes'
import Container from '@/layouts/Container'
import { ArticleListProvider } from '@/contexts/ArticleListContext'

const App: React.FC = () => {
  const RouteWithSubRoutes = (route: routeType): ReactElement => {
    return (
      <Route
        exact={route.exact}
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    )
  }

  return (
    <ArticleListProvider>
      <Container>
        <Router>
          <Switch>
            {routes.map((route) => {
              return <RouteWithSubRoutes key={route.path} {...route} />
            })}
          </Switch>
        </Router>
      </Container>
    </ArticleListProvider>
  )
}

export default App
