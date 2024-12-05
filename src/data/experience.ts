interface Experience {
  company: string;
  logo: string;
  logoDark: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Silicon Village',
    logo: '/experience/silicon.svg',
    logoDark: '/experience/silicon.svg',
    role: 'Desenvolvedor Frontend Sênior',
    period: 'Jul 2023 - Nov 2024',
    responsibilities: [
      'Liderança técnica em projetos de grande escala utilizando React e Next.js',
      'Implementação de arquiteturas escaláveis e boas práticas de desenvolvimento',
      'Implementação de componentes reutilizáveis e padronização de design system com ferramentas como ShadCN e Radix UI.',
      'Otimização de performance e experiência do usuário',
      'Desenvolvimento de componentes reutilizáveis e documentação',
      'Integração eficiente com APIs RESTful utilizando Axios e TanStack Query (React Query)',
      'Code review e garantia de qualidade com ESLint e Prettier.',
      'Desenvolvimento e validação de formulários com React Hook Form e Zod',
      'Otimização de performance e SEO para garantir alta performance em aplicações web',
      'Implementação de notificações push usando OneSignal em projetos mobile',
      'Integração e gerenciamento de conteúdo dinâmico utilizando CMS como Prismic',
    ],
  },
  {
    company: 'Pixter',
    logo: '/experience/pixter-light.svg',
    logoDark: '/experience/pixter-dark.svg',
    role: 'Desenvolvedor Frontend Pleno',
    period: 'Nov 2021 - Jun 2023',
    responsibilities: [
      'Desenvolvimento e manutenção de plataformas web utilizando React e Next.js',
      'Integração eficiente com APIs RESTful para comunicação backend',
      'Implementação de novas funcionalidades e melhorias contínuas',
      'Refatoração de código para garantir maior legibilidade, performance e manutenção',
      'Criação de componentes reutilizáveis com foco em escalabilidade e documentação robusta',
      'Realização de code reviews para assegurar a qualidade e padronização do código',
      'Colaboração ativa com stakeholders para levantamento de requisitos e alinhamento de expectativas',
      'Integração e gerenciamento de conteúdo dinâmico utilizando CMS como Prismic',
    ],
  },
  {
    company: 'Mind Schedule',
    logo: '/experience/mind-schedule.svg',
    logoDark: '/experience/mind-schedule.svg',
    role: 'Desenvolvedor Full Stack',
    period: 'Projeto em desenvolvimento (Pessoal)',
    responsibilities: [
      'Planejamento estratégico e definição de arquitetura do projeto',
      'Desenvolvimento completo do front-end utilizando Next.js, garantindo interfaces modernas e responsivas',
      'Criação do back-end do zero com NestJS, priorizando performance e escalabilidade',
      'Desenvolvimento de componentes reutilizáveis com documentação clara para promover consistência e reutilização',
      'Manutenção e otimização de bancos de dados, assegurando eficiência e integridade dos dados',
      'Desenvolvimento e integração de APIs RESTful robustas para comunicação entre sistemas',
      'Otimização de performance e SEO para garantir alta performance em aplicações web',
    ],
  },
  {
    company: 'UChallenger',
    logo: '/experience/uchallenger-light.svg',
    logoDark: '/experience/uchallenger-dark.svg',
    role: 'Desenvolvedor Front End',
    period: 'Freelancer',
    responsibilities: [
      'Desenvolvimento de interfaces dinâmicas e interativas utilizando React',
      'Implementação de funcionalidades responsivas para garantir uma experiência de usuário otimizada em diversos dispositivos',
      'Integração com serviços de terceiros, garantindo comunicação eficiente e segura entre sistemas',
      'Desenvolvimento e implementação de APIs RESTful robustas para facilitar a integração entre o front-end e back-end',
    ],
  },
  {
    company: 'Safira Energia',
    logo: '/experience/safira.svg',
    logoDark: '/experience/safira.svg',
    role: 'Desenvolvedor Front End',
    period: 'Freelancer',
    responsibilities: [
      'Desenvolvimento de websites responsivos com foco em performance e usabilidade',
      'Implementação de designs dinâmicos e interativos utilizando React',
      'Integração com sistemas de gerenciamento de conteúdo (CMS) via Firebase para gerenciamento de dados dinâmicos',
      'Otimização de performance e SEO para garantir tempos de carregamento rápidos e melhor visibilidade nos motores de busca',
    ],
  },
];
