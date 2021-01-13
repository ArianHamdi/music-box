import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Landing from './Pages/Landing/Landing'
import Main from './Routes/Main'
import Genre from './Pages/Genre/Genre'
import Artist from './Pages/Artist/Artist'


const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/:page" exact component={Main} />
          <Route path="/category/:genre" component={Genre} />
          <Route path="/artist/:id" component={Artist} />
        </Switch>
      </Router >

      <ReactQueryDevtools />

    </QueryClientProvider>
  )
}


export default App;
