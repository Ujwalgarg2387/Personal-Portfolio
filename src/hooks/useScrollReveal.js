import { useEffect, useRef } from 'react';

export function useScrollReveal(className = 'reveal', dependency) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [dependency]); // 👈 important
}

export function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
