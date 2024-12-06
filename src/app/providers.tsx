'use client';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="mind-schedule-theme">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
