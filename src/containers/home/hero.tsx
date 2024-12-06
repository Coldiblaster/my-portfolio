import { LucideMapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col-reverse items-center justify-center gap-12 py-20 md:min-h-[calc(100vh-65px)] md:flex-row md:justify-between md:gap-24">
      <div className="flex max-w-3xl flex-col justify-center gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="flex animate-fade-down gap-2 text-3xl font-bold animate-delay-75 md:text-6xl">
            Olá, sou o Vinícius
            <div className="animate-wiggle animate-infinite animate-ease-in">
              👋
            </div>
          </h1>
          <p className="animate-fade-right animate-delay-100">
            Sou um desenvolvedor full stack (React.js e Node.js) com foco na
            criação de experiências digitais excepcionais que sejam rápidas,
            acessíveis, visualmente atraentes e responsivas. Embora eu crie
            aplicações web há mais de 6 anos, ainda adoro isso como se fosse
            algo novo.
          </p>
        </div>

        <div className="flex animate-fade-up flex-col gap-2 text-foreground animate-delay-100">
          <div className="flex items-center gap-2">
            <LucideMapPin className="h-5 w-5" />
            <span className="text-sm">Presidente Prudente, São Paulo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </span>
            </div>
            <span className="text-sm">Disponível para novos projetos</span>
          </div>
        </div>

        <div className="flex animate-fade-up items-center gap-3 animate-delay-100">
          <Button variant="link" className="px-0" asChild>
            <Link href="https://github.com/Coldiblaster" target="_blank">
              <Image
                src="/icons/icon-github.svg"
                quality={100}
                width={24}
                height={24}
                alt="Ícone do github"
              />
            </Link>
          </Button>
          <Button variant="link" className="px-0" asChild>
            <Link href="https://www.linkedin.com/in/vbastazin/" target="_blank">
              <Image
                src="/icons/icon-linkedin.svg"
                quality={100}
                width={24}
                height={24}
                alt="Ícone do linkedin"
              />
            </Link>
          </Button>
        </div>
      </div>
      <Image
        src="/avatar-desk.png"
        quality={100}
        priority
        width={350}
        height={350}
        alt="Minha imagem de perfil"
        className="w-[250px] animate-fade-left animate-delay-300 md:w-[350px]"
      />
    </section>
  );
};
