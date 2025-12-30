import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ScrollSnap from "./pages/ScrollSnap"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
    mutations: {

    },
  },
})

function ResponsiveSidebar() {
  return (
    <div className="hidden lg:block">
      <Sidebar />
    </div>
  )
}


function App() {

  return (
      <QueryClientProvider client={client}>
        <Header />
        <ScrollSnap />
        <ResponsiveSidebar/>
      </QueryClientProvider>
  )
}

export default App
