export default function Sobre() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Sobre o HydroShield</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa missão e como estamos transformando a prevenção de enchentes urbanas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">Nossa História</h3>
            <p className="mb-4">
              Fundada em 2025, a HydroShield nasceu da necessidade de oferecer soluções práticas e tecnológicas para o problema das enchentes urbanas, que afetam milhões de pessoas todos os anos.
            </p>
            <p>
              Nossa equipe de engenheiros desenvolveu um sistema integrado que combina hardware robusto com software inteligente para prevenir enchentes antes que elas aconteçam.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Nossa Missão</h3>
            <p className="mb-4">
              Reduzir em 80% os danos causados por enchentes urbanas até 2030, através de tecnologia acessível e sistemas de alerta precoce.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                <span>Prevenir perdas humanas e materiais</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                <span>Melhorar a resiliência urbana</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                <span>Fornecer dados para planejamento urbano</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-secondary mb-6">Nossa Equipe</h3>
          <div className="grid grid-cols-2  gap-6 ">
            {[
              { name: "Caio Beraldo", role: "Engenheiro de Software", img: "https://images.unsplash.com/photo-1740252117044-2af197eea287?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGF2YXRhcmVzfGVufDB8fDB8fHww" },
              { name: "Victor Kenzo", role: "Engenheiro de Software", img: "https://images.unsplash.com/photo-1701772164869-dfb2cac483dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcGl2YXJhJTIwZGVzZW5ob3xlbnwwfHwwfHx8MA%3D%3D" },
              
            ].map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}