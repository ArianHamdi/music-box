import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Routes from './Routes/index'

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 60 * 1000,
        refetchOnWindowFocus: true
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>

      <Routes />

      <ReactQueryDevtools />

    </QueryClientProvider>
  )
}


export default App;
