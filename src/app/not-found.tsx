'use client';

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center">
      <div className="mb-8 animate-pulse text-lg font-bold sm:inline-block md:text-2xl">
        {'<VBA />'}
      </div>

      <h1 className="text-foreground text-6xl font-bold">404</h1>
      <h2 className="text-muted-foreground mt-4 text-2xl font-semibold">
        Página Não Encontrada
      </h2>
      <p className="text-muted-foreground mt-2 text-lg">
        Desculpe, mas a página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary mt-6 rounded px-4 py-2"
      >
        Voltar para o Início
      </Link>
    </div>
  );
};

export default NotFoundPage;
