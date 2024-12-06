'use client';

import { Menu, Sun } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { ThemeToggle } from './theme/theme-toggle';

export function NavMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    // { label: 'About', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Trabalhos', href: '#work' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <div className="mr-4 flex">
          <Link
            href="/"
            className="text-lg font-bold sm:inline-block md:text-2xl"
          >
            {'<VBA />'}
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          {menuItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild>
            <Link href="/curriculum-vinicius-bastazin.pdf" target="_blank">
              Download CV
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden md:space-x-4">
          <Button variant="ghost" size="icon" className="mr-2">
            <Sun className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[540px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col space-y-4">
                {menuItems.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4">Download CV</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
