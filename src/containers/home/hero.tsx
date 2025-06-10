import { LucideMapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col-reverse items-center justify-center gap-12 py-20 md:min-h-[calc(100vh-65px)] md:flex-row md:justify-between md:gap-24">
      <div className="flex max-w-3xl flex-col justify-center gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="animate-fade-down animate-delay-75 flex gap-2 text-3xl font-bold md:text-6xl">
            Olá, sou o Vinícius
            <div className="animate-wiggle animate-infinite animate-ease-in">
              👋
            </div>
          </h1>
          <div className="flex flex-col gap-2">
            <p className="animate-fade-right animate-delay-100">
              Sou um desenvolvedor front end especializado em React.js, dedicado
              a criar experiências digitais excepcionais que sejam rápidas,
              acessíveis, visualmente atraentes e responsivas. Com mais de 7
              anos de atuação no desenvolvimento de aplicações web, mantenho a
              mesma paixão e entusiasmo do primeiro dia, sempre buscando
              inovação e qualidade em cada projeto.
            </p>
            <p className="animate-fade-right animate-delay-200">
              Acredito que tecnologia é uma ferramenta para conectar pessoas, e
              por isso foco em entregar soluções que unam desempenho técnico a
              uma experiência de usuário impecável — do design à implementação,
              sem perder a agilidade e escalabilidade.
            </p>
          </div>
        </div>

        <div className="animate-fade-up text-foreground animate-delay-100 flex flex-col gap-2">
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

        <div className="animate-fade-up animate-delay-100 flex items-center gap-3">
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
        className="animate-fade-left animate-delay-300 w-[250px] md:w-[350px]"
      />
    </section>
  );
};
