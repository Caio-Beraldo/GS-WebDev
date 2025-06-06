export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-water mr-2 text-accent"></i>
              AquaSafe
            </h3>
            <p className="text-gray-400">
              Soluções inteligentes para prevenção de enchentes urbanas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/solucao" className="text-gray-400 hover:text-accent transition">Solução</a></li>
              <li><a href="/sobre" className="text-gray-400 hover:text-accent transition">Sobre Nós</a></li>
              <li><a href="/login" className="text-gray-400 hover:text-accent transition">Login</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-accent"></i>
                São Paulo, Brasil
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-accent"></i>
                (11) 9999-9999
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-accent"></i>
                contato@hydroshield.com.br
              </li>
            </ul>
          </div>
          
          <div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HydroShield. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}