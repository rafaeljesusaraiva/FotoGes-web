import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-8">404 - Página Não Encontrada</h1>
      <Link href="/" passHref>
        <div className="cursor-pointer text-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 bg-color-primary hover:bg-color-primary-dark hover:text-white">
          Voltar à Página Inicial
        </div>
      </Link>
    </div>
  );
}
