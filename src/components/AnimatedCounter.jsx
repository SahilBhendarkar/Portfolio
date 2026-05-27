import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const countRef = useRef(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold">
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
