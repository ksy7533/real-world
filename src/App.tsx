import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import NoMatch from './page/NoMatch'

import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
