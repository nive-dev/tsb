import { HashRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import CategoryDetail from './pages/CategoryDetail'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App
