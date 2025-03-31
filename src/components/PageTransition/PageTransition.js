'use client';

import { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import './PageTransition.css';

// Transition duration in milliseconds
const TRANSITION_DURATION = 400;
const HALF_DURATION = TRANSITION_DURATION / 2;
const QUARTER_DURATION = TRANSITION_DURATION / 4;

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('none'); // 'none', 'in', 'out'
  const isFirstLoad = useRef(true);

  // Capture scanline position when route changes
  // useEffect(() => {
  //   // This runs once on mount to set up the position capture
  //   const capturePosition = () => {
  //     const scanline = document.querySelector('.scanLine');
  //     if (scanline) {
  //       // Get the computed transform value
  //       const style = window.getComputedStyle(scanline);
  //       const transform = style.transform || style.webkitTransform;
        
  //       // Extract the Y value from the transform matrix
  //       let yPosition = 0;
  //       if (transform && transform !== 'none') {
  //         const matrix = transform.match(/matrix.*\((.+)\)/);
  //         if (matrix) {
  //           const values = matrix[1].split(', ');
  //           // The Y translation is in the 6th position (index 5) for 2D transforms
  //           // or 13th position (index 12) for 3D transforms
  //           yPosition = values.length > 12 ? values[13] : values[5];
  //         }
  //       }
        
  //       // Set the current position as a CSS variable
  //       document.documentElement.style.setProperty('--current-position', `${yPosition}px`);
  //     }
  //   };

  //   // Capture position immediately when route changes
  //   capturePosition();
  // }, [pathname, searchParams]);

  // Use useLayoutEffect for immediate transition start
  useLayoutEffect(() => {
    // Skip transition on initial page load
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    
    // Start fade-in phase
    setIsLoading(true);
    setTransitionPhase('in');
    
    // Switch to fade-out phase halfway through
    const fadeOutTimer = setTimeout(() => {
      setTransitionPhase('out');
    }, QUARTER_DURATION);
    
    // End transition after full duration
    const endTimer = setTimeout(() => {
      setTransitionPhase('none');
      setIsLoading(false);
    }, TRANSITION_DURATION);
    
    // Cleanup timers on unmount
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(endTimer);
    };
  }, [pathname, searchParams]);

  return (
    <div className={`page-wrapper ${isLoading ? 'loading-page' : ''} phase-${transitionPhase}`}>
      {children}
    </div>
  );
}
