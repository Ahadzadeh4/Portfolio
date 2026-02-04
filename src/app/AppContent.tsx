import Header from "@/components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import { useState, useEffect } from "react"
import axios from "axios"
import MainContent from "@/pages/MainContent"


function ResponsiveSidebar() {
  return (
    <div className="hidden lg:block">
      <Sidebar />
    </div>
  )
}


function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-data/refs/heads/main/data.json")
      .then(() => (
        setIsLoading(false)
      ))
      .catch((err) => (
        setIsLoading(false),
        setError(err.message)

      ))
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen transition-all duration-1000">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10 transition-all duration-1000">
       {error}
      </div>
    );
  }

  return (
      <div className="transition-all duration-1000">
        <Header />
        <MainContent/>
        <ResponsiveSidebar />
      </div>
  )
}

export default AppContent
