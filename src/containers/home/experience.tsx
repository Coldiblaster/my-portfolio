'use client';

import { useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React, { useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { experiences } from '@/data/experience';

export const Experience = () => {
  const { theme } = useTheme();

  const [expandedExperiences, setExpandedExperiences] = useState<number[]>([]);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [mounted, setMounted] = React.useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const toggleExperience = (index: number) => {
    setExpandedExperiences(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };

  const visibleExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 3);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="experience" className="min-h-screen py-20" ref={ref}>
      <div className="mx-auto max-w-3xl space-y-6">
        <div
          className={`${isInView ? 'animate-fade-down mb-8 text-center' : 'hidden'}`}
        >
          <Badge variant="outline" className="mb-4">
            Experiência
          </Badge>
          <h2 className="text-muted-foreground mb-4 text-lg font-bold">
            Aqui está um resumo das minhas experiências mais recentes:
          </h2>
        </div>

        <div className="space-y-6">
          {visibleExperiences.map((experience, index) => (
            <Card
              key={index}
              className={`${mounted ? 'animate-fade-left bg-secondary/50' : 'hidden'}`}
              style={{
                animationDelay: `${index * 0.1}s`, // Atraso progressivo
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={
                        theme === 'light'
                          ? experience.logo
                          : experience.logoDark
                      }
                      alt={experience.company}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{experience.role}</h3>
                      <p className="text-muted-foreground text-sm">
                        {experience.period}
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {experience.responsibilities
                    .slice(
                      0,
                      expandedExperiences.includes(index) ? undefined : 3,
                    )
                    .map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start text-sm"
                      >
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                </ul>

                {experience.responsibilities.length > 3 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2"
                    onClick={() => toggleExperience(index)}
                  >
                    {expandedExperiences.includes(index) ? (
                      <>
                        Ver menos
                        <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Ver mais
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {experiences.length > 3 && (
          <div
            className={`${isInView ? 'animate-fade-up animate-delay-700 mt-6 text-center' : 'hidden'}`}
          >
            <Button
              variant="outline"
              onClick={() => setShowAllExperiences(!showAllExperiences)}
            >
              {showAllExperiences ? (
                <>
                  Ver menos experiências
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Ver mais experiências
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
