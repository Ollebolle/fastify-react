import React from 'react'
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import routes from './routes'

const App = () => (
  <HashRouter>
    <main className="container">
      <Switch>
        {
          routes.map((route, index) => (
            <Route
              exact
              path={ route.url }
              component={ route.component }
              key={ route.url }
            />
          ))
        }
      </Switch>
    </main>
  </HashRouter>
)

export default App
