'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { useTheme } from '@/components/theme/theme-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { allSkills, Skill } from '@/data/skills';

export const Skills = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const sectionRef = React.useRef<HTMLElement>(null);
  const additionalSkillsRef = React.useRef<HTMLDivElement>(null);

  const filteredSkills = allSkills.filter(
    skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || skill.category === selectedCategory), // Alteração aqui
  );

  const mainSkills = filteredSkills.slice(0, 6);
  const additionalSkills = filteredSkills.slice(6);

  const handleToggle = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setTimeout(() => {
        additionalSkillsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } else {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="flex h-full py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 animate-fade-right text-center">
          <Badge variant="secondary" className="mb-4">
            Skills
          </Badge>
          <h2 className="mb-4 text-3xl font-bold">
            Habilidades e Tecnologias que São Minha Paixão e Especialidade
          </h2>
          <p className="mb-6 text-muted-foreground">
            Explore minhas competências técnicas e ferramentas favoritas
          </p>
          <div className="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Input
              type="text"
              placeholder="Buscar habilidades..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full md:max-w-xs"
              leftIcon={<Search className="h-4 w-4 text-muted-foreground" />}
            />
            <Select
              defaultValue={selectedCategory}
              onValueChange={e => setSelectedCategory(e)}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Todas categoria" defaultValue="all" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas categoria</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="database">Database</SelectItem>
                <SelectItem value="tools">Tools</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <motion.div
          ref={additionalSkillsRef}
          className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {mainSkills.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>

        <Collapsible
          open={isOpen}
          onOpenChange={handleToggle}
          className="animate-fade-left animate-delay-500"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="mx-auto flex items-center gap-2"
            >
              {isOpen ? 'Ver menos' : 'Ver mais habilidades'}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, height: 0 },
                    visible: {
                      opacity: 1,
                      height: 'auto',
                      transition: {
                        staggerChildren: 0.05,
                        when: 'beforeChildren',
                      },
                    },
                  }}
                >
                  {additionalSkills.map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

function SkillCard({ skill }: { skill: Skill }) {
  const { theme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={skill.link} target="_blank">
          <motion.div
            className="flex cursor-pointer flex-col items-center rounded-lg bg-card p-4 transition-colors duration-300 hover:bg-accent"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="group relative mb-3 h-12 w-12">
              <Image
                src={theme === 'light' ? skill.iconLight : skill.iconDark}
                alt={`${skill.name} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </div>
            <span className="text-center text-sm font-medium">
              {skill.name}
            </span>
          </motion.div>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{skill.description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
