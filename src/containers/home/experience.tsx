'use client';

import { useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { useTheme } from '@/components/theme/theme-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { experiences } from '@/data/experience';

export const Experience = () => {
  const { theme } = useTheme();

  const [expandedExperiences, setExpandedExperiences] = useState<number[]>([]);
  const [showAllExperiences, setShowAllExperiences] = useState(false);

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

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="mx-auto max-w-3xl space-y-6">
        <div
          className={`${isInView ? 'mb-8 animate-fade-down text-center' : 'hidden'}`}
        >
          <Badge variant="secondary" className="mb-4">
            Experiência
          </Badge>
          <h2 className="mb-4 text-lg font-bold text-muted-foreground">
            Aqui está um resumo das minhas experiências mais recentes:
          </h2>
        </div>

        <div className="space-y-6">
          {visibleExperiences.map((experience, index) => (
            <Card
              key={index}
              className={`${isInView ? 'animate-fade-left bg-secondary/50' : 'hidden'}`}
              style={{
                animationDelay: `${index * 0.1}s`, // Atraso progressivo
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={
                        theme === 'dark' ? experience.logoDark : experience.logo
                      }
                      alt={experience.company}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{experience.role}</h3>
                      <p className="text-sm text-muted-foreground">
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
                        className="flex items-start text-sm text-muted-foreground"
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
            className={`${isInView ? 'mt-6 animate-fade-up text-center animate-delay-700' : 'hidden'}`}
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
