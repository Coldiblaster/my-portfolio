'use client';

import { LucideArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    sessionStorage.setItem('scrollToTop', 'true');
    sessionStorage.removeItem('isScrollPaused');

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 h-10 w-10 animate-fade rounded-full bg-secondary shadow-lg"
        >
          <LucideArrowUp className="mx-auto" size={18} />
        </button>
      )}
    </>
  );
}
