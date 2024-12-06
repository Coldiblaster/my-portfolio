'use client';

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mb-8 animate-pulse text-lg font-bold sm:inline-block md:text-2xl">
        {'<VBA />'}
      </div>

      <h1 className="text-6xl font-bold text-foreground">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-muted-foreground">
        Página Não Encontrada
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Desculpe, mas a página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="mt-6 rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
      >
        Voltar para o Início
      </Link>
    </div>
  );
};

export default NotFoundPage;
