import Header from "@/components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import ScrollSnap from "../pages/MainContent"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, useEffect } from "react"
import axios from "axios"



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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-portfolio/refs/heads/main/data.json")
      .then(() => (
        setIsLoading(false)
      ))
      .catch((err) => (
        setIsLoading(false),
        setError(err.message)

      ))
  },[])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        خطا در دریافت دیتا: {error}
      </div>
    );
  }

  return (
    <QueryClientProvider client={client}>
      <Header />
      <ScrollSnap />
      <ResponsiveSidebar />
    </QueryClientProvider>
  )
}

export default App
