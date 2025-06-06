import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cadastrar from './routes/Cadastrar'
import Login from './routes/Login'
import Solucao from './routes/Solucao'
import Home from './routes/Home'
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/solucao" element={<Solucao />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App