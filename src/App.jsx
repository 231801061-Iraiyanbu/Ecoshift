import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [globalSearchTerm, setGlobalSearchTerm] = useState('')

  const handleGlobalSearch = (searchTerm) => {
    setGlobalSearchTerm(searchTerm)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} />
      case 'products':
        return <Products globalSearchTerm={globalSearchTerm} setGlobalSearchTerm={setGlobalSearchTerm} />
      case 'services':
        return <Services globalSearchTerm={globalSearchTerm} setGlobalSearchTerm={setGlobalSearchTerm} />
      case 'contact':
        return <Contact />
      default:
        return <Home setCurrentPage={handlePageChange} />
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-green-100 overflow-x-hidden">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
      />
      <main className="w-full">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-8 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🌿</div>
                <span className="text-xl font-bold">EcoSwitch</span>
              </div>
              <p className="text-green-200">
                Helping you find sustainable alternatives for a better planet, one product at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-green-200">
                <li><button onClick={() => handlePageChange('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => handlePageChange('products')} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => handlePageChange('services')} className="hover:text-white transition-colors">Get Recommendations</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-green-200">
                <li>Personal Care</li>
                <li>Home & Kitchen</li>
                <li>Clothing</li>
                <li>Cleaning Products</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-green-200">
                <li>📧 help@ecoswitch.com</li>
                <li>📞 +91-789456123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 EcoSwitch. Built with 💚 for a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
