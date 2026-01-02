import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppContent from './AppContent'


const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
    mutations: {

    },
  },
})


function App() {


  return (
    <QueryClientProvider client={client}>
      <AppContent />
    </QueryClientProvider>
  )
}

export default App
