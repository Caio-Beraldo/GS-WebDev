import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Página não encontrada</h2>
          <p className="text-lg text-gray-600 mb-8">
            A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition font-medium"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </section>
  )
}