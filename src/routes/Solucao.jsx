import { useState } from 'react'

export default function Solucao() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">Nossa Solução</h2>
        <p className="text-center text-gray-600 mb-8">Tecnologia avançada para prevenir enchentes</p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">Sistema de Bombas Inteligentes</h3>
            <p className="mb-4">
              Nossa solução utiliza bombas automatizadas instaladas em bueiros que:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Sensores de nível: Detectam em tempo real o volume de água nos bueiros</li>
              <li>Bombas de alta eficiência: Acionadas automaticamente quando necessário</li>
              <li>Conectividade: Integrado à rede de monitoramento municipal</li>
              
            </ul>
           
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Bomba para bueiro" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Sistema de Alertas</h3>
            <p className="mb-4">
              Receba notificações no seu celular antes que a enchente aconteça:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Avisos em tempo real sobre riscos na sua região</li>
              <li>Mapas de áreas seguras e rotas de evacuação</li>
              <li>Alertas sonoros para casos de emergência</li>
              
            </ul>
          </div>
          
          <div className="relative order-2 md:order-1">
            <div className="bg-white p-4 rounded-lg shadow-lg w-64 mx-auto">
              <div className="flex items-center mb-2">
                <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <i className="fas fa-exclamation"></i>
                </div>
                <span className="font-semibold">Alerta AquaSafe</span>
                <span className="text-gray-500 text-sm ml-auto">Agora</span>
              </div>
              <p className="text-sm">
                Risco de enchente na Av. Principal. Evite a região. 
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-secondary mb-8">Vídeo Explicativo</h3>
          
          <div className="max-w-3xl mx-auto bg-black rounded-lg overflow-hidden relative">
            <video 
              className="w-full" 
              controls 
              poster=""
            >
              <source src="/src/videos/Pitch.mp4" type="video/mp4"/>
              Seu navegador não suporta vídeos HTML5.
            </video>
            
            {!videoPlaying && (
              <button 
                onClick={() => {
                  document.querySelector('video').play()
                  setVideoPlaying(true)
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent bg-opacity-90 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-opacity-100 transition"
              >
                <i className="fas fa-play text-xl"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}