import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import Landing from './Pages/Landing/Landing'
import Main from './Routes/Main'
import Genre from './Pages/Genre/Genre'


const App = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/:page" exact component={Main} />
          <Route path="/category/:genre" component={Genre} />
        </Switch>
      </Router >
    </QueryClientProvider>
  )
}


export default App;
