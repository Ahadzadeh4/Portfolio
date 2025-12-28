import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ScrollSnap from "./pages/ScrollSnap"
import "fullpage.js/dist/fullpage.css";
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
function App() {

  return (
    <>
      <QueryClientProvider client={client}>
        <Header />
        <ScrollSnap />
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </QueryClientProvider>

    </>
  )
}

export default App
