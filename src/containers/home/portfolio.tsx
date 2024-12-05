'use client';

import { ChevronDown, ChevronUp, LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data/portfolio';

export const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section id="work" className="px-4 py-24">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="mb-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Trabalhos
          </Badge>
          <p className="text-lg font-bold text-muted-foreground">
            Alguns dos projetos notáveis que construí:
          </p>
        </div>

        <div className="space-y-6">
          {visibleProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-secondary/50">
              <CardContent className="p-0">
                <div
                  className={`flex h-full w-full flex-col items-center md:flex-row ${index % 2 !== 0 && 'flex-col-reverse'} `}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-full flex-1 bg-secondary p-6">
                        <div className="relative min-h-[288px] flex-1">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            quality={100}
                            className="z-0 h-full min-h-full rounded-2xl object-cover object-left" // Adicionado rounded-2xl
                          />
                        </div>
                      </div>
                      <div className="flex-1 space-y-4 p-6">
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-secondary"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Link
                          href={project.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 space-y-4 p-6">
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-secondary"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Link
                          href={project.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </Link>
                      </div>
                      <div className="w-full flex-1 bg-secondary p-6">
                        <div className="relative min-h-[288px] flex-1">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            quality={100}
                            className="z-0 h-full min-h-full rounded-2xl object-cover object-left" // Adicionado rounded-2xl
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {projects.length > 2 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              {showAllProjects ? (
                <>
                  Ver menos projetos
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Ver mais projetos
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
