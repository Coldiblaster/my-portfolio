'use client';

import { useInView } from 'framer-motion';
import { Check, Copy, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const Contact = () => {
  const ref = useRef(null);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="flex h-screen items-center justify-center"
    >
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <div className={`${isInView ? 'animate-fade-down' : 'hidden'}`}>
          <Badge variant="outline" className="mb-4">
            Contato
          </Badge>
          <p className="text-muted-foreground text-lg font-bold">
            O que vem a seguir? Sinta-se à vontade para entrar em contato comigo
            se estiver procurando um desenvolvedor, tem uma dúvida ou
            simplesmente deseja se conectar.
          </p>
        </div>

        <div className="space-y-4">
          <div
            className={`${isInView ? 'animate-fade-right animate-delay-100 flex items-center justify-center gap-2' : 'hidden'}`}
          >
            <Mail className="h-6 w-6" />
            <span className="text-xl font-semibold">vbastazin@gmail.com</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => copyToClipboard('vbastazin@gmail.com', 'email')}
            >
              {copiedEmail ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div
            className={`${isInView ? 'animate-fade-left animate-delay-150 flex items-center justify-center gap-2' : 'hidden'}`}
          >
            <Phone className="h-6 w-6" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://wa.me/5518988111220?text=Olá%20[Seu%20Nome]!%20Encontrei%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20front-end.%20Podemos%20conversar?"
                  target="_blank"
                >
                  <span className="text-xl font-semibold">
                    +55 18 988111220
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Clique no número para enviar uma mensagem direto no whats-app
                </p>
              </TooltipContent>
            </Tooltip>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => copyToClipboard('+55 18 988111220', 'phone')}
            >
              {copiedPhone ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <div
          className={`${isInView ? 'animate-fade-up animate-delay-300 space-y-4' : 'hidden'}`}
        >
          <p className="text-muted-foreground">
            Você também pode me encontrar nessas plataformas!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="link" className="px-0" asChild>
              <Link href="https://github.com/Coldiblaster" target="_blank">
                <Image
                  src="/icons/icon-github.svg"
                  quality={100}
                  width={24}
                  height={24}
                  alt="Ícone do github"
                />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="link" className="px-0" asChild>
              <Link
                href="https://www.linkedin.com/in/vbastazin/"
                target="_blank"
              >
                <Image
                  src="/icons/icon-linkedin.svg"
                  quality={100}
                  width={24}
                  height={24}
                  alt="Ícone do linkedin"
                />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
