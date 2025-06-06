import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <i className="fas fa-water mr-2"></i>
          HydroShield
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/solucao" className="hover:text-accent transition">Solução</Link>
          <Link to="/sobre" className="hover:text-accent transition">Sobre</Link>
          <Link to="/login" className="hover:text-accent transition">Login</Link>
        </div>
        
        <button className="md:hidden text-xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  )
}