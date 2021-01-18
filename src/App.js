import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PlaylistProvider from './Contexts/playlist-context'
import InitialPlaylist from './Components/InitialPlaylist/InitialPlaylist';

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
      <PlaylistProvider>

        <InitialPlaylist>

          <Routes />

        </InitialPlaylist>

      </PlaylistProvider>

      <ReactQueryDevtools />

    </QueryClientProvider>
  )
}


export default App;
