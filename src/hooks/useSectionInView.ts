import { useInView } from 'react-intersection-observer';
import { useEffect, useCallback } from 'react';

type SetActiveSectionFn = (section: string) => void;

export const useSectionInView = (
  sectionId: string,
  setActiveSection: SetActiveSectionFn,
  threshold = 0.3
) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionId);
    }
  }, [inView, sectionId, setActiveSection]);

  return { ref, inView };
};

export const useScrollTo = () => {
  const scrollTo = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return scrollTo;
};
