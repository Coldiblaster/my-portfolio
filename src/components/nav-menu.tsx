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

import { ModeToggle } from './theme/theme-toggle';

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
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur">
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
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
          <Button asChild>
            <Link
              href="/documents/curriculum-vinicius-bastazin.pdf"
              target="_blank"
              passHref
            >
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
                    className="hover:text-primary text-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild>
                  <Link
                    href="/documents/curriculum-vinicius-bastazin.pdf"
                    target="_blank"
                    passHref
                  >
                    Download CV
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
