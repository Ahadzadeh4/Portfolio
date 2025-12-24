import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ScrollSnap from "./pages/ScrollSnap"
import "fullpage.js/dist/fullpage.css";



function App() {

  return (
    <>
      <Header />
      <ScrollSnap />
      <div className="hidden lg:block">
        <Sidebar />
      </div>
    </>
  )
}

export default App
