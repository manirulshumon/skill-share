import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PostDetailPage from './pages/PostDetailPage'
// import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            {/* <Route path="/login" element={<login />} /> */}
            {/* <Route path="/register" element={<RegisterPage />} /> */}
          </Routes>
          {/* <HomePage /> */}



        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App