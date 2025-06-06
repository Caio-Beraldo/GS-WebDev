export default function Home() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Solução Inteligente para Prevenção de Enchentes
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Bombas automatizadas em bueiros e sistema de alerta via celular para reduzir os impactos das enchentes em áreas urbanas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/solucao" 
                className="bg-accent text-white px-6 py-3 rounded-full hover:bg-orange-600 transition font-medium"
              >
                Conheça a Solução
              </a>
              <a 
                href="/sobre" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition font-medium"
              >
                Sobre Nós
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29sdWNhb3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Enchente urbana" 
              className="rounded-lg shadow-xl w-full"
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}