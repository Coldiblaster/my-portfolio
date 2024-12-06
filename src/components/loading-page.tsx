'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function LoadingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        className="mb-8 text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {'<VBA />'}
      </motion.div>

      <motion.div
        className="relative mb-8 h-24 w-24"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1,
        }}
      >
        <Loader2 className="h-full w-full animate-spin text-primary" />
      </motion.div>

      <motion.p
        className="text-lg text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Carregando minhas habilidades incríveis...
      </motion.p>
    </div>
  );
}
