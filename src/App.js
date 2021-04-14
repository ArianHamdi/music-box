import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PlaylistProvider from './Contexts/playlist-context'

import Routes from './Routes/index'

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
          return failureCount < 3 && error.message !== 'NoRetry'
        }
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <PlaylistProvider>

        <Routes />

      </PlaylistProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}


export default App;
