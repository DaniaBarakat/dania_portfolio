import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";

function Reveal({
  children,
  direction = "up",
  delay = 0,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    // Respect users who prefer reduced motion.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Fallback for browsers without IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) {
      return "translateY(0)";
    }

    switch (direction) {
      case "left":
        return "translateX(-40px)";

      case "right":
        return "translateX(40px)";

      case "down":
        return "translateY(-40px)";

      case "up":
      default:
        return "translateY(40px)";
    }
  };

  return (
    <Box
      ref={elementRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: "opacity 700ms ease, transform 700ms ease",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}

export default Reveal;